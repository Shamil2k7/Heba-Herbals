"use client";

import React, { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { galleryImages } from "@/data/product";
import { Maximize2, X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

export default function ProductGallery() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setIsZoomed(false);
  };

  const closeLightbox = useCallback(() => {
    setLightboxOpen(false);
    setIsZoomed(false);
  }, []);

  const nextLightboxImage = useCallback(() => {
    setLightboxIndex((prev) => (prev + 1) % galleryImages.length);
    setIsZoomed(false);
  }, []);

  const prevLightboxImage = useCallback(() => {
    setLightboxIndex((prev) => (prev - 1 + galleryImages.length) % galleryImages.length);
    setIsZoomed(false);
  }, []);

  // Keyboard accessibility: Escape, ArrowLeft, ArrowRight
  useEffect(() => {
    if (!lightboxOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        closeLightbox();
      } else if (e.key === "ArrowRight") {
        nextLightboxImage();
      } else if (e.key === "ArrowLeft") {
        prevLightboxImage();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightboxOpen, closeLightbox, nextLightboxImage, prevLightboxImage]);

  // Lock scroll during lightbox
  useEffect(() => {
    if (lightboxOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [lightboxOpen]);

  const activeImage = galleryImages[activeImageIndex];
  const currentLightboxImage = galleryImages[lightboxIndex];

  return (
    <section
      id="gallery"
      aria-labelledby="gallery-heading"
      className="py-16 lg:py-24 border-b border-olive/15 bg-ivory"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 pb-6 border-b border-cream-300">
          <div>
            <span className="text-xs uppercase tracking-ultra font-sans text-olive-dark font-semibold block mb-2">
              Product Gallery
            </span>
            <h2
              id="gallery-heading"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-forest font-normal tracking-tight"
            >
              Every Angle of Butter Bliss
            </h2>
          </div>
          <p className="font-sans text-xs sm:text-sm text-charcoal-muted max-w-md mt-4 md:mt-0">
            Unretouched photography of the authentic Butter Bliss jar, highlighting its natural formulation, black twist lid, and clear silhouette.
          </p>
        </div>

        {/* Gallery Layout: Large Editorial Showcase + Thumbnail Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Large Editorial Image */}
          <div className="lg:col-span-8">
            <div className="relative group bg-cream-100 p-3 sm:p-5 border border-cream-300 shadow-card">
              <div
                className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-ivory cursor-pointer"
                onClick={() => openLightbox(activeImageIndex)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    e.preventDefault();
                    openLightbox(activeImageIndex);
                  }
                }}
                aria-label={`Enlarge photo: ${activeImage.title}`}
              >
                <Image
                  src={activeImage.src}
                  alt={activeImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 65vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                />

                {/* Subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-forest/30 via-transparent to-transparent pointer-events-none" />

                {/* Enlarge Hint Button */}
                <div className="absolute top-4 right-4 bg-forest/80 hover:bg-forest text-cream-50 p-2.5 backdrop-blur-sm transition-all duration-200">
                  <Maximize2 className="w-4 h-4 stroke-[1.5]" />
                  <span className="sr-only">Click to enlarge</span>
                </div>

                {/* Badge */}
                <div className="absolute bottom-4 left-4 bg-cream-50/95 backdrop-blur-sm px-3.5 py-1.5 border border-olive/20 text-[11px] font-sans text-forest font-medium">
                  {activeImage.badge}
                </div>
              </div>

              {/* Caption */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between text-xs font-sans text-charcoal gap-2 px-1">
                <div>
                  <span className="font-medium text-forest">{activeImage.title}: </span>
                  <span className="text-charcoal-muted">{activeImage.caption}</span>
                </div>
                <button
                  type="button"
                  onClick={() => openLightbox(activeImageIndex)}
                  className="text-olive-dark hover:text-forest underline text-[11px] font-medium self-start sm:self-auto"
                >
                  Click to Expand Lightbox
                </button>
              </div>
            </div>
          </div>

          {/* Supporting Thumbnails / Grid */}
          <div className="lg:col-span-4 flex flex-col space-y-4">
            <span className="text-xs uppercase tracking-widest text-olive-dark font-sans font-semibold">
              Select Asset Perspective
            </span>
            <div className="grid grid-cols-3 lg:grid-cols-1 gap-4">
              {galleryImages.map((img, idx) => {
                const isActive = activeImageIndex === idx;
                return (
                  <button
                    key={img.id}
                    onClick={() => setActiveImageIndex(idx)}
                    className={`relative p-2 text-left transition-all duration-200 flex flex-col sm:flex-row items-center gap-3 border ${
                      isActive
                        ? "border-forest bg-cream-100 shadow-sm ring-1 ring-forest/30"
                        : "border-cream-300 bg-ivory hover:border-olive/40 hover:bg-cream-50"
                    }`}
                  >
                    <div className="relative w-full sm:w-20 aspect-square flex-shrink-0 overflow-hidden bg-cream-100">
                      <Image
                        src={img.src}
                        alt={img.alt}
                        fill
                        sizes="100px"
                        className="object-cover object-center"
                      />
                    </div>
                    <div className="flex-1 min-w-0 py-1">
                      <span className="text-[10px] uppercase tracking-wider text-olive font-sans block">
                        Perspective 0{idx + 1}
                      </span>
                      <p className="font-serif text-sm text-forest truncate font-medium">
                        {img.title}
                      </p>
                      <p className="text-[11px] text-charcoal-muted line-clamp-1 hidden sm:block">
                        {img.badge}
                      </p>
                    </div>
                  </button>
                );
              })}
            </div>

            {/* Product authenticity guarantee note */}
            <div className="p-4 bg-cream-50 border border-cream-200 text-xs font-sans text-charcoal-muted leading-relaxed">
              <span className="font-medium text-forest block mb-1">Authentic Asset Guarantee</span>
              All photographs in this gallery represent the real Butter Bliss physical product photographed in natural room daylight.
            </div>
          </div>

        </div>
      </div>

      {/* Accessible Fullscreen Lightbox Modal */}
      {lightboxOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Butter Bliss Product Lightbox"
          className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-md flex flex-col justify-between p-4 sm:p-6 text-cream-50 animate-fade-in"
        >
          {/* Lightbox Controls Top Bar */}
          <div className="flex items-center justify-between max-w-7xl w-full mx-auto pb-4 border-b border-cream-200/20">
            <div className="flex items-center gap-3">
              <span className="font-serif text-lg tracking-wide text-cream-100">
                Heba Herbals • Butter Bliss
              </span>
              <span className="text-xs text-cream-300 font-sans tracking-widest uppercase">
                ({lightboxIndex + 1} of {galleryImages.length})
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={() => setIsZoomed(!isZoomed)}
                className="p-2.5 bg-forest/80 hover:bg-forest text-cream-50 border border-cream-200/20 transition-colors"
                aria-label={isZoomed ? "Zoom out" : "Zoom in"}
                title={isZoomed ? "Zoom out" : "Zoom in"}
              >
                {isZoomed ? (
                  <ZoomOut className="w-5 h-5 stroke-[1.5]" />
                ) : (
                  <ZoomIn className="w-5 h-5 stroke-[1.5]" />
                )}
              </button>

              <button
                type="button"
                onClick={closeLightbox}
                className="p-2.5 bg-forest/80 hover:bg-forest text-cream-50 border border-cream-200/20 transition-colors"
                aria-label="Close Lightbox (Escape)"
                title="Close (Escape)"
              >
                <X className="w-5 h-5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          {/* Lightbox Center Image with Navigation Arrows */}
          <div className="relative flex-1 flex items-center justify-center my-4 overflow-hidden">
            <button
              type="button"
              onClick={prevLightboxImage}
              className="absolute left-2 sm:left-6 z-10 p-3 bg-forest/80 hover:bg-forest text-cream-50 border border-cream-200/20 transition-colors"
              aria-label="Previous image (Left Arrow)"
            >
              <ChevronLeft className="w-6 h-6 stroke-[1.5]" />
            </button>

            <div
              className={`relative max-w-4xl max-h-[75vh] w-full h-full flex items-center justify-center transition-all duration-300 ${
                isZoomed ? "cursor-zoom-out scale-125" : "cursor-zoom-in scale-100"
              }`}
              onClick={() => setIsZoomed(!isZoomed)}
            >
              <Image
                src={currentLightboxImage.src}
                alt={currentLightboxImage.alt}
                fill
                className="object-contain"
                priority
              />
            </div>

            <button
              type="button"
              onClick={nextLightboxImage}
              className="absolute right-2 sm:right-6 z-10 p-3 bg-forest/80 hover:bg-forest text-cream-50 border border-cream-200/20 transition-colors"
              aria-label="Next image (Right Arrow)"
            >
              <ChevronRight className="w-6 h-6 stroke-[1.5]" />
            </button>
          </div>

          {/* Lightbox Bottom Caption Bar */}
          <div className="max-w-4xl w-full mx-auto text-center pt-3 border-t border-cream-200/20">
            <p className="font-serif text-lg text-cream-100">
              {currentLightboxImage.title}
            </p>
            <p className="text-xs font-sans text-cream-300 mt-1 max-w-xl mx-auto">
              {currentLightboxImage.caption}
            </p>
            <p className="text-[10px] text-cream-400 mt-2 font-sans tracking-widest uppercase">
              Use arrow keys to navigate • Press ESC to exit
            </p>
          </div>
        </div>
      )}
    </section>
  );
}
