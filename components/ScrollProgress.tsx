"use client";

import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const updateProgress = () => {
      const scrollTop = window.scrollY;

      const height =
        document.documentElement.scrollHeight -
        window.innerHeight;

      const percent =
        height > 0 ? (scrollTop / height) * 100 : 0;

      setProgress(percent);
    };

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () =>
      window.removeEventListener(
        "scroll",
        updateProgress
      );
  }, []);

  return (
    <div className="fixed left-0 top-0 z-[9999] h-1 w-full bg-transparent">

      <div
        className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-400 transition-[width] duration-150"
        style={{
          width: `${progress}%`,
        }}
      />

    </div>
  );
}