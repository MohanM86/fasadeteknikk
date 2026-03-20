"use client";

import Link from "next/link";
import { FileText } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export default function StickyMobileCTA() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const h = () => setVisible(window.scrollY > 400);
    window.addEventListener("scroll", h, { passive: true });
    return () => window.removeEventListener("scroll", h);
  }, []);

  return (
    <div className={cn("sticky-cta-bar lg:hidden transition-transform duration-300", visible ? "translate-y-0" : "translate-y-full")}>
      <Link href="/kontakt" className="btn-primary flex-1 justify-center gap-2 text-sm py-3">
        <FileText className="w-4 h-4" />Få gratis tilbud
      </Link>
    </div>
  );
}
