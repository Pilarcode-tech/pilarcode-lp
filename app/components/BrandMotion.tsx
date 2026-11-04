"use client";

import { useState, type ReactNode } from "react";
import PauseRounded from "@mui/icons-material/PauseRounded";
import PlayArrowRounded from "@mui/icons-material/PlayArrowRounded";

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
          {paused ? (
            <PlayArrowRounded aria-hidden="true" sx={{ fontSize: 16 }} />
          ) : (
            <PauseRounded aria-hidden="true" sx={{ fontSize: 16 }} />
          )}
          {paused ? "Retomar movimento" : "Pausar movimento"}
        </button>
      </div>
    </div>
  );
}
