"use client";
import { useEffect, useRef, useState } from "react";

interface Segment {
  label: string;
  value: number;
  color: string;
}

interface MarketDonutProps {
  segments: Segment[];
  total: number;
  centerLabel: string;
}

export default function MarketDonut({ segments, total, centerLabel }: MarketDonutProps) {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setAnimated(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const size = 220;
  const stroke = 32;
  const radius = (size - stroke) / 2;
  const circumference = 2 * Math.PI * radius;

  let cumOffset = 0;

  return (
    <div ref={ref} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
          <circle
            cx={size / 2}
            cy={size / 2}
            r={radius}
            fill="none"
            stroke="#F5F5F5"
            strokeWidth={stroke}
          />
          {segments.map((seg, i) => {
            const pct = seg.value / total;
            const dashLength = pct * circumference;
            const dashOffset = cumOffset;
            cumOffset += dashLength;
            return (
              <circle
                key={i}
                cx={size / 2}
                cy={size / 2}
                r={radius}
                fill="none"
                stroke={seg.color}
                strokeWidth={stroke}
                strokeDasharray={`${animated ? dashLength : 0} ${circumference}`}
                strokeDashoffset={-dashOffset}
                strokeLinecap="butt"
                transform={`rotate(-90 ${size / 2} ${size / 2})`}
                style={{
                  transition: `stroke-dasharray 1s ease-out ${i * 0.15}s`,
                }}
              />
            );
          })}
        </svg>
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="font-display font-extrabold text-3xl text-neutral-900">
            {animated ? total.toLocaleString("nb-NO") : "0"}
          </span>
          <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-400">
            {centerLabel}
          </span>
        </div>
      </div>
      <div className="flex flex-wrap justify-center gap-x-4 gap-y-1.5 mt-4">
        {segments.map((seg, i) => (
          <div key={i} className="flex items-center gap-1.5">
            <div
              className="w-2.5 h-2.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: seg.color }}
            />
            <span className="text-xs text-neutral-500">
              {seg.label} ({seg.value})
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
