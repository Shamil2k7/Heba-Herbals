import React from "react";
import Link from "next/link";
import { brandConfig } from "@/data/product";
import BotanicalCrest from "./BotanicalCrest";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="bg-charcoal text-cream-100 border-t border-charcoal-muted/40 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-charcoal-muted/30">
          
          {/* Brand Wordmark & Description */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <BotanicalCrest size={28} className="text-cream-200" />
              <span className="font-serif text-2xl tracking-wide text-cream-50 font-normal">
                {brandConfig.name}
              </span>
            </div>
            <p className="font-sans text-xs sm:text-sm text-cream-200/80 leading-relaxed max-w-sm">
              {brandConfig.shortAbout}
            </p>
            <div className="text-[11px] text-cream-300/60 font-sans tracking-wide">
              Small-batch natural lip care created with botanical care and understated elegance.
            </div>
          </div>

          {/* Site Navigation Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-cream-200 font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-xs font-sans">
              <li>
                <a href="#hero" className="text-cream-200/70 hover:text-cream-50 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#product-spotlight" className="text-cream-200/70 hover:text-cream-50 transition-colors">
                  The Product
                </a>
              </li>
              <li>
                <a href="#our-story" className="text-cream-200/70 hover:text-cream-50 transition-colors">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#gallery" className="text-cream-200/70 hover:text-cream-50 transition-colors">
                  Gallery
                </a>
              </li>
              <li>
                <a href="#ingredients" className="text-cream-200/70 hover:text-cream-50 transition-colors">
                  Ingredients
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Details & Legal */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-xs font-sans uppercase tracking-widest text-cream-200 font-semibold mb-4">
              Connect With Us
            </h4>
            <div className="space-y-2 text-xs font-sans text-cream-200/80">
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-cream-300 stroke-[1.5] flex-shrink-0" />
                <a
                  href={`mailto:${brandConfig.contact.email}`}
                  className="hover:text-cream-50 transition-colors"
                >
                  {brandConfig.contact.email}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-cream-300 stroke-[1.5] flex-shrink-0" />
                <a
                  href={`tel:${brandConfig.contact.phone.replace(/[^0-9+]/g, "")}`}
                  className="hover:text-cream-50 transition-colors"
                >
                  {brandConfig.contact.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-cream-300 stroke-[1.5] flex-shrink-0" />
                <span>{brandConfig.contact.location}</span>
              </div>
            </div>

            {/* Instagram: only display link if real verified URL is provided */}
            <div className="pt-2 text-xs font-sans">
              {brandConfig.contact.instagramUrl ? (
                <a
                  href={brandConfig.contact.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cream-200 hover:text-cream-50 underline transition-colors"
                >
                  Follow on Instagram ({brandConfig.contact.instagramHandle})
                </a>
              ) : (
                <span className="text-cream-300/50 text-[11px]">
                  Instagram: {brandConfig.contact.instagramHandle} (Profile link pending brand verification)
                </span>
              )}
            </div>
          </div>

        </div>

        {/* Footer Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-sans text-cream-300/60 gap-4">
          <div className="flex items-center gap-6">
            <span>© {currentYear} Heba Herbals. All rights reserved.</span>
            <Link
              href="/privacy-policy"
              className="hover:text-cream-100 transition-colors underline"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="hover:text-cream-100 transition-colors underline"
            >
              Terms and Conditions
            </Link>
          </div>

          <a
            href="#hero"
            className="inline-flex items-center gap-1.5 text-cream-200 hover:text-cream-50 transition-colors"
            aria-label="Scroll back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 stroke-[1.5]" />
          </a>
        </div>
      </div>
    </footer>
  );
}
