"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { brandConfig, navigationLinks } from "@/data/product";
import BotanicalCrest from "./BotanicalCrest";
import { Menu, X, ArrowUpRight } from "lucide-react";

interface NavbarProps {
  onOpenOrderModal: () => void;
}

export default function Navbar({ onOpenOrderModal }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on Escape key press
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [mobileMenuOpen]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileMenuOpen]);

  return (
    <header
      className={`sticky top-0 z-40 w-full transition-all duration-300 ${
        scrolled
          ? "bg-cream-100/95 backdrop-blur-md border-b border-olive/15 py-3 shadow-subtle"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Wordmark & Crest */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group focus:outline-none focus-visible:ring-1 focus-visible:ring-olive"
          >
            <BotanicalCrest
              size={30}
              className="text-forest transition-transform duration-300 group-hover:scale-105"
            />
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-wide text-forest font-medium">
                {brandConfig.name}
              </span>
              <span className="text-[9px] tracking-widest uppercase text-olive-dark font-sans font-medium -mt-1">
                Botanical Lip Care
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav
            aria-label="Main Navigation"
            className="hidden md:flex items-center space-x-7"
          >
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs font-sans uppercase tracking-widest text-charcoal hover:text-forest transition-colors duration-200 relative py-1 after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[1px] after:bg-forest hover:after:w-full after:transition-all after:duration-300"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action: Shop CTA */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={onOpenOrderModal}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-forest hover:bg-forest-light text-cream-50 text-xs font-sans uppercase tracking-widest transition-all duration-200 border border-forest shadow-sm active:translate-y-[1px]"
            >
              <span>Shop Butter Bliss</span>
              <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-forest hover:text-charcoal focus:outline-none focus-visible:ring-1 focus-visible:ring-olive"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6 stroke-[1.5]" />
              ) : (
                <Menu className="w-6 h-6 stroke-[1.5]" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Accessible Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Mobile Navigation"
          className="fixed inset-0 top-[60px] z-50 bg-ivory border-t border-olive/20 md:hidden flex flex-col justify-between px-6 py-8 overflow-y-auto animate-fade-in"
        >
          <nav className="flex flex-col space-y-6">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-serif text-2xl text-forest hover:text-olive-dark tracking-wide border-b border-cream-200 pb-3 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <div className="pt-8 border-t border-cream-200 space-y-4">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenOrderModal();
              }}
              className="w-full flex items-center justify-center gap-2 py-3.5 bg-forest text-cream-50 text-xs font-sans uppercase tracking-widest border border-forest active:bg-forest-light"
            >
              <span>Shop Butter Bliss</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <div className="text-center">
              <p className="text-xs text-olive-dark tracking-wide font-sans">
                {brandConfig.contact.email}
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
