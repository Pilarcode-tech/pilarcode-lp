// Adapted from Magic UI Bento Grid (MIT), part of the 21st.dev library.
// https://magicui.design/docs/components/bento-grid
// License: /licenses/magic-ui.txt
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export function BentoGrid({
  className = "",
  ...props
}: ComponentPropsWithoutRef<"div">) {
  return (
    <div
      className={`grid grid-cols-1 gap-4 sm:grid-cols-2 ${className}`}
      {...props}
    />
  );
}

export function BentoCard({
  title,
  description,
  icon,
  className = "",
}: {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}) {
  return (
    <article
      className={`group relative flex flex-col overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_2px_12px_-8px_rgba(6,5,84,0.12)] transition-shadow hover:shadow-[0_12px_32px_-16px_rgba(33,28,218,0.2)] ${className}`}
    >
      <div
        aria-hidden="true"
        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl border border-[#278deb]/10 bg-[#278deb]/5 text-[#211cda] transition-transform duration-300 motion-safe:group-hover:-translate-y-1"
      >
        {icon}
      </div>
      <h3 className="font-manrope text-sm font-semibold leading-relaxed text-gray-800">
        {title}
      </h3>
      <p className="mt-2 font-dmsans text-sm leading-relaxed text-gray-500">
        {description}
      </p>
    </article>
  );
}
