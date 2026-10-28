import React from "react";
import { Sparkles, Compass, Feather, PackageCheck } from "lucide-react";

export default function BrandBenefits() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Everyday Lip Care",
      description:
        "Formulated to replenish dry lips daily with a smooth, breathable texture.",
    },
    {
      icon: Compass,
      title: "A Pocket-Sized Essential",
      description:
        "Designed in a compact round jar that fits seamlessly into your purse or pocket.",
    },
    {
      icon: Feather,
      title: "A Simple Daily Ritual",
      description:
        "Melts tenderly onto lips, providing comfort whenever you need a touch of moisture.",
    },
    {
      icon: PackageCheck,
      title: "Thoughtful Presentation",
      description:
        "A classic black twist lid, clean botanical labeling, and authentic small-batch care.",
    },
  ];

  return (
    <section
      aria-label="Brand Benefits"
      className="bg-cream-100/70 border-b border-olive/15 py-12 lg:py-16"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {benefits.map((item, index) => {
            const IconComponent = item.icon;
            return (
              <div
                key={index}
                className="group p-6 bg-ivory border border-cream-300 hover:border-olive/40 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 flex items-center justify-center bg-cream-50 border border-olive/20 text-forest mb-5 group-hover:bg-forest group-hover:text-cream-50 transition-colors duration-300">
                    <IconComponent className="w-5 h-5 stroke-[1.25]" />
                  </div>
                  <h3 className="font-serif text-xl text-forest tracking-normal mb-2.5">
                    {item.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-charcoal-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-cream-200 flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-olive font-sans">
                    0{index + 1}
                  </span>
                  <span className="w-2 h-[1px] bg-olive/40" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
