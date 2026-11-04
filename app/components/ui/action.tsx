import type { ButtonHTMLAttributes, AnchorHTMLAttributes } from "react";
import ArrowIcon from "../ArrowIcon";

type Variant = "primary" | "light" | "outline" | "outline-light";
const variants: Record<Variant, string> = {
  primary: "bg-[#211cda] text-white hover:bg-[#060554] border-transparent",
  light: "bg-white text-[#211cda] hover:bg-[#eef6ff] border-transparent",
  outline:
    "border-gray-200 text-gray-800 hover:border-[#211cda] hover:text-[#211cda] bg-transparent",
  "outline-light":
    "border-white/30 text-white hover:border-white/60 hover:bg-white/10 bg-transparent",
};
export function actionClassName(variant: Variant = "primary", className = "") {
  return `pilar-action ${variants[variant]} ${className}`;
}
export function ActionButton({
  variant = "primary",
  className = "",
  children,
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return (
    <button
      type="button"
      className={actionClassName(variant, className)}
      {...props}
    >
      {children}
      <ArrowIcon />
    </button>
  );
}
export function ActionLink({
  variant = "outline",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return (
    <a className={actionClassName(variant, className)} {...props}>
      {children}
    </a>
  );
}
