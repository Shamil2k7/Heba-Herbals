import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { brandConfig, productData } from "@/data/product";
import BotanicalCrest from "@/components/BotanicalCrest";
import { ArrowLeft, FileText } from "lucide-react";

export const metadata: Metadata = {
  title: "Terms and Conditions | Heba Herbals",
  description:
    "Terms and Conditions for purchasing and using Heba Herbals Butter Bliss lip care products.",
};

export default function TermsAndConditionsPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Header */}
      <header className="border-b border-olive/20 bg-cream-100 py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 group text-xs uppercase tracking-widest font-sans text-forest hover:text-forest-light"
          >
            <ArrowLeft className="w-4 h-4 transition-transform group-hover:-translate-x-1" />
            <span>Return to Heba Herbals</span>
          </Link>
          <div className="flex items-center gap-2">
            <BotanicalCrest size={22} className="text-forest" />
            <span className="font-serif text-lg text-forest font-medium">
              {brandConfig.name}
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="border-b border-cream-300 pb-8 mb-10">
          <div className="flex items-center gap-2 text-xs uppercase tracking-ultra text-olive-dark font-sans font-semibold mb-2">
            <FileText className="w-4 h-4 text-olive" />
            <span>Terms of Service</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-forest font-normal tracking-tight">
            Terms and Conditions
          </h1>
          <p className="mt-3 text-xs font-sans text-charcoal-muted">
            Last Updated: {lastUpdated} • [Pre-Launch Review Draft]
          </p>
        </div>

        <div className="space-y-8 text-sm font-sans text-charcoal leading-relaxed">
          
          <div className="p-4 bg-cream-50 border border-olive/20 text-xs text-charcoal-muted">
            <strong className="text-forest block mb-1">Pre-Launch Notice:</strong>
            These terms govern the use of this website and small-batch orders for Butter Bliss All-Natural Lip Elixir. Commercial specifics in brackets [ ] require final operational verification prior to public commercial rollout.
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              1. General Information
            </h2>
            <p>
              This website is operated by Heba Herbals. By visiting our site or submitting an order enquiry for Butter Bliss All-Natural Lip Elixir, you agree to be bound by the following terms and conditions.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              2. Product Presentation and Small-Batch Nature
            </h2>
            <p>
              Butter Bliss All-Natural Lip Elixir is an artisanal product crafted in controlled small batches.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-charcoal-muted">
              <li>
                <strong>Product Photography:</strong> Photos featured on this website are unretouched captures of the genuine Butter Bliss product. Due to natural botanical ingredients, slight batch variations in color depth or texture may occur naturally.
              </li>
              <li>
                <strong>Net Quantity:</strong> Standard jar contains {productData.netWeight}.
              </li>
              <li>
                <strong>Packaging:</strong> Clear round cosmetic jar with secure black twist-lock lid.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              3. Ordering and Payment Process
            </h2>
            <p>
              Because each batch is prepared in limited quantities:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-charcoal-muted">
              <li>
                Orders are initiated directly via verified contact channels (WhatsApp, direct email, or telephone).
              </li>
              <li>
                Current batch price is listed as {productData.price.formatted} [subject to confirmation based on shipping destination].
              </li>
              <li>
                Payment arrangements [e.g., UPI, Bank Transfer, or Cash on Delivery where available] are communicated directly upon order confirmation.
              </li>
              <li>
                No credit card information is collected on this website.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              4. Shipping and Dispatch Policy
            </h2>
            <p>
              Orders are packaged carefully to protect the cosmetic jar in transit.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-charcoal-muted">
              <li>
                Dispatch timeline: [Typically 1 to 3 business days following order confirmation, subject to current batch availability].
              </li>
              <li>
                Delivery areas: [Regional and national courier delivery details to be confirmed with customer prior to dispatch].
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              5. Hygiene, Returns, and Replacements
            </h2>
            <p>
              For public safety and personal hygiene reasons, cosmetic and lip care products cannot be returned or exchanged once opened or used.
            </p>
            <p className="text-charcoal-muted">
              If your jar arrives damaged or defective in transit, please contact us within [48 hours] of receipt with photographs of the packaging to arrange an immediate replacement or resolution.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              6. Patch Test and Allergen Guidance
            </h2>
            <p>
              We recommend performing a small patch test on the inner arm or corner of the lip prior to full application, especially if you have known sensitivities to botanical oils or bee and plant waxes. Discontinue use if irritation occurs.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              7. Customer Inquiries
            </h2>
            <div className="p-4 bg-cream-50 border border-cream-200">
              <p className="font-medium text-forest">{brandConfig.name}</p>
              <p className="text-xs text-charcoal-muted">Customer Support: {brandConfig.contact.email}</p>
              <p className="text-xs text-charcoal-muted">Direct Phone: {brandConfig.contact.phone}</p>
              <p className="text-xs text-charcoal-muted">Location: {brandConfig.contact.location}</p>
            </div>
          </section>

        </div>

        {/* Back Link */}
        <div className="mt-12 pt-8 border-t border-cream-300">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-sans text-forest hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Butter Bliss Home</span>
          </Link>
        </div>
      </main>
    </div>
  );
}
