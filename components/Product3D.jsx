"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { OrbitControls, useGLTF } from "@react-three/drei";
import { useRef, useEffect, useState } from "react";

function Model({ mouse }) {
  const { scene } = useGLTF("/model.glb");
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      // 🔄 rotation (smooth)
      ref.current.rotation.y += 0.001;

      // 🖱️ mouse parallax
      ref.current.rotation.x = mouse.y * 0.3;
      ref.current.rotation.y += mouse.x * 0.3;
    }
  });

  return <primitive ref={ref} object={scene} scale={1.5} />;
}

export default function Product3D() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 2;
      const y = (e.clientY / window.innerHeight - 0.5) * 2;
      setMouse({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <Canvas camera={{ position: [0, 0, 7] }} style={{ height: "600px" }}>
      <ambientLight />
      <directionalLight position={[2, 2, 2]} />
      <Model mouse={mouse} />
      <OrbitControls enableZoom={false} />
    </Canvas>
  );
}