"use client";
import { useEffect, useRef, useState } from "react";

interface AnimatedStatProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  duration?: number;
  color?: string;
}

export default function AnimatedStat({
  value,
  suffix = "",
  prefix = "",
  label,
  duration = 2000,
  color = "text-brand-500",
}: AnimatedStatProps) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    let start = 0;
    const step = Math.ceil(value / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [started, value, duration]);

  return (
    <div ref={ref} className="text-center">
      <div
        className={`font-display font-extrabold text-4xl sm:text-5xl tracking-tight ${color}`}
        style={{ fontVariantNumeric: "tabular-nums" }}
      >
        {prefix}
        {count.toLocaleString("nb-NO")}
        {suffix}
      </div>
      <div className="text-xs font-semibold uppercase tracking-wider text-neutral-400 mt-1.5">
        {label}
      </div>
    </div>
  );
}
