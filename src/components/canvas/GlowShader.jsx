import * as THREE from 'three';
import React from 'react'

export const GlowShader = {
    uniforms: {
      glowColor: { value: new THREE.Color(0x0084ff) }, // Change the color as needed
      intensity: { value: 1.0 },
    },
    vertexShader: `
      varying vec2 vUv;
  
      void main() {
        vUv = uv;
        gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
      }
    `,
    fragmentShader: `
      uniform vec3 glowColor;
      uniform float intensity;
      varying vec2 vUv;
  
      void main() {
        vec2 uv = vUv;
        float dist = distance(uv, vec2(0.5, 0.0)); // Distance from center bottom
        float glow = smoothstep(0.5, 0.0, dist); // Smooth transition
        gl_FragColor = vec4(glowColor, intensity * glow);
      }
    `,
  };

export default GlowShader