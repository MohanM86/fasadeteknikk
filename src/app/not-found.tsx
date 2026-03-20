import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default function NotFound() {
  return (<><Header /><main className="min-h-[70vh] flex items-center section-light"><div className="container-site py-20 text-center"><h1 className="font-display font-extrabold text-display-xl text-neutral-900 mb-4">404 – Siden finnes ikke</h1><p className="text-body-lg text-neutral-500 max-w-md mx-auto mb-8">Beklager, vi finner ikke siden du leter etter.</p><Link href="/" className="btn-primary">Gå til forsiden <ArrowRight className="w-4 h-4" /></Link></div></main><Footer /></>);
}
