"use client";

import { useState, type ReactNode } from "react";

export default function BrandMotion({ children }: { children: ReactNode }) {
  const [paused, setPaused] = useState(false);
  return (
    <div data-brand-paused={paused}>
      {children}
      <div className="mt-3 flex justify-end motion-reduce:hidden">
        <button
          type="button"
          aria-pressed={paused}
          onClick={() => setPaused(!paused)}
          className="inline-flex min-h-9 items-center gap-2 rounded-full px-3 font-dmsans text-[11px] text-gray-500 hover:bg-gray-50 hover:text-[#211cda]"
        >
          <svg
            aria-hidden="true"
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="currentColor"
          >
            {paused ? (
              <path d="m3 1 8 5-8 5V1Z" />
            ) : (
              <path d="M2 1h3v10H2zM7 1h3v10H7z" />
            )}
          </svg>
          {paused ? "Retomar movimento" : "Pausar movimento"}
        </button>
      </div>
    </div>
  );
}
