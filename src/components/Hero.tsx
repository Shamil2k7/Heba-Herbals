"use client";

import React from "react";
import Image from "next/image";
import { ArrowDown, Sparkles } from "lucide-react";

interface HeroProps {
  onDiscoverClick: () => void;
  onApproachClick: () => void;
}

export default function Hero({ onDiscoverClick, onApproachClick }: HeroProps) {
  return (
    <section
      id="hero"
      aria-label="Hero Introduction"
      className="relative overflow-hidden pt-8 pb-16 lg:pt-16 lg:pb-24 border-b border-olive/15"
    >
      {/* Editorial background accents */}
      <div className="absolute inset-0 pointer-events-none -z-10">
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-cream-200/50 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-olive-50/60 rounded-full blur-2xl" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Editorial Brand Typography */}
          <div className="lg:col-span-6 flex flex-col justify-center space-y-8">
            
            {/* Small Eyebrow */}
            <div className="inline-flex items-center gap-2.5">
              <span className="w-8 h-[1px] bg-olive" />
              <span className="text-xs uppercase tracking-ultra font-sans text-olive-dark font-semibold">
                Natural Lip Care
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-5xl sm:text-6xl xl:text-7xl font-normal tracking-tight text-forest leading-[1.08]">
              Soft Lips.
              <br />
              <span className="italic font-light text-warm-brown">Naturally.</span>
            </h1>

            {/* Supporting Editorial Copy */}
            <p className="font-sans text-base sm:text-lg text-charcoal-muted leading-relaxed max-w-xl">
              Meet Butter Bliss by Heba Herbals, an everyday lip care essential designed to bring a little softness to your routine.
            </p>

            {/* Primary CTA and Secondary Link */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 pt-2">
              <button
                onClick={onDiscoverClick}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 bg-forest hover:bg-forest-light text-cream-50 text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-forest shadow-card active:translate-y-[1px]"
              >
                <span>Discover Butter Bliss</span>
                <ArrowDown className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>

              <button
                onClick={onApproachClick}
                className="inline-flex items-center gap-2 text-xs font-sans uppercase tracking-widest text-charcoal hover:text-forest transition-colors py-2 border-b border-charcoal/30 hover:border-forest"
              >
                <span>Our Approach to Lip Care</span>
              </button>
            </div>

            {/* Subtle Authentic Brand Specs Strip */}
            <div className="pt-6 border-t border-cream-300/80 grid grid-cols-3 gap-4 text-left">
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-olive-dark font-sans">
                  Batch Type
                </span>
                <span className="text-xs font-medium text-forest font-sans">
                  Small-Batch
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-olive-dark font-sans">
                  Formula
                </span>
                <span className="text-xs font-medium text-forest font-sans">
                  Natural Elixir
                </span>
              </div>
              <div>
                <span className="block text-[11px] uppercase tracking-wider text-olive-dark font-sans">
                  Net Weight
                </span>
                <span className="text-xs font-medium text-forest font-sans">
                  8 g / 0.28 oz
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Actual Uploaded Product Photography in Editorial Setting */}
          <div className="lg:col-span-6 flex justify-center items-center">
            <div className="relative w-full max-w-md lg:max-w-lg">
              
              {/* Botanical Frame Background Accent */}
              <div className="absolute -inset-3 sm:-inset-4 bg-cream-100 border border-olive/20 -z-10 shadow-card" />
              
              {/* Main Product Container */}
              <div className="relative aspect-[4/5] sm:aspect-square w-full overflow-hidden bg-ivory border border-cream-300">
                <Image
                  src="/images/product/butter-bliss-top-view.jpg"
                  alt="Actual photo of Heba Herbals Butter Bliss All-Natural Lip Elixir jar with black lid and botanical label"
                  fill
                  priority
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 40vw"
                  className="object-cover object-center transition-transform duration-700 ease-out hover:scale-105"
                />

                {/* Subtle soft gradient vignette to enhance contrast without artificial filter */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent pointer-events-none" />

                {/* Editorial corner stamp */}
                <div className="absolute bottom-4 left-4 bg-cream-50/90 backdrop-blur-sm px-3.5 py-1.5 border border-olive/20 text-[10px] uppercase tracking-widest text-forest font-sans font-medium flex items-center gap-1.5">
                  <Sparkles className="w-3 h-3 text-warm-brown" />
                  <span>Original Product Asset</span>
                </div>
              </div>

              {/* Editorial Caption Below Image */}
              <div className="mt-3 flex items-center justify-between text-[11px] font-sans text-olive-dark tracking-wide">
                <span>Butter Bliss All-Natural Lip Elixir</span>
                <span>Original Jar View</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
