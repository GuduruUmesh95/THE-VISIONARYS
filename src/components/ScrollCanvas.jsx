import React, { useEffect, useRef, useState } from "react";

export default function ScrollCanvas({ scrollProgressRef }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(1);

  const totalFrames = 96;

  // 1. Preload all JPEG frames into browser memory cache
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];
    let isMounted = true;

    for (let i = 1; i <= totalFrames; i++) {
      const img = new Image();
      const frameNum = String(i).padStart(3, "0");
      img.src = `/assets/ai-core/frame-${frameNum}.jpg`;
      
      img.onload = () => {
        if (!isMounted) return;
        loadedCount++;
        setLoadingProgress(Math.round((loadedCount / totalFrames) * 100));
        
        if (loadedCount === totalFrames) {
          // Sort to ensure the array elements match their correct sequence index
          loadedImages.sort((a, b) => a.index - b.index);
          setImages(loadedImages.map(item => item.img));
          setIsLoaded(true);
        }
      };

      img.onerror = () => {
        console.error(`Failed to load frame-${frameNum}.jpg`);
        if (!isMounted) return;
        loadedCount++;
        if (loadedCount === totalFrames) {
          setIsLoaded(true);
        }
      };

      loadedImages.push({ index: i, img });
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. High-performance requestAnimationFrame render loop with DPR scaling & lerp
  useEffect(() => {
    if (!isLoaded || images.length === 0) return;

    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");

    const render = () => {
      const rect = canvas.getBoundingClientRect();
      const dpr = window.devicePixelRatio || 1;
      
      // Dynamic Retina resolution scaling
      if (canvas.width !== rect.width * dpr || canvas.height !== rect.height * dpr) {
        canvas.width = rect.width * dpr;
        canvas.height = rect.height * dpr;
      }

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.save();
      ctx.scale(dpr, dpr);

      // Lerp scrub transition to prevent jerky jumps
      const targetFrame = 1 + (scrollProgressRef.current * (totalFrames - 1));
      currentFrameRef.current += (targetFrame - currentFrameRef.current) * 0.08;

      // Draw the current frame
      const frameIndex = Math.max(1, Math.min(totalFrames, Math.floor(currentFrameRef.current)));
      const img = images[frameIndex - 1];

      if (img) {
        const canvasWidth = rect.width;
        const canvasHeight = rect.height;
        const imgWidth = img.width;
        const imgHeight = img.height;

        const imgRatio = imgWidth / imgHeight;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, drawX, drawY;

        // Aspect ratio cover calculations (perfect crop fill)
        if (canvasRatio > imgRatio) {
          drawWidth = canvasWidth;
          drawHeight = canvasWidth / imgRatio;
          drawX = 0;
          drawY = (canvasHeight - drawHeight) / 2;
        } else {
          drawWidth = canvasHeight * imgRatio;
          drawHeight = canvasHeight;
          drawX = (canvasWidth - drawWidth) / 2;
          drawY = 0;
        }

        ctx.drawImage(img, drawX, drawY, drawWidth, drawHeight);
      }

      // 3. Subtle pulsing gold circuit glow overlay (active as user reaches 'Our Clients')
      const time = Date.now() * 0.0015;
      const pulseOpacity = 0.08 + Math.sin(time) * 0.04;
      const scrollProgress = scrollProgressRef.current;

      if (scrollProgress > 0.8) {
        const glowFactor = (scrollProgress - 0.8) / 0.2; // fade in glow smoothly
        const grad = ctx.createRadialGradient(
          rect.width / 2,
          rect.height / 2,
          50,
          rect.width / 2,
          rect.height / 2,
          Math.max(rect.width, rect.height) * 0.6
        );
        grad.addColorStop(0, `rgba(255, 174, 92, ${pulseOpacity * glowFactor * 0.85})`);
        grad.addColorStop(0.5, `rgba(255, 138, 61, ${pulseOpacity * glowFactor * 0.35})`);
        grad.addColorStop(1, "rgba(10, 10, 12, 0)");
        
        ctx.fillStyle = grad;
        ctx.fillRect(0, 0, rect.width, rect.height);
      }

      ctx.restore();
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animId);
    };
  }, [isLoaded, images, scrollProgressRef]);

  // Loading Screen Overlay
  if (!isLoaded) {
    return (
      <div className="fixed inset-0 w-full h-full bg-[#0a0a0c] z-50 flex flex-col items-center justify-center pointer-events-auto">
        <div className="flex flex-col items-center max-w-xs w-full px-6">
          <img 
            src="/logo-transparent-png-mp8qVyLKkzCpX33v.avif" 
            alt="The Visionarys Logo" 
            className="w-16 h-16 object-contain mb-8 animate-pulse"
          />
          <div className="w-full bg-white/5 h-[2px] rounded-full overflow-hidden mb-3">
            <div 
              className="bg-accent-glow h-full transition-all duration-300 ease-out"
              style={{ width: `${loadingProgress}%` }}
            />
          </div>
          <span className="text-[10px] font-mono tracking-[0.2em] text-secondary uppercase">
            Initializing Core // {loadingProgress}%
          </span>
        </div>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      className="w-full h-full block"
      style={{
        imageRendering: "-webkit-optimize-contrast",
      }}
    />
  );
}
