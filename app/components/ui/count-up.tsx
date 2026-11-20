"use client";

import { useEffect, useState } from "react";

type CountUpProps = {
  /** Valor final. O HTML do servidor já sai com ele, então nada fica escondido sem JS. */
  to: number;
  /** Recalcula o valor no navegador (ex.: anos a partir de uma data), para não envelhecer entre builds. */
  getValue?: () => number;
  duration?: number;
  suffix?: string;
  className?: string;
};

/**
 * Contador leve inspirado no Count Up do React Bits, sem dependências.
 * Respeita prefers-reduced-motion: nesse caso mostra o número final direto.
 */
export function CountUp({
  to,
  getValue,
  duration = 1200,
  suffix = "",
  className,
}: CountUpProps) {
  const [value, setValue] = useState(to);

  useEffect(() => {
    const target = getValue ? getValue() : to;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setValue(target);
      return;
    }
    let frame = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.round(target * eased));
      if (progress < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [to, getValue, duration]);

  return (
    <span className={`tabular-nums ${className ?? ""}`}>
      {value}
      {suffix}
    </span>
  );
}
