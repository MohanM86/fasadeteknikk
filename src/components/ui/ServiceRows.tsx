"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { TJENESTER } from "@/data/tjenester";
import { formatPrisIntervall } from "@/lib/utils";

const NUMS = ["01", "02", "03", "04", "05"];

export default function ServiceRows() {
  return (
    <div className="border-t border-neutral-300">
      {TJENESTER.map((t, i) => (
        <Link
          key={t.slug}
          href={`/tjenester/${t.slug}`}
          className="service-row group"
        >
          <div className="flex items-baseline gap-5 flex-1 min-w-0">
            <span className="service-num">{NUMS[i]}</span>
            <div className="min-w-0">
              <div className="service-name">{t.kortTittel}</div>
              <div className="service-desc">{t.kortBeskrivelse}</div>
            </div>
          </div>
          <div className="flex items-center gap-6 flex-shrink-0">
            <span className="service-price hidden sm:block">{formatPrisIntervall(t.prisMin, t.prisMax)} {t.prisenhet}</span>
            <div className="service-arrow">
              <ArrowUpRight className="w-5 h-5 text-neutral-900" />
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}
