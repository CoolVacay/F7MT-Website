"use client";
import { useRef, useState } from "react";
import Image from "next/image";

const Card = ({
  initialSrc,
  hoverSrc,
  alt,
}: {
  initialSrc: string;
  hoverSrc: string;
  alt: string;
}) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
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
    timeoutRef.current = setTimeout(() => {
      setPos({ x: -100, y: -100 });
    }, 1000);
  };

  return (
    <div
      className="group relative overflow-hidden rounded-3xl transition-shadow duration-300"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Spotlight overlay */}
      <div
        className="absolute inset-0 pointer-events-none transition-opacity duration-300 opacity-0 group-hover:opacity-100 z-10"
        style={{
          background: `radial-gradient(circle at ${pos.x}px ${pos.y}px, rgba(255,255,255,0.2), transparent 40%)`,
        }}
      />

      {/* Image swap layer */}
      <div className="relative w-full h-auto">
        <Image
          src={initialSrc}
          alt={alt}
          width={570}
          height={300}
          className="block w-full h-auto transition-opacity duration-500 group-hover:opacity-0"
        />
        <Image
          src={hoverSrc}
          alt={alt + " hover"}
          width={570}
          height={300}
          className="absolute top-0 left-0 w-full h-auto opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        />
      </div>
    </div>
  );
};

export default function Gallery() {
  const imagePair = {
    initialSrc: "/showcasingDarkMode.webp",
    hoverSrc: "/showcasingLightMode.webp",
    alt: "Multi active card view",
  };

  return (
    <div className="w-full flex justify-center" data-aos="fade-up">
      <Card key={imagePair.initialSrc} {...imagePair} />
    </div>
  );
}
