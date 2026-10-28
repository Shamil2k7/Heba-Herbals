"use client";

import React, { useState } from "react";
import AnnouncementBar from "@/components/AnnouncementBar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BrandBenefits from "@/components/BrandBenefits";
import ProductSpotlight from "@/components/ProductSpotlight";
import OurStory from "@/components/OurStory";
import ProductGallery from "@/components/ProductGallery";
import IngredientsAndDetails from "@/components/IngredientsAndDetails";
import EditorialClosing from "@/components/EditorialClosing";
import Footer from "@/components/Footer";
import OrderModal from "@/components/OrderModal";

export default function HomePage() {
  const [orderModalOpen, setOrderModalOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-ivory text-charcoal">
      {/* Announcement Bar */}
      <AnnouncementBar />

      {/* Main Navigation */}
      <Navbar onOpenOrderModal={() => setOrderModalOpen(true)} />

      {/* Main Content */}
      <main className="flex-1">
        {/* Editorial Hero Section */}
        <Hero
          onDiscoverClick={() => scrollToSection("product-spotlight")}
          onApproachClick={() => scrollToSection("our-story")}
        />

        {/* Brand Benefits Strip */}
        <BrandBenefits />

        {/* Product Spotlight */}
        <ProductSpotlight
          onOpenOrderModal={() => setOrderModalOpen(true)}
          onViewDetailsClick={() => scrollToSection("ingredients")}
        />

        {/* Our Story */}
        <OurStory onExploreClick={() => scrollToSection("product-spotlight")} />

        {/* Product Gallery & Lightbox */}
        <ProductGallery />

        {/* Ingredients & Product Details */}
        <IngredientsAndDetails />

        {/* Editorial Closing Statement */}
        <EditorialClosing onExploreClick={() => scrollToSection("product-spotlight")} />
      </main>

      {/* Brand Footer */}
      <Footer />

      {/* Direct Order Modal */}
      <OrderModal
        isOpen={orderModalOpen}
        onClose={() => setOrderModalOpen(false)}
      />
    </div>
  );
}
