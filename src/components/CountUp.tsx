"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

interface CountUpProps {
  target?: number;
  suffix?: string;
  prefix?: string;
  mode?: "count" | "flash";
  flashText?: string;
  className?: string;
  duration?: number;
}

export default function CountUp({
  target = 0,
  suffix = "",
  prefix = "",
  mode = "count",
  flashText,
  className,
  duration = 1500,
}: CountUpProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });
  const [value, setValue] = useState(0);

  useEffect(() => {
    if (!isInView || mode !== "count") {
      return;
    }

    let animationFrame = 0;
    const start = performance.now();

    const update = (time: number) => {
      const progress = Math.min((time - start) / duration, 1);
      setValue(Math.round(target * progress));
      if (progress < 1) {
        animationFrame = window.requestAnimationFrame(update);
      }
    };

    animationFrame = window.requestAnimationFrame(update);

    return () => {
      if (animationFrame) {
        window.cancelAnimationFrame(animationFrame);
      }
    };
  }, [duration, isInView, mode, target]);

  if (mode === "flash") {
    return (
      <motion.span
        ref={ref}
        className={className}
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      >
        {flashText ?? `${prefix}${target}${suffix}`}
      </motion.span>
    );
  }

  return (
    <span ref={ref} className={className}>
      {prefix}
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}
