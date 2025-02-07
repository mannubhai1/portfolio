"use client";
import React, { useState, useEffect } from "react";

const createFireSpark = () => ({
  id: Math.random(),
  top: `${Math.random() * 80 + 10}%`, // Avoid going too low
  left: `${Math.random() * 100}%`,
  width: `${Math.random() * 3 + 2}px`, // Random width for variety
  height: `${Math.random() * 20 + 15}px`, // Tall and sharp sparks
  animationDuration: `${Math.random() * 1.5 + 0.8}s`, // Faster motion
  opacity: Math.random() * 0.3 + 0.7, // More solid visibility
});

const FireSparksBackground = () => {
  const [sparks, setSparks] = useState([]);

  useEffect(() => {
    const addSpark = () => {
      const newSpark = createFireSpark();
      setSparks((prevSparks) => [...prevSparks.slice(-30), newSpark]); // Keep max 30 sparks
    };

    const interval = setInterval(addSpark, 600); // Sparks appear more frequently

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-full -z-10 overflow-hidden pointer-events-none">
      {sparks.map((spark) => (
        <div
          key={spark.id}
          className="absolute bg-fire-sparks"
          style={{
            top: spark.top,
            left: spark.left,
            width: spark.width,
            height: spark.height,
            opacity: spark.opacity,
            borderRadius: "50% 50% 20% 20%", // Slight tapering effect
            transform: `rotate(${Math.random() * 20 - 10}deg)`, // Slight tilt
            animation: `sparkMove ${spark.animationDuration} linear infinite`,
          }}
        ></div>
      ))}
    </div>
  );
};

export default FireSparksBackground;
