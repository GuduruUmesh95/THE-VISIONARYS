export const StrandGlowShader = {
  vertexShader: `
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      // Calculate normal and view position in view space
      vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
      vNormal = normalize(normalMatrix * normal);
      vViewPosition = -mvPosition.xyz;
      vUv = uv;
      vWorldPosition = (modelMatrix * vec4(position, 1.0)).xyz;
      
      gl_Position = projectionMatrix * mvPosition;
    }
  `,
  fragmentShader: `
    uniform vec3 uBaseColor;      // Neutral white/cream base color
    uniform vec3 uGlowColor;      // Warm amber/orange glow color
    uniform float uGlowStrength;  // Glow multiplier
    uniform float uOpacity;       // Overall opacity
    uniform float uScrollProgress; // Global scroll progress
    
    varying vec3 vNormal;
    varying vec3 vViewPosition;
    varying vec2 vUv;
    varying vec3 vWorldPosition;
    
    void main() {
      vec3 normal = normalize(vNormal);
      vec3 viewDir = normalize(vViewPosition);
      
      // 1. Shading/Lighting: Simple Lambertian key light (from top-left-front) to give 3D volume
      vec3 keyLightDir = normalize(vec3(3.0, 5.0, 4.0));
      float ndl = max(dot(normal, keyLightDir), 0.0);
      
      // Fill light from opposite side
      vec3 fillLightDir = normalize(vec3(-3.0, -2.0, -1.0));
      float fillNdl = max(dot(normal, fillLightDir), 0.0);
      
      // Ambient term
      float ambient = 0.28;
      
      // Specular highlight (Blinn-Phong) to give the tubes a premium reflective 3D appearance
      vec3 halfDir = normalize(keyLightDir + viewDir);
      float spec = pow(max(dot(normal, halfDir), 0.0), 32.0); // glossy highlight
      vec3 specular = vec3(1.0) * spec * 0.38; // white highlight reflection
      
      // Shaded base color (cream/off-white with realistic highlights and shadows)
      vec3 shadedBase = uBaseColor * (ndl * 0.75 + fillNdl * 0.15 + ambient) + specular;
      
      // 2. Emissive Glow: Concentrated near the root closest to the core (vUv.x represents length along the tube, 0.0 is root)
      // Tightened decay factor to 9.5 so the glow fades rapidly away from the core
      float glowFactor = exp(-vUv.x * 9.5); 
      
      // Fresnel term on the glowing tip to enhance neon intensity at the tube edge
      float fresnel = pow(1.0 - max(dot(normal, viewDir), 0.0), 3.0);
      
      // Ambient glow scales based on scroll progress (active in Stage 2 and peaks in Stage 3)
      float progressScale = 1.0;
      if (uScrollProgress < 0.25) {
        // Subtle ambient glow in Stage 1, scales up as it enters Stage 2
        progressScale = 0.45 + (uScrollProgress / 0.25) * 0.55;
      }
      
      vec3 emissiveGlow = uGlowColor * glowFactor * uGlowStrength * (1.0 + fresnel * 2.5) * progressScale;
      
      // 3. Final color output (shaded base + glowing tip)
      vec3 finalColor = shadedBase + emissiveGlow;
      
      gl_FragColor = vec4(finalColor, uOpacity);
    }
  `
};
