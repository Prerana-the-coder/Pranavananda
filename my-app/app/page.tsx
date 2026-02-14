"use client";
import { useEffect, useState } from "react";

export default function Home() {
  const images = ["/school1.jpg", "/ashram.jpg", "/annual.jpg"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % images.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">

      {/* 🔥 TOP SLIDER */}
      <div className="w-full h-[250px] sm:h-[350px] md:h-[500px] overflow-hidden">
        <img
          src={images[index]}
          className="w-full h-full object-cover transition-all duration-700"
          alt="School slider"
        />
      </div>

      {/* HEADER / TEXT */}
      <div className="text-center mt-8">
        <h1 className="text-3xl font-bold">Welcome to Our School</h1>
        <p className="mt-2 text-gray-600">
          Education • Discipline • Excellence
        </p>
      </div>

      {/* LOGO CENTER */}
      <div className="flex justify-center my-8">
        <img
          src="/logo.jpg"
          alt="School Logo"
          className="w-28 sm:w-36 md:w-44"
        />
      </div>

    </div>
  );
}

