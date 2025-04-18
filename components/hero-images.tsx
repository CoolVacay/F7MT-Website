"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const Card = ({ src, alt }: { src: string; alt: string }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const timeoutRef = useRef(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    // clear any pending hide timeout so spotlight stays if you move back in
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    const rect = e.currentTarget.getBoundingClientRect();
    setPos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const handleMouseLeave = () => {
    setTimeout(() => {
      setPos({ x: -100, y: -100 });
      timeoutRef.current = null;
    }, 1000);
  };

  return (
    <div
      className="
        group relative overflow-hidden
        transition-shadow duration-300
        rounded-3xl
      "
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* spotlight overlay: hidden until hover */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100"
        style={{
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.4), transparent 40%)`,
        }}
      />

      {/* bright-filter: hidden until hover */}
      <div />

      {/* main image */}
      <Image
        id="cardtop"
        src={src}
        alt={alt}
        width={570}
        height={300}
        className="block w-full h-auto"
      />

      {/* bottom bar: hidden until active */}
      <div
        id="cardbottom"
        className="
        "
      />
    </div>
  );
};

export default function Gallery() {
  const images = [
    {
      src: "/showcasingDarkMode.webp",
      alt: "multi active card gentlemen version",
    },
    {
      src: "/showcasingLightMode.webp",
      alt: "multi active card ladies version",
    },
  ];

  return (
    <div className="w-full flex flex-col md:flex-row gap-5" data-aos="fade-up">
      {images.map((img) => (
        <Card key={img.src} {...img} />
      ))}
    </div>
  );
}
