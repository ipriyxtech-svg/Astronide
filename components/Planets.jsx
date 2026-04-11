"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";

function Planet({ position, color, size = 1, speed = 0.5 }) {
  const ref = useRef();

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.elapsedTime;

      ref.current.rotation.y += 0.01 * speed;

      ref.current.position.y =
        position[1] + Math.sin(t * speed) * 0.5;

      ref.current.position.x =
        position[0] + Math.cos(t * speed) * 0.3;
    }
  });

  return (
    <mesh ref={ref} position={position}>
      <sphereGeometry args={[size, 32, 32]} />
      <meshStandardMaterial
        color={color}
        emissive={color}
        emissiveIntensity={2}
      />
    </mesh>
  );
}

export default function Planets() {
  return (
    <>
      <Planet position={[0, 0, -5]} color="#8b5cf6" size={2.5} speed={0.5} />
      <Planet position={[4, 2, -7]} color="#3b82f6" size={2} speed={0.7} />
      <Planet position={[-4, -2, -6]} color="#ec4899" size={1.8} speed={1} />
    </>
  );
}