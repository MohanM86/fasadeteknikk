import Link from "next/link";

interface ServiceCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  priceRange: string;
  priceUnit: string;
  href: string;
}

export default function ServiceCard({ icon, title, description, priceRange, priceUnit, href }: ServiceCardProps) {
  return (
    <Link href={href} className="card p-5 group block">
      <div className="flex items-start justify-between mb-3">
        <div className="w-10 h-10 rounded-12 bg-neutral-100 flex items-center justify-center text-neutral-500 group-hover:bg-brand-50 group-hover:text-brand-500 transition-colors">
          {icon}
        </div>
        <div className="text-right">
          <div className="font-display font-bold text-sm text-brand-500">{priceRange}</div>
          <div className="text-[10px] text-neutral-400">{priceUnit}</div>
        </div>
      </div>
      <h3 className="font-display font-semibold text-sm text-neutral-900 group-hover:text-brand-500 transition-colors mb-1">
        {title}
      </h3>
      <p className="text-xs text-neutral-400 leading-relaxed clamp-2">{description}</p>
    </Link>
  );
}
