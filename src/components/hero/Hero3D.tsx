import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function Icosahedron() {
  const group = useRef<THREE.Group>(null);
  useFrame((_, dt) => {
    if (!group.current) return;
    group.current.rotation.y += dt * 0.22;
    group.current.rotation.x += dt * 0.06;
  });
  return (
    <group ref={group}>
      <mesh>
        <icosahedronGeometry args={[1.4, 0]} />
        <meshStandardMaterial color="#0A0A0A" metalness={0.2} roughness={0.55} transparent opacity={0.15} />
      </mesh>
      <lineSegments>
        <edgesGeometry args={[new THREE.IcosahedronGeometry(1.4, 0)]} />
        <lineBasicMaterial color="#FFFFFF" transparent opacity={0.85} />
      </lineSegments>
    </group>
  );
}

function ParticleField() {
  const positions = useMemo(() => {
    const arr = new Float32Array(80 * 3);
    for (let i = 0; i < 80; i++) {
      const r = 2.5 + Math.random() * 1.5;
      const t = Math.random() * Math.PI * 2;
      const p = Math.acos(2 * Math.random() - 1);
      arr[i * 3] = r * Math.sin(p) * Math.cos(t);
      arr[i * 3 + 1] = r * Math.sin(p) * Math.sin(t);
      arr[i * 3 + 2] = r * Math.cos(p);
    }
    return arr;
  }, []);

  const ref = useRef<THREE.Points>(null);
  useFrame((_, dt) => {
    if (!ref.current) return;
    ref.current.rotation.y += dt * 0.04;
    ref.current.rotation.x -= dt * 0.02;
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        size={0.035}
        sizeAttenuation
        color="#C8C8CC"
        depthWrite={false}
        opacity={0.9}
      />
    </Points>
  );
}

function SceneLights() {
  return (
    <>
      <ambientLight intensity={0.35} />
      <pointLight position={[3, 3, 3]} intensity={1.2} color="#FFFFFF" />
      <pointLight position={[-3, -2, 2]} intensity={0.5} color="#C8C8CC" />
    </>
  );
}

export default function Hero3D() {
  return (
    <Canvas
      camera={{ position: [0, 0, 4.5], fov: 42 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent", pointerEvents: "none" }}
    >
      <SceneLights />
      <Icosahedron />
      <ParticleField />
    </Canvas>
  );
}
