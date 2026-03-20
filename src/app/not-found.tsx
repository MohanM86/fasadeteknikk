import Link from "next/link";
import { ArrowRight } from "lucide-react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="min-h-[70vh] flex items-center section-sand">
        <div className="container-site py-20 text-center">
          <div className="w-16 h-16 rounded-20 bg-forest-900 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M3 21h18M5 21V7l7-4 7 4v14M9 21v-6h6v6"/></svg>
          </div>
          <h1 className="font-display font-bold text-display-xl text-slate-900 mb-4">404 – Siden finnes ikke</h1>
          <p className="text-body-lg text-slate-600 max-w-md mx-auto mb-8">Beklager, vi finner ikke siden du leter etter.</p>
          <Link href="/" className="btn-primary">Gå til forsiden <ArrowRight className="w-4 h-4" /></Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
