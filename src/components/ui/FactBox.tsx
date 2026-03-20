import { Lightbulb } from "lucide-react";

interface FactBoxProps {
  children: React.ReactNode;
}

export default function FactBox({ children }: FactBoxProps) {
  return (
    <div className="bg-brand-50/60 border border-brand-100 rounded-16 p-5 flex gap-4 items-start">
      <div className="w-10 h-10 rounded-12 bg-brand-100 flex items-center justify-center flex-shrink-0">
        <Lightbulb className="w-5 h-5 text-brand-500" />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wider text-brand-500 mb-1">
          Visste du at?
        </div>
        <p className="text-body-sm text-neutral-700 leading-relaxed">
          {children}
        </p>
      </div>
    </div>
  );
}
