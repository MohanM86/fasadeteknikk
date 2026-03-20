import { AlertTriangle, Info, CheckCircle, Shield } from "lucide-react";
import { cn } from "@/lib/utils";

type CalloutVariant = "warning" | "info" | "success" | "tip";

const VARIANTS: Record<
  CalloutVariant,
  { bg: string; border: string; iconBg: string; iconColor: string; titleColor: string; icon: React.ReactNode }
> = {
  warning: {
    bg: "bg-red-50/60",
    border: "border-red-200",
    iconBg: "bg-red-100",
    iconColor: "text-red-500",
    titleColor: "text-red-600",
    icon: <AlertTriangle className="w-5 h-5" />,
  },
  info: {
    bg: "bg-blue-50/60",
    border: "border-blue-200",
    iconBg: "bg-blue-100",
    iconColor: "text-blue-500",
    titleColor: "text-blue-600",
    icon: <Info className="w-5 h-5" />,
  },
  success: {
    bg: "bg-green-50/60",
    border: "border-green-200",
    iconBg: "bg-green-100",
    iconColor: "text-green-500",
    titleColor: "text-green-600",
    icon: <CheckCircle className="w-5 h-5" />,
  },
  tip: {
    bg: "bg-brand-50/40",
    border: "border-brand-200",
    iconBg: "bg-brand-100",
    iconColor: "text-brand-500",
    titleColor: "text-brand-600",
    icon: <Shield className="w-5 h-5" />,
  },
};

interface CalloutBoxProps {
  variant: CalloutVariant;
  title: string;
  children: React.ReactNode;
  items?: string[];
}

export default function CalloutBox({ variant, title, children, items }: CalloutBoxProps) {
  const v = VARIANTS[variant];
  return (
    <div className={cn("rounded-16 p-5 border", v.bg, v.border)}>
      <div className="flex gap-3 items-start">
        <div className={cn("w-9 h-9 rounded-10 flex items-center justify-center flex-shrink-0", v.iconBg, v.iconColor)}>
          {v.icon}
        </div>
        <div className="flex-1 min-w-0">
          <h4 className={cn("font-display font-bold text-sm mb-1", v.titleColor)}>
            {title}
          </h4>
          <div className="text-body-sm text-neutral-600 leading-relaxed">{children}</div>
          {items && items.length > 0 && (
            <ul className="mt-3 space-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex items-start gap-2 text-body-sm text-neutral-600">
                  <CheckCircle className={cn("w-4 h-4 flex-shrink-0 mt-0.5", v.iconColor)} />
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
