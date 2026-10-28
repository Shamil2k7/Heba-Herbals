import React from "react";
import { brandConfig } from "@/data/product";

export default function AnnouncementBar() {
  if (!brandConfig.announcement.enabled) return null;

  return (
    <aside aria-label="Announcement" className="bg-forest text-cream-100 text-xs tracking-wider uppercase py-2 px-4 border-b border-forest-light/30">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-3 text-center">
        <span className="inline-block w-1.5 h-1.5 rounded-full bg-olive-light opacity-80" />
        <p className="font-sans font-medium text-[11px] sm:text-xs">
          {brandConfig.announcement.text}
        </p>
        <span className="hidden sm:inline-block w-1.5 h-1.5 rounded-full bg-olive-light opacity-80" />
      </div>
    </aside>
  );
}
