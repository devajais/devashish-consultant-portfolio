import { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Icosahedron, MeshDistortMaterial, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

/** The glowing, gently distorting core object. */
function Core() {
  const group = useRef<THREE.Group>(null);

  useFrame((state) => {
    if (!group.current) return;
    const { x, y } = state.pointer;
    // ease the group toward the pointer for a parallax feel
    group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.5, 0.05);
    group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.4, 0.05);
  });

  return (
    <group ref={group}>
      <Float speed={1.4} rotationIntensity={0.6} floatIntensity={0.9}>
        {/* solid distorted core */}
        <Icosahedron args={[1.35, 10]}>
          <MeshDistortMaterial
            color="#0b0d10"
            emissive="#0e2a33"
            roughness={0.25}
            metalness={0.9}
            distort={0.32}
            speed={1.4}
            envMapIntensity={0.8}
          />
        </Icosahedron>

        {/* wireframe shell */}
        <Icosahedron args={[1.55, 2]}>
          <meshBasicMaterial color="#22d3ee" wireframe transparent opacity={0.12} />
        </Icosahedron>
      </Float>

      <Sparkles count={34} scale={7} size={2.4} speed={0.4} color="#7c5cff" opacity={0.6} />
      <Sparkles count={22} scale={9} size={1.6} speed={0.25} color="#22d3ee" opacity={0.5} />
    </group>
  );
}

/** Subtle camera drift so the scene never feels static. */
function Rig() {
  const { camera } = useThree();
  useFrame((state) => {
    camera.position.x = THREE.MathUtils.lerp(camera.position.x, state.pointer.x * 0.6, 0.03);
    camera.position.y = THREE.MathUtils.lerp(camera.position.y, state.pointer.y * 0.4, 0.03);
    camera.lookAt(0, 0, 0);
  });
  return null;
}

function Lights() {
  return (
    <>
      <ambientLight intensity={0.4} />
      <pointLight position={[4, 3, 4]} intensity={30} color="#22d3ee" />
      <pointLight position={[-4, -2, 2]} intensity={24} color="#7c5cff" />
      <pointLight position={[0, 2, -4]} intensity={12} color="#ffffff" />
    </>
  );
}

export default function Scene3DCanvas() {
  const wrap = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(true);
  const dpr = useMemo<[number, number]>(() => [1, 1.5], []);

  // Only render frames while the hero is on screen — frees the GPU/main thread
  // for smooth scrolling through the rest of the page.
  useEffect(() => {
    const el = wrap.current;
    if (!el || typeof IntersectionObserver === 'undefined') return;
    const io = new IntersectionObserver(
      ([entry]) => setActive(entry.isIntersecting),
      { threshold: 0.01 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <div ref={wrap} className="absolute inset-0">
      <Canvas
        dpr={dpr}
        frameloop={active ? 'always' : 'never'}
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true, powerPreference: 'high-performance' }}
        style={{ pointerEvents: 'none' }}
      >
        <fog attach="fog" args={['#08090b', 5, 12]} />
        <Lights />
        <Core />
        <Rig />
      </Canvas>
    </div>
  );
}
