"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { productData, brandConfig } from "@/data/product";
import { X, MessageCircle, Mail, Phone, ShieldCheck } from "lucide-react";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function OrderModal({ isOpen, onClose }: OrderModalProps) {
  // Handle ESC key
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  // Lock scroll
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const whatsappUrl = `https://wa.me/${brandConfig.contact.whatsappNumber}?text=${encodeURIComponent(
    brandConfig.contact.whatsappOrderMessage
  )}`;

  const emailSubject = encodeURIComponent(
    `Order Inquiry: ${productData.brand} ${productData.name}`
  );
  const emailBody = encodeURIComponent(
    `Hello Heba Herbals,\n\nI would like to enquire about ordering the Butter Bliss All-Natural Lip Elixir (${productData.netWeight}).\n\nPlease let me know about current batch availability, payment options, and delivery.\n\nThank you!`
  );
  const mailtoUrl = `mailto:${brandConfig.contact.email}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="order-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-charcoal/80 backdrop-blur-sm animate-fade-in"
    >
      <div
        className="relative w-full max-w-lg bg-ivory border border-cream-300 shadow-float overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="bg-forest text-cream-50 px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-serif text-lg tracking-wide">
              {brandConfig.name} Direct Order
            </span>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1.5 text-cream-200 hover:text-cream-50 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5 stroke-[1.5]" />
          </button>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6">
          
          {/* Product Summary Card */}
          <div className="flex gap-4 p-4 bg-cream-100 border border-cream-300">
            <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-ivory border border-cream-200 flex-shrink-0 overflow-hidden">
              <Image
                src="/images/product/butter-bliss-top-view.jpg"
                alt="Butter Bliss Lip Elixir"
                fill
                sizes="80px"
                className="object-cover"
              />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-[10px] uppercase tracking-widest text-olive-dark font-sans block">
                {productData.brand}
              </span>
              <h3
                id="order-modal-title"
                className="font-serif text-lg text-forest font-medium truncate"
              >
                {productData.name}
              </h3>
              <p className="text-xs text-charcoal-muted mt-0.5">
                {productData.netWeight} • Classic Round Jar
              </p>
              <div className="mt-1 flex items-baseline gap-2">
                <span className="font-serif text-xl text-forest font-semibold">
                  {productData.price.formatted}
                </span>
                <span className="text-[10px] text-olive-dark font-sans">
                  (Single jar)
                </span>
              </div>
            </div>
          </div>

          {/* Genuine Purchase Notice */}
          <div className="text-xs font-sans text-charcoal-muted leading-relaxed">
            <p>
              Butter Bliss is hand-crafted in small batches. To verify fresh stock and provide personal service, orders are arranged directly with the Heba Herbals team.
            </p>
          </div>

          {/* Real Purchase Action Options */}
          <div className="space-y-3">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-between p-3.5 bg-forest hover:bg-forest-light text-cream-50 text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-forest group"
            >
              <div className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-cream-100 stroke-[1.5]" />
                <span className="font-medium">Order via WhatsApp</span>
              </div>
              <span className="text-[11px] text-cream-200 lowercase tracking-normal">
                instant response
              </span>
            </a>

            <a
              href={mailtoUrl}
              className="w-full flex items-center justify-between p-3.5 bg-ivory hover:bg-cream-100 text-forest text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-cream-300"
            >
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-olive stroke-[1.5]" />
                <span className="font-medium">Order via Email</span>
              </div>
              <span className="text-[11px] text-charcoal-muted lowercase tracking-normal">
                {brandConfig.contact.email}
              </span>
            </a>

            <a
              href={`tel:${brandConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
              className="w-full flex items-center justify-between p-3.5 bg-ivory hover:bg-cream-100 text-forest text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-cream-300"
            >
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-olive stroke-[1.5]" />
                <span className="font-medium">Call for Order</span>
              </div>
              <span className="text-[11px] text-charcoal-muted tracking-normal">
                {brandConfig.contact.phone}
              </span>
            </a>
          </div>

          {/* Safety & Trust Note */}
          <div className="pt-2 border-t border-cream-200 flex items-center gap-2 text-[11px] text-olive-dark font-sans">
            <ShieldCheck className="w-4 h-4 text-olive stroke-[1.5] flex-shrink-0" />
            <span>
              Honest shopping experience: no personal tracking or card data collected on-site.
            </span>
          </div>

        </div>
      </div>
    </div>
  );
}
