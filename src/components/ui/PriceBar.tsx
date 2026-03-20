"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";

interface PriceBarProps {
  icon: React.ReactNode;
  title: string;
  unit: string;
  min: number;
  max: number;
  maxScale?: number;
  popular?: boolean;
  detail?: string;
}

export default function PriceBar({ icon, title, unit, min, max, maxScale = 5000, popular, detail }: PriceBarProps) {
  const [hover, setHover] = useState(false);
  const widthPct = Math.min(((max - min) / maxScale) * 100, 90);
  const offsetPct = (min / maxScale) * 100;

  return (
    <div
      className={cn(
        "py-4 border-b border-neutral-100 last:border-0 transition-colors duration-200",
        hover && "bg-brand-50/30"
      )}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <div className="flex items-start justify-between gap-4 mb-2">
        <div className="flex items-center gap-3">
          <span className="text-neutral-400">{icon}</span>
          <div>
            <div className="flex items-center gap-2">
              <span className="font-display font-semibold text-sm text-neutral-900">{title}</span>
              {popular && (
                <span className="text-[10px] font-bold uppercase tracking-wider text-brand-500 bg-brand-50 border border-brand-200 px-2 py-0.5 rounded-full">
                  Populær
                </span>
              )}
            </div>
            <span className="text-xs text-neutral-400">{unit}</span>
          </div>
        </div>
        <div className="text-right flex-shrink-0">
          <span className="font-display font-bold text-sm text-neutral-900">
            {min.toLocaleString("nb-NO")} – {max.toLocaleString("nb-NO")}
          </span>
          <span className="text-xs text-neutral-400 ml-1">kr</span>
        </div>
      </div>
      <div className="h-1.5 bg-neutral-100 rounded-full overflow-hidden">
        <div
          className={cn(
            "h-full rounded-full transition-all duration-500",
            popular ? "bg-brand-500" : "bg-brand-300"
          )}
          style={{
            width: `${widthPct}%`,
            marginLeft: `${offsetPct}%`,
          }}
        />
      </div>
      {hover && detail && (
        <p className="text-xs text-neutral-500 mt-2 animate-fade-in">{detail}</p>
      )}
    </div>
  );
}
