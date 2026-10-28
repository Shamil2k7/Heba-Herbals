"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import BotanicalCrest from "./BotanicalCrest";

interface OurStoryProps {
  onExploreClick: () => void;
}

export default function OurStory({ onExploreClick }: OurStoryProps) {
  return (
    <section
      id="our-story"
      aria-labelledby="our-story-heading"
      className="py-16 lg:py-24 border-b border-olive/15 bg-cream-50/70 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Genuine Product Photography on Natural Woven Texture */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative">
              {/* Outer decorative matte border */}
              <div className="p-3 sm:p-5 bg-ivory border border-cream-300 shadow-card">
                <div className="relative aspect-[4/5] sm:aspect-[5/4] w-full overflow-hidden bg-cream-100">
                  <Image
                    src="/images/product/butter-bliss-angled-view.jpg"
                    alt="Genuine Heba Herbals Butter Bliss lip elixir jar displayed on natural woven textile"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent pointer-events-none" />
                  
                  {/* Botanical authenticity tag */}
                  <div className="absolute bottom-4 right-4 bg-ivory/95 backdrop-blur-sm px-3.5 py-1.5 border border-olive/20 text-[10px] uppercase tracking-widest text-forest font-sans">
                    Natural Woven Setting
                  </div>
                </div>
              </div>

              {/* Offset decorative accent frame */}
              <div className="absolute -bottom-4 -left-4 w-28 h-28 border border-olive/30 -z-10 pointer-events-none hidden sm:block" />
            </div>
          </div>

          {/* Editorial Typography on the Other Side */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <div className="flex items-center gap-3">
              <BotanicalCrest size={24} className="text-olive-dark" />
              <span className="text-xs uppercase tracking-ultra font-sans text-olive-dark font-semibold">
                Our Story
              </span>
            </div>

            <h2
              id="our-story-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-normal tracking-tight leading-tight"
            >
              Care, Made Personal.
            </h2>

            <div className="w-16 h-[1px] bg-olive" />

            <div className="space-y-4 text-charcoal-muted font-sans text-base sm:text-lg leading-relaxed">
              <p>
                Heba Herbals brings a thoughtful touch to everyday beauty. Butter Bliss is the starting point of a simple lip care ritual, presented with a love for understated design and everyday essentials.
              </p>
              <p className="text-sm sm:text-base text-charcoal/80">
                Created for people who value simplicity, comfort, and botanical calm. Every jar reflects a commitment to honest beauty without unnecessary excess or exaggerated claims.
              </p>
            </div>

            <div className="pt-2">
              <button
                onClick={onExploreClick}
                className="inline-flex items-center gap-2 px-7 py-3.5 bg-forest hover:bg-forest-light text-cream-50 text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-forest active:translate-y-[1px]"
              >
                <span>Explore Butter Bliss</span>
                <ArrowRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>
            </div>

            <div className="pt-6 border-t border-cream-300 grid grid-cols-2 gap-4 text-xs font-sans text-olive-dark">
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-olive stroke-[1.5]" />
                <span>Understated daily rituals</span>
              </div>
              <div className="flex items-center gap-2">
                <Leaf className="w-4 h-4 text-olive stroke-[1.5]" />
                <span>Honest botanical presentation</span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
