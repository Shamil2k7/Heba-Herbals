import React from "react";
import Link from "next/link";
import BotanicalCrest from "@/components/BotanicalCrest";
import { ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-ivory text-charcoal flex flex-col justify-between p-6 sm:p-12">
      <div className="max-w-xl mx-auto w-full pt-12">
        <div className="flex items-center gap-2.5 mb-8">
          <BotanicalCrest size={28} className="text-forest" />
          <span className="font-serif text-2xl tracking-wide text-forest font-medium">
            Heba Herbals
          </span>
        </div>

        <div className="border border-cream-300 p-8 sm:p-12 bg-cream-50 shadow-card text-center space-y-6">
          <span className="text-xs uppercase tracking-ultra font-sans text-olive-dark font-semibold block">
            404 • Page Not Found
          </span>

          <h1 className="font-serif text-4xl sm:text-5xl text-forest font-normal tracking-tight">
            A Quiet Moment Elsewhere
          </h1>

          <div className="w-12 h-[1px] bg-olive mx-auto" />

          <p className="font-sans text-sm text-charcoal-muted leading-relaxed max-w-sm mx-auto">
            The page you are looking for does not exist or may have moved. Please return to the Butter Bliss homepage.
          </p>

          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-forest hover:bg-forest-light text-cream-50 text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-forest"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Return to Butter Bliss Home</span>
            </Link>
          </div>
        </div>
      </div>

      <div className="text-center text-xs text-olive-dark font-sans py-4">
        Heba Herbals • Butter Bliss All-Natural Lip Elixir
      </div>
    </div>
  );
}
