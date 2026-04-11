"use client";

import { useEffect } from "react";
import gsap from "gsap";

export default function Features() {
  useEffect(() => {
    gsap.from(".feature", {
      y: 100,
      opacity: 0,
      stagger: 0.3,
      duration: 1,
    });
  }, []);

  return (
   <section className="min-h-screen bg-transparent text-black dark:text-white">
      <div className="feature text-3xl mb-10">⚡ Fast</div>
      <div className="feature text-3xl mb-10">🎨 Beautiful</div>
      <div className="feature text-3xl mb-10">🔋 Powerful</div>
    </section>
  );
}