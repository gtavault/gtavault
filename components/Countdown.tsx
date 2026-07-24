"use client";

import { useEffect, useState } from "react";

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState("Loading...");

  useEffect(() => {
    const target = new Date(2026, 10, 19, 0, 0, 0).getTime();

    const update = () => {
      const distance = target - Date.now();

      if (distance <= 0) {
        setTimeLeft("OUT NOW!");
        return;
      }

      const days = Math.floor(distance / 86400000);
      const hours = Math.floor((distance % 86400000) / 3600000);
      const minutes = Math.floor((distance % 3600000) / 60000);
      const seconds = Math.floor((distance % 60000) / 1000);

     setTimeLeft(
  `${days}D•${hours}H•${minutes}M•${seconds}S`
);
    };

    update();
    const timer = setInterval(update, 1000);

    return () => clearInterval(timer);
  }, []);

  return <span>{timeLeft}</span>;
}