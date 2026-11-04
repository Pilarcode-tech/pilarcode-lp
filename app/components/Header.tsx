"use client";

import ArrowIcon from "./ArrowIcon";
import MenuRounded from "@mui/icons-material/MenuRounded";
import CloseRounded from "@mui/icons-material/CloseRounded";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { InteractiveHoverButton } from "./ui/interactive-hover-button";
import { openOrcamento } from "../utils/orcamento";

const navigation = [
  { id: "inicio", label: "Início", href: "/#inicio" },
  { id: "servicos", label: "Serviços", href: "/#servicos" },
  { id: "projetos", label: "Projetos", href: "/#projetos" },
  { id: "sobre", label: "Sobre", href: "/#sobre" },
  { id: "blog", label: "Blog", href: "/blog" },
];

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [section, setSection] = useState("inicio");
  const active = pathname.startsWith("/cases")
    ? "projetos"
    : pathname.startsWith("/servicos")
      ? "servicos"
      : pathname.startsWith("/blog")
        ? "blog"
        : pathname === "/"
          ? section
          : "";

  useEffect(() => {
    if (pathname !== "/") return;
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.filter((entry) => entry.isIntersecting);
        if (visible.length) setSection(visible[0].target.id);
      },
      { rootMargin: "-100px 0px -55% 0px", threshold: 0 },
    );
    navigation.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });
    return () => observer.disconnect();
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        document.getElementById("navigation-toggle")?.focus();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
      <div className="mx-auto max-w-[1514px] px-5 md:px-8 lg:px-16">
        <nav
          aria-label="Navegação principal"
          className="flex h-20 items-center justify-between gap-5 lg:h-24"
        >
          <Link
            href="/"
            aria-label="Pilarcode — início"
            onClick={() => setMenuOpen(false)}
            className="flex shrink-0 items-center gap-2.5 rounded-lg focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#211cda]"
          >
            <Image
              alt=""
              src="/icon.png"
              width={50}
              height={37}
              className="h-8 w-auto lg:h-9"
            />
            <span
              className="flex flex-col"
              style={{ fontFamily: "OpenSauceOne, sans-serif" }}
            >
              <span className="text-[21px] font-bold leading-none tracking-tight text-gray-900 lg:text-[23px]">
                pilarcode
              </span>
              <span className="mt-1.5 text-[8px] font-semibold uppercase leading-none tracking-[0.18em] text-[#278deb]">
                tech
              </span>
            </span>
          </Link>
          <div className="hidden items-center gap-1 lg:flex">
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                aria-current={
                  active === item.id
                    ? pathname === "/"
                      ? "location"
                      : "page"
                    : undefined
                }
                className={`rounded-full px-4 py-2.5 font-dmsans text-sm transition-colors ${active === item.id ? "bg-[#211cda]/5 text-[#211cda]" : "text-gray-500 hover:bg-gray-50 hover:text-gray-900"}`}
              >
                {item.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-3">
            <InteractiveHoverButton
              onClick={() => openOrcamento("header-desktop")}
              className="hidden lg:inline-flex"
            >
              Vamos conversar
            </InteractiveHoverButton>
            <button
              onClick={() => openOrcamento("header-mobile")}
              className="hidden min-[360px]:inline-flex rounded-full bg-[#211cda] px-4 py-2.5 font-dmsans text-xs font-medium text-white hover:bg-[#060554] lg:hidden"
            >
              Orçamento
            </button>
            <button
              id="navigation-toggle"
              aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={menuOpen}
              aria-controls="mobile-navigation"
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-gray-800 hover:bg-gray-50 lg:hidden"
            >
              {menuOpen ? (
                <CloseRounded aria-hidden="true" fontSize="small" />
              ) : (
                <MenuRounded aria-hidden="true" fontSize="small" />
              )}
            </button>
          </div>
        </nav>
        {menuOpen && (
          <nav
            id="mobile-navigation"
            aria-label="Navegação mobile"
            className="border-t border-gray-100 pb-5 pt-3 lg:hidden"
          >
            {navigation.map((item) => (
              <Link
                key={item.id}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3.5 font-dmsans text-sm ${active === item.id ? "bg-[#211cda]/5 text-[#211cda]" : "text-gray-600 hover:bg-gray-50"}`}
              >
                {item.label}
                <ArrowIcon />
              </Link>
            ))}
          </nav>
        )}
      </div>
    </header>
  );
}
