"use client";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import {
  LayoutGrid,
  Building,
  AlertTriangle,
  DollarSign,
  UserCheck,
  BarChart3,
  Search,
  HelpCircle,
} from "lucide-react";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
}

const NAV_ITEMS: NavItem[] = [
  { id: "oversikt", label: "Oversikt", icon: <LayoutGrid className="w-4 h-4" /> },
  { id: "fasadetyper", label: "Fasadetyper", icon: <Building className="w-4 h-4" /> },
  { id: "problemer", label: "Problemer", icon: <AlertTriangle className="w-4 h-4" /> },
  { id: "priser", label: "Priser", icon: <DollarSign className="w-4 h-4" /> },
  { id: "velge-firma", label: "Velge firma", icon: <UserCheck className="w-4 h-4" /> },
  { id: "markedet", label: "Markedet", icon: <BarChart3 className="w-4 h-4" /> },
  { id: "firma", label: "Firmakatalog", icon: <Search className="w-4 h-4" /> },
  { id: "faq", label: "FAQ", icon: <HelpCircle className="w-4 h-4" /> },
];

export default function SidebarNav() {
  const [active, setActive] = useState("oversikt");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const top = visible.reduce((a, b) =>
            a.boundingClientRect.top < b.boundingClientRect.top ? a : b
          );
          setActive(top.target.id);
        }
      },
      { rootMargin: "-20% 0px -60% 0px", threshold: 0 }
    );

    NAV_ITEMS.forEach(({ id }) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="hidden lg:block sticky top-28 w-48 flex-shrink-0">
      <div className="space-y-0.5">
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => {
              e.preventDefault();
              document.getElementById(item.id)?.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className={cn(
              "flex items-center gap-3 px-3 py-2.5 rounded-10 text-sm font-medium transition-all duration-200",
              active === item.id
                ? "bg-brand-50 text-brand-600 border border-brand-200"
                : "text-neutral-400 hover:text-neutral-700 hover:bg-neutral-100 border border-transparent"
            )}
          >
            <span
              className={cn(
                "flex-shrink-0 transition-colors",
                active === item.id ? "text-brand-500" : ""
              )}
            >
              {item.icon}
            </span>
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}
