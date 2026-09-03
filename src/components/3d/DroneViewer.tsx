'use client';

import React, { useRef, Suspense, useEffect, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Environment, ContactShadows, Float, Html, useProgress, useGLTF, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

// Graceful WebGL fallback component
function WebGLFallback() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center bg-brand-black text-brand-white/50 p-8 text-center border border-white/10 rounded-lg">
      <div className="w-16 h-16 mb-6 opacity-30">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
      </div>
      <p className="text-sm uppercase tracking-widest font-mono">WebGL Disabled</p>
      <p className="text-xs mt-2 max-w-md">Your environment does not support 3D hardware acceleration. Please enable hardware acceleration in your browser to view the interactive 3D model.</p>
    </div>
  );
}

// Hook to check WebGL support
function useWebGLSupport() {
  const [isSupported, setIsSupported] = React.useState<boolean | null>(null);

  useEffect(() => {
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setIsSupported(gl !== null && gl !== undefined);
    } catch (e) {
      setIsSupported(false);
    }
  }, []);

  return isSupported;
}


// Cinematic Assembly Engine
function AssemblyEngine({ targetRef }: { targetRef: React.RefObject<THREE.Group | null> }) {
  const initialized = useRef(false);
  const meshes = useRef<THREE.Mesh[]>([]);

  useEffect(() => {
    if (targetRef.current && !initialized.current) {
      targetRef.current.traverse((child) => {
        if ((child as THREE.Mesh).isMesh) {
          const mesh = child as THREE.Mesh;
          // Store original states
          mesh.userData.targetPosition = mesh.position.clone();
          mesh.userData.originalMaterial = mesh.material;
          
          // Explode components randomly outwards
          const distance = 4 + Math.random() * 6;
          const theta = Math.random() * Math.PI * 2;
          const phi = Math.random() * Math.PI;
          
          mesh.position.x += Math.sin(phi) * Math.cos(theta) * distance;
          mesh.position.y += Math.sin(phi) * Math.sin(theta) * distance + 2;
          mesh.position.z += Math.cos(phi) * distance;
          
          // Apply wireframe material for "blueprint" phase
          const wireMat = new THREE.MeshBasicMaterial({ color: 0xffffff, wireframe: true, transparent: true, opacity: 0 });
          mesh.material = wireMat;
          
          meshes.current.push(mesh);
        }
      });
      initialized.current = true;
    }
  }, [targetRef]);

  useFrame((state) => {
    const elapsed = state.clock.elapsedTime;
    
    meshes.current.forEach(mesh => {
      // Phase 1 (0-2s): Fade in wireframe
      if (elapsed < 2) {
        const mat = mesh.material as THREE.MeshBasicMaterial;
        if (mat.opacity !== undefined) {
          mat.opacity = THREE.MathUtils.lerp(mat.opacity, 1, 0.05);
        }
      }
      
      // Phase 2 (2-6s): Assemble (Lerp position)
      if (elapsed > 2 && elapsed < 6) {
        mesh.position.lerp(mesh.userData.targetPosition, 0.02);
      }
      
      // Phase 3 (6s+): Material transition
      if (elapsed > 6 && mesh.material !== mesh.userData.originalMaterial) {
        mesh.material = mesh.userData.originalMaterial;
      }
    });
  });

  return null;
}

// Scroll Flight Controller
function ScrollFlightController({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  useFrame(() => {
    if (groupRef.current && typeof window !== 'undefined') {
      const scrollY = window.scrollY;
      // Fly up
      const targetY = scrollY * 0.015; 
      groupRef.current.position.y = THREE.MathUtils.lerp(groupRef.current.position.y, targetY, 0.05);
      
      // Pitch forward
      const targetRotX = -(scrollY * 0.002);
      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, targetRotX, 0.05);
    }
  });
  return null;
}

// Premium Loader Component
function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      <div className="flex flex-col items-center justify-center gap-6 bg-brand-black/80 p-8 rounded-2xl backdrop-blur-md border border-white/10">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-2 border-white/10 rounded-full"></div>
          <div className="absolute inset-0 border-2 border-transparent border-t-white rounded-full animate-spin"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-white text-xs font-mono tracking-widest">{progress.toFixed(0)}</span>
          </div>
        </div>
        <div className="text-brand-white/50 tracking-[0.3em] uppercase text-[10px] animate-pulse">
          Initializing Systems
        </div>
      </div>
    </Html>
  );
}

// Procedural Drone built entirely from code for fallback
function DetailedProceduralDrone() {
  const groupRef = useRef<THREE.Group>(null);
  const propRefs = useRef<THREE.Group[]>([]);

  // Subtle breathing animation & Propeller rotation
  useFrame((state, delta) => {
    // Only start breathing and spinning after assembly is complete (approx 6s)
    if (state.clock.elapsedTime > 6) {
      if (groupRef.current) {
        groupRef.current.rotation.y += delta * 0.1;
        groupRef.current.position.y = Math.sin((state.clock.elapsedTime - 6) * 1.5) * 0.05;
      }
      
      // High speed rotation for propellers
      propRefs.current.forEach((prop, i) => {
        if (prop) {
          const direction = i % 2 === 0 ? 1 : -1;
          prop.rotation.y += delta * 40 * direction;
        }
      });
    }
  });

  const bodyMaterial = new THREE.MeshStandardMaterial({ color: "#111111", roughness: 0.2, metalness: 0.8 });
  const armMaterial = new THREE.MeshStandardMaterial({ color: "#222222", roughness: 0.3, metalness: 0.7 });
  const motorMaterial = new THREE.MeshStandardMaterial({ color: "#b87333", roughness: 0.4, metalness: 0.9 }); // Copperish
  const propMaterial = new THREE.MeshStandardMaterial({ color: "#050505", roughness: 0.1, metalness: 0.3 });
  const lensMaterial = new THREE.MeshPhysicalMaterial({ color: "#000000", metalness: 0.9, roughness: 0.1, clearcoat: 1.0 });

  return (
    <group ref={groupRef}>
      <AssemblyEngine targetRef={groupRef} />
      
      {/* Central Chassis */}
      <mesh position={[0, 0, 0]} castShadow receiveShadow material={bodyMaterial}>
        <boxGeometry args={[1.4, 0.4, 1.8]} />
      </mesh>
      
      {/* Upper deck */}
      <mesh position={[0, 0.25, 0]} castShadow receiveShadow material={armMaterial}>
        <boxGeometry args={[1.2, 0.1, 1.5]} />
      </mesh>

      {/* Camera Gimbal Assembly */}
      <group position={[0, -0.3, 0.8]}>
        <mesh castShadow receiveShadow material={armMaterial} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.05, 0.05, 0.3]} />
        </mesh>
        <mesh position={[0, -0.15, 0]} castShadow receiveShadow material={bodyMaterial}>
          <boxGeometry args={[0.3, 0.3, 0.3]} />
        </mesh>
        {/* Lens */}
        <mesh position={[0, -0.15, 0.16]} castShadow receiveShadow material={lensMaterial}>
          <sphereGeometry args={[0.12, 32, 32]} />
        </mesh>
      </group>

      {/* Battery Pack */}
      <mesh position={[0, 0.4, -0.2]} castShadow receiveShadow material={bodyMaterial}>
        <boxGeometry args={[0.8, 0.2, 1.0]} />
      </mesh>

      {/* 4 Arms & Motors */}
      {[
        [-1.2, 0, -1.2], [1.2, 0, -1.2],
        [-1.2, 0, 1.2], [1.2, 0, 1.2]
      ].map((pos, i) => (
        <group key={i} position={pos as [number, number, number]}>
          {/* Arm connector to body */}
          <mesh position={[-pos[0]/2, 0, -pos[2]/2]} rotation={[0, Math.atan2(pos[0], pos[2]), Math.PI/2]} castShadow receiveShadow material={armMaterial}>
            <cylinderGeometry args={[0.06, 0.06, 1.8]} />
          </mesh>
          
          {/* Motor Base */}
          <mesh position={[0, 0.1, 0]} castShadow receiveShadow material={armMaterial}>
            <cylinderGeometry args={[0.25, 0.25, 0.2, 32]} />
          </mesh>
          
          {/* Motor Stator (Copper) */}
          <mesh position={[0, 0.2, 0]} castShadow receiveShadow material={motorMaterial}>
            <cylinderGeometry args={[0.2, 0.2, 0.15, 32]} />
          </mesh>
          
          {/* Propeller Mount */}
          <mesh position={[0, 0.3, 0]} castShadow receiveShadow material={armMaterial}>
            <cylinderGeometry args={[0.05, 0.05, 0.1, 16]} />
          </mesh>

          {/* Propeller Blades */}
          <group ref={(el) => { if (el) propRefs.current[i] = el; }} position={[0, 0.32, 0]}>
            <mesh castShadow receiveShadow material={propMaterial}>
              <boxGeometry args={[1.6, 0.02, 0.12]} />
            </mesh>
          </group>
          
          {/* Landing Leg */}
          <mesh position={[0, -0.4, 0]} castShadow receiveShadow material={armMaterial}>
            <cylinderGeometry args={[0.03, 0.03, 0.8]} />
          </mesh>
        </group>
      ))}
    </group>
  );
}


function GLTFDrone({ url }: { url: string }) {
  const { scene } = useGLTF(url);
  const groupRef = useRef<THREE.Group>(null);
  
  // Find propeller nodes to animate
  const propellers = useMemo(() => {
    const nodes: THREE.Object3D[] = [];
    scene.traverse((child) => {
      const name = child.name.toLowerCase();
      if (name.includes('prop') || name.includes('rotor') || name.includes('blade') || name.includes('motor')) {
        nodes.push(child);
      }
      
      // Enhance materials for cinematic look
      if ((child as THREE.Mesh).isMesh) {
        const mesh = child as THREE.Mesh;
        mesh.castShadow = true;
        mesh.receiveShadow = true;
        
        if (mesh.material) {
          const mat = mesh.material as THREE.MeshStandardMaterial;
          if (mat.isMeshStandardMaterial) {
            mat.envMapIntensity = 2.5; // Stronger reflections for aerospace look
            mat.roughness = Math.max(0.1, mat.roughness * 0.8); // Make it slightly glossier
            mat.needsUpdate = true;
          }
        }
      }
    });
    return nodes;
  }, [scene]);

  // Subtle breathing animation & Propeller rotation
  useFrame((state, delta) => {
    if (state.clock.elapsedTime > 6) {
      if (groupRef.current) {
        // Gentle idle 360 rotation
        groupRef.current.rotation.y += delta * 0.1;
        // Slight vertical floating
        groupRef.current.position.y = Math.sin((state.clock.elapsedTime - 6) * 1.5) * 0.05;
      }
      
      // Animate propellers at high speed
      propellers.forEach((prop, i) => {
        // Alternate rotation direction for quadcopter logic
        const direction = i % 2 === 0 ? 1 : -1;
        prop.rotation.y += delta * 30 * direction;
        prop.rotation.z += delta * 30 * direction; // In case they are modeled on Z axis
      });
    }
  });

  return (
    <group ref={groupRef}>
      <AssemblyEngine targetRef={groupRef} />
      <primitive object={scene} />
    </group>
  );
}

// Mouse Tracking and Flip Controller
function MouseTracker({ groupRef }: { groupRef: React.RefObject<THREE.Group | null> }) {
  const flipTarget = useRef(0);

  useEffect(() => {
    const handleFlip = () => {
      // Toggle a 180 degree (Math.PI) flip on the Z axis
      flipTarget.current = flipTarget.current === 0 ? Math.PI : 0;
    };
    window.addEventListener('flip-drone', handleFlip);
    return () => window.removeEventListener('flip-drone', handleFlip);
  }, []);

  useFrame((state) => {
    if (groupRef.current) {
      // Smoothly interpolate rotation based on mouse position + flip state
      const targetX = (state.pointer.x * Math.PI) / 8;
      const targetY = (state.pointer.y * Math.PI) / 8;

      groupRef.current.rotation.x = THREE.MathUtils.lerp(groupRef.current.rotation.x, -targetY, 0.05);
      // Add the flipTarget to the Z rotation
      groupRef.current.rotation.z = THREE.MathUtils.lerp(groupRef.current.rotation.z, (-targetX * 0.5) + flipTarget.current, 0.05);
    }
  });
  return null;
}

interface DroneViewerProps {
  interactive?: boolean;
  scale?: number;
  modelUrl: string; // "procedural" or a .glb path
}

export function DroneViewer({ interactive = true, scale = 1, modelUrl }: DroneViewerProps) {
  const containerRef = useRef<THREE.Group>(null);
  const isWebGLSupported = useWebGLSupport();

  // Show nothing while checking (prevents hydration mismatch or premature crash)
  if (isWebGLSupported === null) {
    return <div className="w-full h-full bg-brand-black"></div>;
  }

  // Show fallback if WebGL is definitively not supported
  if (isWebGLSupported === false) {
    return <WebGLFallback />;
  }

  return (
    <div className="w-full h-full relative z-0">
      <Canvas shadows camera={{ position: [5, 2, 5], fov: 40 }} className="w-full h-full" gl={{ powerPreference: "high-performance", antialias: true }}>
        <Suspense fallback={<Loader />}>
          <color attach="background" args={['transparent']} />
          <fog attach="fog" args={['#000000', 5, 20]} />
          <Sparkles count={200} scale={15} size={2} speed={0.4} opacity={0.2} color="#ffffff" />
          
          <ambientLight intensity={0.5} />
          <spotLight position={[10, 15, 10]} angle={0.3} penumbra={1} intensity={2.5} castShadow shadow-bias={-0.0001} shadow-mapSize={[2048, 2048]} />
          <spotLight position={[-10, 5, -10]} angle={0.4} penumbra={1} intensity={1.2} color="#aaccff" />
          <spotLight position={[0, -5, -10]} angle={0.5} penumbra={1} intensity={2} color="#ffffff" />
          
          <group ref={containerRef}>
            <Float
              speed={1.5}
              rotationIntensity={0.1}
              floatIntensity={0.2}
              floatingRange={[-0.05, 0.05]}
            >
              <group scale={scale}>
                {modelUrl === 'procedural' ? <DetailedProceduralDrone /> : <GLTFDrone url={modelUrl} />}
              </group>
            </Float>
          </group>

          {interactive && <MouseTracker groupRef={containerRef} />}
          <ScrollFlightController groupRef={containerRef} />

          <Environment preset="studio" />
          
          <ContactShadows 
            position={[0, -1.5, 0]} 
            opacity={0.9} 
            scale={25} 
            blur={3} 
            far={5} 
            resolution={1024}
            color="#000000"
          />

          {interactive && (
            <OrbitControls 
              enablePan={false}
              enableZoom={false}
              minPolarAngle={Math.PI / 4}
              maxPolarAngle={Math.PI / 2 + 0.1}
              dampingFactor={0.05}
              autoRotate={true}
              autoRotateSpeed={1.0}
            />
          )}
        </Suspense>
      </Canvas>
    </div>
  );
}
