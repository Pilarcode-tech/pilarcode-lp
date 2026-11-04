// Adapted from Magic UI's Interactive Hover Button (MIT).
// https://magicui.design/docs/components/interactive-hover-button
// Original credit: Aayush Bharti. License: /licenses/magic-ui.txt
import type { ButtonHTMLAttributes } from "react";

export function InteractiveHoverButton({
  children,
  className = "",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button
      type="button"
      className={`group relative isolate inline-flex min-h-12 items-center justify-center overflow-hidden rounded-full bg-[#211cda] px-6 py-3.5 font-dmsans text-sm font-medium text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#278deb] disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
      {...props}
    >
      <span className="flex items-center justify-center gap-4">
        <span
          aria-hidden="true"
          className="h-1.5 w-1.5 rounded-full bg-[#75bcff] transition-transform duration-300 motion-safe:group-hover:scale-[100] motion-safe:group-focus-visible:scale-[100]"
        />
        <span className="relative transition-all duration-300 motion-safe:group-hover:translate-x-6 motion-safe:group-hover:opacity-0 motion-safe:group-focus-visible:translate-x-6 motion-safe:group-focus-visible:opacity-0">
          {children}
        </span>
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 hidden items-center justify-center gap-4 text-[#060554] opacity-0 transition-all duration-300 motion-safe:flex motion-safe:translate-x-8 motion-safe:group-hover:translate-x-0 motion-safe:group-hover:opacity-100 motion-safe:group-focus-visible:translate-x-0 motion-safe:group-focus-visible:opacity-100"
      >
        {children}
        <span>↗</span>
      </span>
    </button>
  );
}
