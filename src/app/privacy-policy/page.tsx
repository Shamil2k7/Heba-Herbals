import React from "react";
import Link from "next/link";
import type { Metadata } from "next";
import { brandConfig } from "@/data/product";
import BotanicalCrest from "@/components/BotanicalCrest";
import { ArrowLeft, Shield } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy Policy | Heba Herbals",
  description:
    "Privacy Policy for Heba Herbals Butter Bliss lip care website, detailing data handling practices and customer privacy commitments.",
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "October 2026";

  return (
    <div className="min-h-screen bg-ivory text-charcoal">
      {/* Editorial Header */}
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
            <Shield className="w-4 h-4 text-olive" />
            <span>Legal Documentation</span>
          </div>
          <h1 className="font-serif text-4xl sm:text-5xl text-forest font-normal tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-xs font-sans text-charcoal-muted">
            Last Updated: {lastUpdated} • [Pre-Launch Review Document]
          </p>
        </div>

        <div className="prose prose-stone max-w-none space-y-8 text-sm font-sans text-charcoal leading-relaxed">
          
          <div className="p-4 bg-cream-50 border border-olive/20 text-xs text-charcoal-muted">
            <strong className="text-forest block mb-1">Pre-Launch Notice for Legal Review:</strong>
            This privacy policy is a starter draft tailored specifically for the Heba Herbals Butter Bliss static website. All sections marked with brackets [ ] must be formally verified by the business owner before commercial launch. This document does not constitute formal legal counsel.
          </div>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              1. Introduction and Scope
            </h2>
            <p>
              Heba Herbals (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) operates the website for Butter Bliss All-Natural Lip Elixir. We respect your privacy and are committed to protecting any personal information you provide when browsing our website or contacting us.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              2. Information We Collect
            </h2>
            <p>
              Our website is designed as an informative, editorial showcase for Butter Bliss. We collect only minimal information necessary to respond to your inquiries:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-charcoal-muted">
              <li>
                <strong>Direct Inquiries:</strong> When you contact us via email, phone, or WhatsApp, you may provide your name, phone number, email address, and order preferences.
              </li>
              <li>
                <strong>Technical Server Logs:</strong> Standard web server logs may temporarily record basic technical data such as IP address, browser type, referring pages, and access times to ensure platform reliability and security.
              </li>
              <li>
                <strong>No On-Site Payment Data:</strong> This website does not directly process payments or collect debit or credit card details.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              3. How We Use Your Information
            </h2>
            <p>Any personal information provided is used solely to:</p>
            <ul className="list-disc pl-5 space-y-1.5 text-charcoal-muted">
              <li>Answer customer questions regarding Butter Bliss lip elixir and batch availability.</li>
              <li>Coordinate product deliveries and customer support.</li>
              <li>Maintain site operational integrity and prevent fraudulent activity.</li>
            </ul>
            <p>
              We do not sell, rent, or trade your personal information to third parties for marketing or advertising purposes.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              4. Third-Party Services
            </h2>
            <p>
              When you choose to communicate via third-party communication channels (such as WhatsApp or external email clients), your interactions are governed by the privacy practices of those respective third-party providers:
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-charcoal-muted">
              <li>WhatsApp (Meta Platforms): Governed by WhatsApp Privacy Policy.</li>
              <li>Website Hosting Provider: [To be configured upon deployment, e.g., Vercel / Netlify / Custom Server].</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              5. Data Retention and Security
            </h2>
            <p>
              We retain customer communication records only for as long as needed to fulfill customer orders, answer inquiries, and maintain basic accounting records. We apply reasonable commercial precautions to protect data against unauthorized disclosure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="font-serif text-2xl text-forest font-normal">
              6. Your Rights and Contact
            </h2>
            <p>
              You have the right to request access to, correction of, or deletion of any contact information we hold about you. For any privacy questions, please contact:
            </p>
            <div className="p-4 bg-cream-50 border border-cream-200 mt-2">
              <p className="font-medium text-forest">{brandConfig.name}</p>
              <p className="text-xs text-charcoal-muted">Email: {brandConfig.contact.email}</p>
              <p className="text-xs text-charcoal-muted">Phone: {brandConfig.contact.phone}</p>
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
