import ArrowOutwardRounded from "@mui/icons-material/ArrowOutwardRounded";
import ArrowForwardRounded from "@mui/icons-material/ArrowForwardRounded";
import ArrowBackRounded from "@mui/icons-material/ArrowBackRounded";

/** Decorative library SVG: consistent on iOS, with no emoji/font fallback. */
export default function ArrowIcon({
  direction = "outward",
  size = 16,
  className,
}: {
  direction?: "outward" | "right" | "left";
  size?: number;
  className?: string;
}) {
  const Icon =
    direction === "right"
      ? ArrowForwardRounded
      : direction === "left"
        ? ArrowBackRounded
        : ArrowOutwardRounded;
  return (
    <Icon
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ fontSize: size, flexShrink: 0, verticalAlign: "middle" }}
    />
  );
}
