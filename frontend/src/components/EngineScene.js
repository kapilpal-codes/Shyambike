import { useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Environment, Float, ContactShadows, RoundedBox } from "@react-three/drei";
import * as THREE from "three";

const SILVER = { color: "#d6dbe2", metalness: 0.85, roughness: 0.3 };
const GUNMETAL = { color: "#5d646d", metalness: 0.7, roughness: 0.42 };

const DISC = { color: "#e8ecf1", metalness: 1, roughness: 0.16 };
const ANODIZED = { color: "#2a2d33", metalness: 0.9, roughness: 0.35 };

const Engine = ({ position }) => {
  const ref = useRef();
  const exhaust = useMemo(
    () =>
      new THREE.CatmullRomCurve3([
        new THREE.Vector3(0.55, 2.45, 0.55),
        new THREE.Vector3(0.95, 1.95, 0.95),
        new THREE.Vector3(1.0, 1.1, 1.1),
        new THREE.Vector3(0.8, 0.3, 1.05),
        new THREE.Vector3(0.6, -0.5, 0.9),
      ]),
    []
  );
  useFrame((_, dt) => {
    ref.current.rotation.y += dt * 0.3;
  });
  return (
    <group position={position}>
      <mesh position={[0, 0.9, -1.5]}>
        <torusGeometry args={[2.5, 0.028, 16, 110]} />
        <meshStandardMaterial color="#d7ff3e" emissive="#d7ff3e" emissiveIntensity={2.2} />
      </mesh>
      <group ref={ref} scale={0.9}>
        <RoundedBox args={[2.7, 1.7, 1.3]} radius={0.18} smoothness={4} castShadow>
          <meshStandardMaterial {...GUNMETAL} />
        </RoundedBox>
        <mesh position={[0.5, 0, 0.68]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.72, 0.72, 0.14, 48]} />
          <meshStandardMaterial {...DISC} />
        </mesh>
        {[...Array(6)].map((_, i) => {
          const a = (i / 6) * Math.PI * 2;
          return (
            <mesh key={i} position={[0.5 + Math.cos(a) * 0.5, Math.sin(a) * 0.5, 0.76]} rotation={[Math.PI / 2, 0, 0]}>
              <cylinderGeometry args={[0.06, 0.06, 0.06, 12]} />
              <meshStandardMaterial {...ANODIZED} />
            </mesh>
          );
        })}
        <mesh position={[0, 1.65, 0]}>
          <cylinderGeometry args={[0.58, 0.58, 1.7, 32]} />
          <meshStandardMaterial {...SILVER} />
        </mesh>
        {[...Array(9)].map((_, i) => (
          <mesh key={i} position={[0, 0.95 + i * 0.18, 0]}>
            <cylinderGeometry args={[0.82, 0.82, 0.07, 40]} />
            <meshStandardMaterial {...ANODIZED} />
          </mesh>
        ))}
        <RoundedBox args={[1.35, 0.55, 1.15]} radius={0.1} smoothness={4} position={[0, 2.7, 0]}>
          <meshStandardMaterial {...GUNMETAL} />
        </RoundedBox>
        <RoundedBox args={[1.0, 0.28, 0.9]} radius={0.08} smoothness={4} position={[0, 3.1, 0]}>
          <meshStandardMaterial {...DISC} />
        </RoundedBox>
        <mesh position={[0.35, 3.38, 0]} rotation={[0, 0, -0.3]}>
          <cylinderGeometry args={[0.07, 0.07, 0.5, 16]} />
          <meshStandardMaterial color="#f4f4f4" metalness={0.2} roughness={0.4} />
        </mesh>
        <mesh castShadow>
          <tubeGeometry args={[exhaust, 64, 0.17, 16, false]} />
          <meshStandardMaterial {...DISC} />
        </mesh>
        <mesh position={[0, 1.9, -0.85]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.3, 0.35, 0.5, 24]} />
          <meshStandardMaterial {...GUNMETAL} />
        </mesh>
      </group>
    </group>
  );
};

const Rig = ({ children }) => {
  const ref = useRef();
  const target = useRef({ x: 0, y: 0 });
  useEffect(() => {
    const fn = (e) => {
      target.current.x = (e.clientX / window.innerWidth - 0.5) * 2;
      target.current.y = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("mousemove", fn);
    return () => window.removeEventListener("mousemove", fn);
  }, []);
  useFrame(() => {
    ref.current.rotation.y = THREE.MathUtils.lerp(ref.current.rotation.y, target.current.x * 0.4, 0.05);
    ref.current.rotation.x = THREE.MathUtils.lerp(ref.current.rotation.x, target.current.y * 0.28, 0.05);
  });
  return <group ref={ref}>{children}</group>;
};

export const EngineScene = () => (
  <Canvas camera={{ position: [0, 0.2, 8.5], fov: 40 }} dpr={[1, 1.75]} gl={{ antialias: true, alpha: true }}>
    <ambientLight intensity={0.7} />
    <directionalLight position={[-3, 4, 7]} intensity={2.4} />
    <spotLight position={[6, 7, 6]} angle={0.5} intensity={220} />
    <pointLight position={[-6, -2, 4]} intensity={22} color="#00e0ff" />
    <pointLight position={[5, -3, 3]} intensity={16} color="#d7ff3e" />
    <Rig>
      <Float speed={1.3} rotationIntensity={0.12} floatIntensity={0.55}>
        <group position={[2.4, 0.1, 0]} rotation={[-0.3, 0.4, 0.08]} scale={0.92}>
          <Engine position={[0.3, -0.5, 0]} />
        </group>
      </Float>
    </Rig>
    <ContactShadows position={[2.4, -2.9, 0]} opacity={0.5} scale={14} blur={2.6} far={4} color="#262626" />
    <Environment preset="city" />
  </Canvas>
);
