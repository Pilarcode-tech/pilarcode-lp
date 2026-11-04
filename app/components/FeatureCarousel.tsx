"use client";

import { Children, useRef, useState, type ReactNode } from "react";

export default function FeatureCarousel({ children }: { children: ReactNode }) {
  const items = Children.toArray(children);
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const select = (index: number) => {
    const element = rail.current;
    const card = element?.children[index] as HTMLElement | undefined;
    if (!element || !card) return;
    element.scrollTo({
      left:
        card.getBoundingClientRect().left -
        element.getBoundingClientRect().left +
        element.scrollLeft,
      behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
        ? "instant"
        : "smooth",
    });
  };
  return (
    <div className="min-w-0 lg:col-span-3">
      <div
        ref={rail}
        id="feature-carousel"
        role="region"
        aria-roledescription="carrossel"
        aria-label="Diferenciais da Pilarcode"
        tabIndex={0}
        onKeyDown={(event) => {
          if (window.matchMedia("(min-width: 768px)").matches) return;
          if (event.key === "ArrowRight" || event.key === "ArrowLeft") {
            event.preventDefault();
            select(
              Math.min(
                items.length - 1,
                Math.max(0, active + (event.key === "ArrowRight" ? 1 : -1)),
              ),
            );
          }
        }}
        onScroll={() => {
          const element = rail.current;
          if (!element || !element.clientWidth) return;
          let closest = 0;
          let distance = Infinity;
          Array.from(element.children).forEach((card, index) => {
            const offset = Math.abs(
              card.getBoundingClientRect().left -
                element.getBoundingClientRect().left,
            );
            if (offset < distance) {
              closest = index;
              distance = offset;
            }
          });
          setActive(closest);
        }}
        className="relative -mr-8 flex snap-x snap-mandatory gap-4 overflow-x-auto overscroll-x-contain pr-8 no-scrollbar focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#278deb] md:mr-0 md:grid md:grid-cols-2 md:overflow-visible md:pr-0"
      >
        {items.map((item, index) => (
          <div
            key={index}
            className="flex w-[88%] shrink-0 snap-start md:w-auto [&>article]:w-full"
          >
            {item}
          </div>
        ))}
      </div>
      <div className="mt-6 flex items-center justify-between md:hidden">
        <p aria-live="polite" className="font-dmsans text-xs text-gray-500">
          {String(active + 1).padStart(2, "0")}{" "}
          <span className="text-gray-300">/</span>{" "}
          {String(items.length).padStart(2, "0")}
        </p>
        <div className="flex gap-1" aria-label="Navegar pelos diferenciais">
          {items.map((_, index) => (
            <button
              type="button"
              key={index}
              aria-label={`Ver diferencial ${index + 1}`}
              aria-current={index === active ? "true" : undefined}
              aria-controls="feature-carousel"
              onClick={() => select(index)}
              className="flex h-8 w-8 items-center justify-center rounded-full focus-visible:outline focus-visible:outline-2 focus-visible:outline-[#211cda]"
            >
              <span
                aria-hidden="true"
                className={`h-1.5 rounded-full transition-all ${index === active ? "w-5 bg-[#211cda]" : "w-1.5 bg-gray-300"}`}
              />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
