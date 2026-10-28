"use client";

import React from "react";
import BotanicalCrest from "./BotanicalCrest";
import { ArrowDown } from "lucide-react";

interface EditorialClosingProps {
  onExploreClick: () => void;
}

export default function EditorialClosing({ onExploreClick }: EditorialClosingProps) {
  return (
    <section
      aria-label="Editorial Closing"
      className="relative bg-forest text-cream-50 py-20 lg:py-28 overflow-hidden"
    >
      {/* Background subtle botanical watermark pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-5 flex items-center justify-center">
        <BotanicalCrest size={480} color="#EDE5D6" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div className="flex justify-center mb-6">
          <BotanicalCrest size={40} className="text-cream-200 opacity-80" />
        </div>

        <span className="text-xs uppercase tracking-ultra font-sans text-cream-300 font-medium block mb-4">
          Heba Herbals • Botanical Lip Elixir
        </span>

        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal tracking-tight text-cream-50 mb-6 leading-[1.15]">
          A Softer Kind of Everyday.
        </h2>

        <p className="font-sans text-base sm:text-lg text-cream-200/90 max-w-xl mx-auto leading-relaxed mb-8">
          Discover Butter Bliss and make a little room for thoughtful lip care in your daily routine.
        </p>

        <div>
          <button
            onClick={onExploreClick}
            className="inline-flex items-center gap-2.5 px-8 py-3.5 bg-cream-100 hover:bg-cream-50 text-forest text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-cream-200 shadow-md active:translate-y-[1px]"
          >
            <span>Explore the Product</span>
            <ArrowDown className="w-3.5 h-3.5 stroke-[1.5]" />
          </button>
        </div>

        <div className="mt-12 pt-8 border-t border-forest-light/50 flex flex-wrap items-center justify-center gap-6 text-[11px] font-sans text-cream-300/70 tracking-widest uppercase">
          <span>Small-Batch Lip Care</span>
          <span>•</span>
          <span>Everyday Moisture</span>
          <span>•</span>
          <span>Understated Beauty</span>
        </div>
      </div>
    </section>
  );
}
