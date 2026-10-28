"use client";

import React from "react";
import Image from "next/image";
import { productData, brandConfig } from "@/data/product";
import { Check, ShoppingBag, Eye } from "lucide-react";

interface ProductSpotlightProps {
  onOpenOrderModal: () => void;
  onViewDetailsClick: () => void;
}

export default function ProductSpotlight({
  onOpenOrderModal,
  onViewDetailsClick,
}: ProductSpotlightProps) {
  return (
    <section
      id="product-spotlight"
      aria-labelledby="spotlight-heading"
      className="py-16 lg:py-24 border-b border-olive/15 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12 lg:mb-16">
          <span className="text-xs uppercase tracking-ultra font-sans text-olive-dark font-semibold block mb-3">
            Meet Butter Bliss
          </span>
          <h2
            id="spotlight-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-normal tracking-tight"
          >
            Your Everyday Lip Care Essential
          </h2>
          <div className="w-12 h-[1px] bg-olive mx-auto mt-4" />
        </div>

        {/* Product Spotlight Two-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Secondary Genuine Product Presentation: Angled View showing the burgundy elixir and clear jar */}
          <div className="lg:col-span-7">
            <div className="relative bg-cream-100 p-3 sm:p-6 border border-cream-300 shadow-card">
              <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-ivory border border-cream-200">
                <Image
                  src="/images/product/butter-bliss-side-view.jpg"
                  alt="Heba Herbals Butter Bliss lip elixir side angle showing rich burgundy color inside clear jar"
                  fill
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  className="object-cover object-center hover:scale-105 transition-transform duration-700 ease-out"
                />

                {/* Subtle natural lighting overlay */}
                <div className="absolute inset-0 bg-gradient-to-tr from-forest/20 via-transparent to-ivory/10 pointer-events-none" />

                {/* Badge identifying formula & jar */}
                <div className="absolute top-4 left-4 bg-forest text-cream-50 text-[10px] uppercase tracking-widest font-sans px-3 py-1 font-medium">
                  Actual Product Photo
                </div>
              </div>

              <div className="mt-3 flex flex-wrap items-center justify-between text-xs font-sans text-olive-dark px-1">
                <span>Side Profile: Transparent Jar &amp; Black Twist Cap</span>
                <span className="text-warm-brown font-medium">Burgundy Formula Inside</span>
              </div>
            </div>
          </div>

          {/* Product Data Specs & Real Purchase Flow */}
          <div className="lg:col-span-5 space-y-6">
            <div>
              <span className="text-xs uppercase tracking-widest font-sans text-warm-brown font-semibold block">
                {productData.brand}
              </span>
              <h3 className="font-serif text-3xl sm:text-4xl text-forest font-normal mt-1 mb-2">
                {productData.name}
              </h3>
              <p className="text-sm uppercase tracking-wider text-olive-dark font-sans">
                {productData.subtitle}
              </p>
            </div>

            {/* Price & Net Quantity from Single Config */}
            <div className="p-4 bg-cream-50 border border-cream-300 flex items-baseline justify-between">
              <div>
                <span className="block text-[11px] uppercase tracking-widest text-olive-dark font-sans">
                  Batch Price
                </span>
                <span className="font-serif text-3xl text-forest font-medium">
                  {productData.price.formatted}
                </span>
                <span className="block text-[10px] text-charcoal-muted mt-0.5">
                  ({productData.price.note})
                </span>
              </div>
              <div className="text-right">
                <span className="block text-[11px] uppercase tracking-widest text-olive-dark font-sans">
                  Net Weight
                </span>
                <span className="font-sans text-sm font-semibold text-charcoal">
                  {productData.netWeight}
                </span>
                <span className="block text-[10px] text-olive-dark mt-0.5">
                  Round Cosmetic Jar
                </span>
              </div>
            </div>

            {/* Short Specific Description */}
            <p className="font-sans text-sm text-charcoal-muted leading-relaxed">
              {productData.shortDescription}
            </p>

            {/* Honest Product Characteristics */}
            <div className="space-y-2.5 pt-2 border-t border-cream-200">
              <div className="flex items-start gap-2.5 text-xs text-charcoal">
                <Check className="w-4 h-4 text-olive flex-shrink-0 mt-0.5 stroke-[2]" />
                <span>Rich burgundy tone in the jar that applies sheer and conditioning.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-charcoal">
                <Check className="w-4 h-4 text-olive flex-shrink-0 mt-0.5 stroke-[2]" />
                <span>Travel-ready jar with secure black twist-lock cap.</span>
              </div>
              <div className="flex items-start gap-2.5 text-xs text-charcoal">
                <Check className="w-4 h-4 text-olive flex-shrink-0 mt-0.5 stroke-[2]" />
                <span>Prepared in small batches by {brandConfig.name}.</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row gap-3">
              <button
                onClick={onOpenOrderModal}
                className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-forest hover:bg-forest-light text-cream-50 text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-forest shadow-sm active:translate-y-[1px]"
              >
                <ShoppingBag className="w-4 h-4 stroke-[1.5]" />
                <span>Shop Butter Bliss</span>
              </button>

              <button
                onClick={onViewDetailsClick}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-transparent hover:bg-cream-200 text-forest text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-olive/30"
              >
                <Eye className="w-4 h-4 stroke-[1.5]" />
                <span>View Details</span>
              </button>
            </div>

            <div className="pt-1 text-[11px] text-olive-dark flex items-center justify-between">
              <span>Direct brand order via WhatsApp or Email</span>
              <span className="text-warm-brown font-medium">Batch No. 01</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
