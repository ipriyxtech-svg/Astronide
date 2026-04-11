"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import { useRef, useMemo } from "react";
import Planets from "./Planets";

function Galaxy() {
  const ref = useRef();

  const positions = useMemo(() => {
    const count = 4000;
    const arr = new Float32Array(count * 3);

    for (let i = 0; i < count; i++) {
      const i3 = i * 3;

      const radius = Math.random() * 5;
      const angle = Math.random() * Math.PI * 2;

      arr[i3] = Math.cos(angle) * radius;
      arr[i3 + 1] = (Math.random() - 0.5) * 2;
      arr[i3 + 2] = Math.sin(angle) * radius;
    }

    return arr;
  }, []);

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += 0.0003;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial size={0.02} color="#8b5cf6" />
    </Points>
  );
}

export default function StarsBackground() {
  return (
    <Canvas
      camera={{ position: [0, 0, 12] }}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
      }}
    >
      <ambientLight intensity={1} />
      <directionalLight position={[2, 2, 2]} intensity={2} />

      <Galaxy />
      <Planets />
    </Canvas>
  );
}