import React, { useEffect, useRef, useState } from "react";

export default function ScrollCanvas({ scrollProgressRef }) {
  const canvasRef = useRef(null);
  const [images, setImages] = useState([]);
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);
  const currentFrameRef = useRef(1);

  const totalFrames = 96;

  const [firstImage, setFirstImage] = useState(null);

  // 1. Preload all JPEG frames into browser memory cache, prioritizing the first frame
  useEffect(() => {
    let loadedCount = 0;
    const loadedImages = [];
    let isMounted = true;

    // Load first frame immediately for instant drawing
    const firstImg = new Image();
    firstImg.src = "/assets/ai-core/frame-001.jpg";
    firstImg.onload = () => {
      if (!isMounted) return;
      setFirstImage(firstImg);
      // Start preloading the remaining frames
      preloadRemaining();
    };
    firstImg.onerror = () => {
      if (!isMounted) return;
      preloadRemaining();
    };

    function preloadRemaining() {
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
    }

    return () => {
      isMounted = false;
    };
  }, []);

  // 2. High-performance requestAnimationFrame render loop with DPR scaling & lerp
  useEffect(() => {
    if (!firstImage && images.length === 0) return;

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
      currentFrameRef.current += (targetFrame - currentFrameRef.current) * 0.06;

      // Draw the current frame, fall back to firstImage if sequence is not loaded
      const frameIndex = Math.max(1, Math.min(totalFrames, Math.floor(currentFrameRef.current)));
      const img = images[frameIndex - 1] || firstImage;

      if (img) {
        const canvasWidth = rect.width;
        const canvasHeight = rect.height;
        const imgWidth = img.width;
        const imgHeight = img.height;

        const imgRatio = imgWidth / imgHeight;
        const canvasRatio = canvasWidth / canvasHeight;

        let drawWidth, drawHeight, drawX, drawY;
        const isMobile = canvasWidth < 768;

        if (isMobile) {
          // Contain scaling: fit the whole image inside the mobile viewport without cropping
          if (canvasRatio > imgRatio) {
            drawHeight = canvasHeight;
            drawWidth = canvasHeight * imgRatio;
          } else {
            drawWidth = canvasWidth;
            drawHeight = canvasWidth / imgRatio;
          }
          drawX = (canvasWidth - drawWidth) / 2;
          drawY = (canvasHeight - drawHeight) / 2;
        } else {
          // Cover scaling (original desktop crop-to-fill)
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
        }

        // Apply a scale factor of 1.0 on mobile to fill width, and 0.85 on desktop
        const scaleFactor = isMobile ? 1.0 : 0.85;
        const finalWidth = drawWidth * scaleFactor;
        const finalHeight = drawHeight * scaleFactor;
        const finalX = drawX + (drawWidth - finalWidth) / 2;
        const finalY = drawY + (drawHeight - finalHeight) / 2;

        ctx.drawImage(img, finalX, finalY, finalWidth, finalHeight);

        if (isMobile) {
          // Smooth vertical blend gradients to fade the video boundaries into the solid black canvas
          // Top edge fade
          const topGrad = ctx.createLinearGradient(0, finalY, 0, finalY + 80);
          if (topGrad) {
            topGrad.addColorStop(0, "#0a0a0c");
            topGrad.addColorStop(1, "rgba(10, 10, 12, 0)");
            ctx.fillStyle = topGrad;
            ctx.fillRect(0, finalY - 2, rect.width, 84);
          }

          // Bottom edge fade
          const bottomGrad = ctx.createLinearGradient(0, finalY + finalHeight - 80, 0, finalY + finalHeight);
          if (bottomGrad) {
            bottomGrad.addColorStop(0, "rgba(10, 10, 12, 0)");
            bottomGrad.addColorStop(1, "#0a0a0c");
            ctx.fillStyle = bottomGrad;
            ctx.fillRect(0, finalY + finalHeight - 82, rect.width, 84);
          }
        }
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
  }, [firstImage, isLoaded, images, scrollProgressRef]);



  return (
    <canvas
      ref={canvasRef}
      className="fixed top-0 left-0 w-screen h-screen block pointer-events-none"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 1,
        pointerEvents: "none",
        objectFit: "cover",
        imageRendering: "-webkit-optimize-contrast",
      }}
    />
  );
}
