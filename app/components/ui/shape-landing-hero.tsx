// Adapted from Shape Hero v1.0.0 by Dorian Baffier / Kokonut UI (MIT).
// Selected: https://21st.dev/@kokonutd/components/shape-landing-hero
// Original composition: https://github.com/kokonut-labs/kokonutui/blob/83eec6d982d400a18438001a8efdbac1f159dd43/components/kokonutui/shape-hero.tsx
// Animation uses CSS; typography and colors use Pilarcode's identity.
// License: /licenses/kokonut-ui.txt
import type { CSSProperties, ReactNode } from "react";

function ElegantShape({
  className,
  delay = 0,
  width = 400,
  height = 100,
  rotate = 0,
  gradient = "from-white/[0.08]",
  borderRadius = 16,
}: {
  className: string;
  delay?: number;
  width?: number;
  height?: number;
  rotate?: number;
  gradient?: string;
  borderRadius?: number;
}) {
  return (
    <div
      className={`pilar-shape-enter absolute ${className}`}
      style={
        {
          "--shape-angle": `${rotate}deg`,
          "--shape-delay": `${delay}s`,
          transform: `rotate(${rotate}deg)`,
        } as CSSProperties
      }
    >
      <div className="pilar-shape-float relative" style={{ width, height }}>
        <div
          className={`absolute inset-0 bg-gradient-to-r to-transparent ${gradient} border border-white/[0.06] backdrop-blur-[1px] shadow-[0_2px_16px_-2px_rgba(255,255,255,0.04)] after:absolute after:inset-0 after:rounded-[inherit] after:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.12),transparent_70%)]`}
          style={{ borderRadius }}
        />
      </div>
    </div>
  );
}

export default function ShapeLandingHero({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <section className="relative flex min-h-[620px] w-full items-center justify-center overflow-hidden rounded-[32px] bg-[#060554] py-14 sm:min-h-[660px] lg:min-h-[720px] lg:py-20">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#278deb]/15 via-transparent to-[#211cda]/25" />
        <ElegantShape
          className="-left-[15%] -top-[10%]"
          delay={0.3}
          gradient="from-[#278deb]/30"
          height={500}
          rotate={-8}
          width={300}
          borderRadius={24}
        />
        <ElegantShape
          className="-bottom-[5%] -right-[20%]"
          delay={0.5}
          gradient="from-[#211cda]/60"
          height={200}
          rotate={15}
          width={600}
          borderRadius={20}
        />
        <ElegantShape
          className="-left-[5%] top-[40%]"
          delay={0.4}
          gradient="from-[#211cda]/40"
          height={300}
          rotate={24}
          width={300}
          borderRadius={32}
        />
        <ElegantShape
          className="right-[10%] top-[5%]"
          delay={0.6}
          gradient="from-[#278deb]/25"
          height={100}
          rotate={-20}
          width={250}
          borderRadius={12}
        />
        <ElegantShape
          className="-right-[10%] top-[45%]"
          delay={0.7}
          gradient="from-[#278deb]/30"
          height={150}
          rotate={35}
          width={400}
          borderRadius={16}
        />
        <ElegantShape
          className="bottom-[10%] left-[20%]"
          delay={0.2}
          gradient="from-[#278deb]/25"
          height={200}
          rotate={-25}
          width={200}
          borderRadius={28}
        />
        <ElegantShape
          className="left-[40%] top-[15%]"
          delay={0.8}
          gradient="from-[#211cda]/30"
          height={80}
          rotate={45}
          width={150}
          borderRadius={10}
        />
        <ElegantShape
          className="left-[25%] top-[60%]"
          delay={0.9}
          gradient="from-[#278deb]/20"
          height={120}
          rotate={-12}
          width={450}
          borderRadius={18}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#060554] via-[#060554]/30 to-[#060554]/70" />
      </div>
      <div className="relative z-10 mx-auto w-full max-w-4xl px-4 text-center sm:px-10">
        {children}
      </div>
    </section>
  );
}
