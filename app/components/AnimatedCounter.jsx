"use client";
import { useEffect, useState } from "react";

function easeOutCubic(t) {
  return 1 - Math.pow(1 - t, 3);
}

export default function AnimatedCounter({
  targetNumber,
  duration = 3000,
  suffix = "",
}) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = easeOutCubic(progress);
      const value = Math.floor(eased * targetNumber);
      setCurrent(value);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCurrent(targetNumber);
      }
    };

    requestAnimationFrame(animate);
  }, [targetNumber, duration]);

  return (
    <span className="text-white text-3xl md:text-5xl mb-3">
      {current}
      {suffix}
    </span>
  );
}
