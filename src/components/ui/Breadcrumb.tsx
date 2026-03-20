import Link from "next/link";
import { ChevronRight, Home } from "lucide-react";
import { buildBreadcrumbSchema } from "@/lib/utils";
import type { BreadcrumbItem } from "@/types";

export default function Breadcrumb({ items }: { items: BreadcrumbItem[] }) {
  const all = [{ navn: "Hjem", href: "/" }, ...items];
  const schema = buildBreadcrumbSchema(all);
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <nav aria-label="Brødsmulesti">
        <ol className="breadcrumb">
          {all.map((item, idx) => {
            const isLast = idx === all.length - 1;
            return (
              <li key={idx} className="flex items-center gap-2">
                {idx === 0 && <Home className="w-3 h-3 text-slate-400" aria-hidden />}
                {item.href && !isLast ? (
                  <Link href={item.href} className="hover:text-forest-600 transition-colors">{item.navn}</Link>
                ) : (
                  <span className={isLast ? "text-slate-700 font-medium" : ""} aria-current={isLast ? "page" : undefined}>{item.navn}</span>
                )}
                {!isLast && <ChevronRight className="w-3 h-3 text-slate-300" aria-hidden />}
              </li>
            );
          })}
        </ol>
      </nav>
    </>
  );
}
