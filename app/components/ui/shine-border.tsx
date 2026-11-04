// Adapted from Magic UI's Shine Border (MIT), discovered on 21st.dev.
// https://21st.dev/@dillionverma/components/shine-border
// License: /licenses/magic-ui.txt
import type { CSSProperties } from "react";

export function ShineBorder({
  className = "",
  duration = 18,
}: {
  className?: string;
  duration?: number;
}) {
  return (
    <div
      aria-hidden="true"
      className={`pilar-shine pointer-events-none absolute inset-0 rounded-[inherit] ${className}`}
      style={
        {
          "--shine-duration": `${duration}s`,
          backgroundImage:
            "radial-gradient(transparent, transparent, #278deb, #211cda, transparent, transparent)",
          backgroundSize: "300% 300%",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "xor",
          maskComposite: "exclude",
          padding: "1px",
        } as CSSProperties
      }
    />
  );
}
