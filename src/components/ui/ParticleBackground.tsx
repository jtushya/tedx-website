import { useRef, useEffect } from 'react';
import * as THREE from 'three';

const ParticleBackground = () => {
  const mountRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0x000000, 0);
    mountRef.current.appendChild(renderer.domElement);

    // Create particles
    const particlesGeometry = new THREE.BufferGeometry();
    const particlesCount = 3000; // Increased particle count
    
    const posArray = new Float32Array(particlesCount * 3);
    const colorArray = new Float32Array(particlesCount * 3);
    const scaleArray = new Float32Array(particlesCount);
    
    // Positions, colors, and scales
    for (let i = 0; i < particlesCount * 3; i += 3) {
      // Position - Create a more spherical distribution
      const radius = 10;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);
      
      posArray[i] = radius * Math.sin(phi) * Math.cos(theta);
      posArray[i + 1] = radius * Math.sin(phi) * Math.sin(theta);
      posArray[i + 2] = radius * Math.cos(phi);
      
      // Color - Enhanced red gradient
      colorArray[i] = Math.random() * 0.8 + 0.2; // Red
      colorArray[i + 1] = Math.random() * 0.2; // Green
      colorArray[i + 2] = Math.random() * 0.2; // Blue
      
      // Scale - Random sizes for depth effect
      scaleArray[i / 3] = Math.random() * 2 + 0.5;
    }
    
    particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
    particlesGeometry.setAttribute('color', new THREE.BufferAttribute(colorArray, 3));
    particlesGeometry.setAttribute('scale', new THREE.BufferAttribute(scaleArray, 1));
    
    // Material with enhanced properties
    const particlesMaterial = new THREE.PointsMaterial({
      size: 0.02,
      vertexColors: true,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending,
      sizeAttenuation: true,
    });
    
    // Mesh
    const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
    scene.add(particlesMesh);
    
    // Camera position and initial rotation
    camera.position.z = 8;
    particlesMesh.rotation.x = 0.2;
    
    // Mouse movement effect
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    
    const handleMouseMove = (event: MouseEvent) => {
      mouseX = (event.clientX / window.innerWidth) * 2 - 1;
      mouseY = -(event.clientY / window.innerHeight) * 2 + 1;
      
      targetRotationX = mouseY * 0.2;
      targetRotationY = mouseX * 0.2;
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    // Handle resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    
    window.addEventListener('resize', handleResize);
    
    // Animation with smooth rotation
    const animate = () => {
      requestAnimationFrame(animate);
      
      // Smooth rotation
      particlesMesh.rotation.x += (targetRotationX - particlesMesh.rotation.x) * 0.05;
      particlesMesh.rotation.y += (targetRotationY - particlesMesh.rotation.y) * 0.05;
      
      // Continuous gentle rotation
      particlesMesh.rotation.z += 0.001;
      
      // Pulsing effect
      const time = Date.now() * 0.001;
      particlesMesh.scale.x = 1 + Math.sin(time) * 0.1;
      particlesMesh.scale.y = 1 + Math.sin(time) * 0.1;
      particlesMesh.scale.z = 1 + Math.sin(time) * 0.1;
      
      renderer.render(scene, camera);
    };
    
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      mountRef.current?.removeChild(renderer.domElement);
    };
  }, []);

  return <div ref={mountRef} className="absolute inset-0 -z-10" />;
};

export default ParticleBackground;