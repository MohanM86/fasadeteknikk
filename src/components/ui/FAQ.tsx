"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { buildFAQSchema } from "@/lib/utils";
import type { FAQItem } from "@/types";
export default function FAQ({ items, tittel, showSchema = true }: { items: FAQItem[]; tittel?: string; showSchema?: boolean }) {
  const [open, setOpen] = useState<number | null>(null);
  return (<section className="w-full">{showSchema && <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(buildFAQSchema(items)) }} />}{tittel && <h2 className="font-display font-bold text-display-lg text-neutral-900 mb-8">{tittel}</h2>}<div className="divide-y divide-neutral-200 border-t border-neutral-200">{items.map((item, idx) => { const isOpen = open === idx; return (<div key={idx}><button type="button" className="faq-trigger" onClick={() => setOpen(isOpen ? null : idx)} aria-expanded={isOpen}><span className="text-pretty">{item.sporsmal}</span><ChevronDown className={cn("w-5 h-5 flex-shrink-0 text-neutral-400 transition-transform duration-300", isOpen && "rotate-180 text-brand-500")} aria-hidden /></button><div className={cn("overflow-hidden transition-all duration-300", isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0")}><div className="faq-content">{item.svar}</div></div></div>); })}</div></section>);
}
