"use client";

import React, { useState } from "react";
import { productData, brandConfig } from "@/data/product";
import { Mail, Phone, MapPin } from "lucide-react";

export default function IngredientsAndDetails() {
  const [activeTab, setActiveTab] = useState<"ingredients" | "usage" | "specs" | "brand">("ingredients");

  return (
    <section
      id="ingredients"
      aria-labelledby="details-heading"
      className="py-16 lg:py-24 border-b border-olive/15 bg-cream-50/50"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs uppercase tracking-ultra font-sans text-olive-dark font-semibold block mb-3">
            The Details
          </span>
          <h2
            id="details-heading"
            className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-normal tracking-tight"
          >
            Know What Goes on Your Lips.
          </h2>
          <div className="w-12 h-[1px] bg-olive mx-auto mt-4" />
          <p className="mt-4 text-xs sm:text-sm font-sans text-charcoal-muted leading-relaxed">
            Honest and transparent information regarding Butter Bliss formulation, usage, packaging, and batch care.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-cream-300 justify-center mb-8 overflow-x-auto">
          <div className="flex space-x-1 sm:space-x-4">
            <button
              onClick={() => setActiveTab("ingredients")}
              className={`px-4 sm:px-6 py-3 text-xs uppercase tracking-widest font-sans transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "ingredients"
                  ? "border-forest text-forest font-semibold"
                  : "border-transparent text-charcoal-muted hover:text-forest"
              }`}
            >
              Formula &amp; Botanicals
            </button>

            <button
              onClick={() => setActiveTab("usage")}
              className={`px-4 sm:px-6 py-3 text-xs uppercase tracking-widest font-sans transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "usage"
                  ? "border-forest text-forest font-semibold"
                  : "border-transparent text-charcoal-muted hover:text-forest"
              }`}
            >
              Directions &amp; Care
            </button>

            <button
              onClick={() => setActiveTab("specs")}
              className={`px-4 sm:px-6 py-3 text-xs uppercase tracking-widest font-sans transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "specs"
                  ? "border-forest text-forest font-semibold"
                  : "border-transparent text-charcoal-muted hover:text-forest"
              }`}
            >
              Jar &amp; Storage
            </button>

            <button
              onClick={() => setActiveTab("brand")}
              className={`px-4 sm:px-6 py-3 text-xs uppercase tracking-widest font-sans transition-all duration-200 border-b-2 whitespace-nowrap ${
                activeTab === "brand"
                  ? "border-forest text-forest font-semibold"
                  : "border-transparent text-charcoal-muted hover:text-forest"
              }`}
            >
              Brand &amp; Support
            </button>
          </div>
        </div>

        {/* Tab Contents */}
        <div className="bg-ivory border border-cream-300 p-6 sm:p-10 shadow-card">
          
          {/* Tab 1: Ingredients & Botanicals */}
          {activeTab === "ingredients" && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-cream-200 pb-4">
                <h3 className="font-serif text-2xl text-forest font-normal">
                  Botanical Formulation Profile
                </h3>
                <p className="text-xs font-sans text-charcoal-muted mt-1">
                  Crafted with nourishing plant butters, cold-pressed oils, and natural color extracts.
                </p>
              </div>

              {/* Key Botanicals Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {productData.ingredients.keyBotanicals.map((item, idx) => (
                  <div key={idx} className="p-4 bg-cream-50 border border-cream-200">
                    <span className="text-[11px] font-sans uppercase tracking-widest text-olive-dark block mb-1">
                      Botanical Component 0{idx + 1}
                    </span>
                    <h4 className="font-serif text-lg text-forest font-medium">
                      {item.name}
                    </h4>
                    <p className="text-xs font-sans text-charcoal-muted mt-1.5 leading-relaxed">
                      {item.role}
                    </p>
                  </div>
                ))}
              </div>

              {/* Verified Ingredient Notice / Disclaimer */}
              <div className="p-4 bg-cream-100/60 border border-olive/20 text-xs font-sans text-charcoal-muted leading-relaxed">
                <span className="font-medium text-forest block mb-1">
                  Full Ingredient Disclosure:
                </span>
                <p>{productData.ingredients.disclaimer}</p>
                <p className="mt-2 text-olive-dark">
                  {productData.ingredients.fullList}
                </p>
              </div>
            </div>
          )}

          {/* Tab 2: Directions & Care */}
          {activeTab === "usage" && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-cream-200 pb-4">
                <h3 className="font-serif text-2xl text-forest font-normal">
                  How to Use Butter Bliss
                </h3>
                <p className="text-xs font-sans text-charcoal-muted mt-1">
                  A simple, gentle application routine for maximum lip softness.
                </p>
              </div>

              <div className="space-y-6">
                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-none bg-cream-100 border border-olive/30 flex items-center justify-center font-serif text-forest flex-shrink-0">
                    1
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-forest font-medium">
                      Directions for Use
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-charcoal-muted mt-1 leading-relaxed">
                      {productData.usage.directions}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-none bg-cream-100 border border-olive/30 flex items-center justify-center font-serif text-forest flex-shrink-0">
                    2
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-forest font-medium">
                      Application Frequency
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-charcoal-muted mt-1 leading-relaxed">
                      {productData.usage.frequency}
                    </p>
                  </div>
                </div>

                <div className="flex gap-4 items-start">
                  <div className="w-8 h-8 rounded-none bg-cream-100 border border-olive/30 flex items-center justify-center font-serif text-forest flex-shrink-0">
                    3
                  </div>
                  <div>
                    <h4 className="font-serif text-lg text-forest font-medium">
                      Styling Recommendation
                    </h4>
                    <p className="text-xs sm:text-sm font-sans text-charcoal-muted mt-1 leading-relaxed">
                      {productData.usage.tips}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Tab 3: Jar Specifications & Storage */}
          {activeTab === "specs" && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-cream-200 pb-4">
                <h3 className="font-serif text-2xl text-forest font-normal">
                  Jar &amp; Storage Guidelines
                </h3>
                <p className="text-xs font-sans text-charcoal-muted mt-1">
                  Verified dimensions and physical jar care instructions.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="p-4 bg-cream-50 border border-cream-200">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-olive-dark block mb-1">
                    Net Quantity
                  </span>
                  <p className="font-serif text-xl text-forest font-medium">
                    {productData.netWeight}
                  </p>
                  <p className="text-xs font-sans text-charcoal-muted mt-1">
                    Hand-poured into compact round cosmetic jars.
                  </p>
                </div>

                <div className="p-4 bg-cream-50 border border-cream-200">
                  <span className="text-[11px] font-sans uppercase tracking-widest text-olive-dark block mb-1">
                    Packaging Format
                  </span>
                  <p className="font-serif text-xl text-forest font-medium">
                    Clear Base with Black Lid
                  </p>
                  <p className="text-xs font-sans text-charcoal-muted mt-1">
                    {productData.packagingDetails}
                  </p>
                </div>
              </div>

              <div className="p-4 bg-cream-100/60 border border-cream-300">
                <span className="font-medium text-forest text-xs font-sans block mb-1">
                  Storage Conditions:
                </span>
                <p className="text-xs font-sans text-charcoal-muted leading-relaxed">
                  {productData.storage}
                </p>
              </div>
            </div>
          )}

          {/* Tab 4: Brand & Customer Support */}
          {activeTab === "brand" && (
            <div className="space-y-8 animate-fade-in">
              <div className="border-b border-cream-200 pb-4">
                <h3 className="font-serif text-2xl text-forest font-normal">
                  Brand &amp; Customer Support
                </h3>
                <p className="text-xs font-sans text-charcoal-muted mt-1">
                  Direct communication channels with the Heba Herbals team.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-cream-50 border border-cream-200 text-center">
                  <Mail className="w-5 h-5 text-olive mx-auto mb-2 stroke-[1.5]" />
                  <span className="text-[10px] uppercase tracking-wider text-olive-dark font-sans block">
                    Email Support
                  </span>
                  <a
                    href={`mailto:${brandConfig.contact.email}`}
                    className="text-xs font-medium text-forest hover:underline mt-1 block truncate"
                  >
                    {brandConfig.contact.email}
                  </a>
                </div>

                <div className="p-4 bg-cream-50 border border-cream-200 text-center">
                  <Phone className="w-5 h-5 text-olive mx-auto mb-2 stroke-[1.5]" />
                  <span className="text-[10px] uppercase tracking-wider text-olive-dark font-sans block">
                    Phone / Orders
                  </span>
                  <a
                    href={`tel:${brandConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                    className="text-xs font-medium text-forest hover:underline mt-1 block"
                  >
                    {brandConfig.contact.phone}
                  </a>
                </div>

                <div className="p-4 bg-cream-50 border border-cream-200 text-center">
                  <MapPin className="w-5 h-5 text-olive mx-auto mb-2 stroke-[1.5]" />
                  <span className="text-[10px] uppercase tracking-wider text-olive-dark font-sans block">
                    Craft Location
                  </span>
                  <span className="text-xs font-medium text-forest mt-1 block">
                    {brandConfig.contact.location}
                  </span>
                </div>
              </div>

              <div className="p-4 bg-cream-100/60 border border-cream-300 text-xs font-sans text-charcoal-muted">
                <span className="font-medium text-forest block mb-1">
                  Manufacturer and Batch Care:
                </span>
                <p>{productData.manufacturer.name} • {productData.manufacturer.location}</p>
                <p className="mt-1 text-olive-dark">{productData.manufacturer.smallBatchNote}</p>
              </div>
            </div>
          )}

        </div>
      </div>
    </section>
  );
}
