"use client";

import React, { useState, useEffect, useRef } from "react";
import ArrowForward from "@mui/icons-material/ArrowForwardRounded";
import Image from "next/image";
import { openWhatsAppChat } from "../utils/whatsapp";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState<string>("inicio");
  const scrollingProgrammaticallyRef = useRef(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const sectionIds = [
    "inicio",
    "servicos",
    "sobre",
    "contato",
  ];

  const sectionLabels: Record<string, string> = {
    inicio: "Início",
    servicos: "Serviços",
    sobre: "Sobre",
    contato: "Contato",
  };

  const getHeaderOffset = () => {
    const headerEl = document.querySelector("header");
    const h = headerEl
      ? (headerEl as HTMLElement).getBoundingClientRect().height
      : 90;
    return h + 20;
  };

  useEffect(() => {
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[];
    if (!sections.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        if (scrollingProgrammaticallyRef.current) return;
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) =>
            b.intersectionRatio === a.intersectionRatio
              ? a.target.getBoundingClientRect().top -
                b.target.getBoundingClientRect().top
              : b.intersectionRatio - a.intersectionRatio
          );
        if (visible.length) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        threshold: [0.25, 0.5, 0.75],
        rootMargin: "-10% 0px -55% 0px",
      }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleManualScroll = () => {
      if (scrollingProgrammaticallyRef.current) return;
      const scrollPos = window.scrollY + getHeaderOffset() + 4;
      let current = sectionIds[0];
      for (const id of sectionIds) {
        const el = document.getElementById(id);
        if (!el) continue;
        if (el.offsetTop <= scrollPos) current = id;
      }
      if (current !== activeSection) setActiveSection(current);
    };
    window.addEventListener("scroll", handleManualScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleManualScroll);
  }, [activeSection]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      if (sectionIds.includes(id)) {
        requestAnimationFrame(() => {
          const el = document.getElementById(id);
          if (el) {
            const y =
              el.getBoundingClientRect().top +
              window.scrollY -
              getHeaderOffset();
            window.scrollTo({ top: y });
            setActiveSection(id);
          }
        });
      }
    }
  }, []);

  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string
  ) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (!el) return;
    const elementPosition = el.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - getHeaderOffset();
    scrollingProgrammaticallyRef.current = true;
    window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    setActiveSection(id);
    setTimeout(() => {
      scrollingProgrammaticallyRef.current = false;
    }, 600);
    history.replaceState(null, "", `#${id}`);
    closeMobileMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`sticky top-0 z-50 relative transition-all duration-300 bg-gradient-to-r lg:bg-none from-[#278deb] via-[#211cda] to-[#060554] overflow-hidden ${
        isScrolled ? "lg:bg-white/70 lg:backdrop-blur-md" : "lg:bg-transparent"
      }`}
    >
      <div className="lg:hidden absolute top-0 right-0 w-96 h-32 bg-gradient-to-l from-white/10 to-transparent transform -rotate-12 translate-x-24 -translate-y-8"></div>
      <div className="lg:hidden absolute top-0 right-20 w-80 h-28 bg-gradient-to-br from-[#278deb]/20 to-transparent transform rotate-6 translate-x-12 translate-y-2"></div>

      <div className="mx-auto xl:container w-full px-4 sm:px-0 relative z-10">
        <nav className="flex items-center justify-between py-4 gap-4 lg:gap-8">
          <div className="flex items-center space-x-2 sm:space-x-3">
            <Image alt="Pilarcode Logo" src="/logo.png" width={160} height={40} className="h-8 lg:h-10 w-auto" />
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`transition-colors duration-200 text-sm font-medium tracking-wide ${
                  activeSection === id
                    ? "text-gray-900"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {sectionLabels[id]}
              </a>
            ))}
          </div>

          <div className="hidden lg:flex items-center space-x-4">
            <button
              onClick={() => openWhatsAppChat()}
              className="bg-[#211cda] hover:bg-[#060554] text-white px-4 lg:px-3 py-2.5 rounded-xl font-semibold text-sm transition-all duration-200 shadow-lg flex items-center space-x-2 group cursor-pointer"
            >
              <span className="font-normal text-sm">Fale Conosco</span>
              <div className="bg-white/20 p-1.5 rounded-lg flex">
                <ArrowForward
                  fontSize="small"
                  sx={{
                    width: "16px",
                    height: "16px",
                  }}
                />
              </div>
            </button>
          </div>

          <div className="flex lg:hidden items-center space-x-2">
            <button
              onClick={() => openWhatsAppChat()}
              className="bg-gradient-to-r from-[#211cda] to-[#060554] hover:from-[#060554] hover:to-[#211cda] text-white px-3 py-2 rounded-lg font-semibold text-xs transition-all duration-200 shadow-lg hover:shadow-xl"
            >
              Contato
            </button>

            <button
              onClick={toggleMobileMenu}
              className="text-white lg:text-gray-600 p-2 hover:bg-white/10 lg:hover:bg-gray-100 rounded-lg transition-colors duration-200 relative z-50"
              aria-label="Toggle mobile menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className={`absolute block h-0.5 w-6 bg-white lg:bg-gray-600 transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "rotate-45 translate-y-2.5"
                      : "translate-y-1"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white lg:bg-gray-600 transform transition duration-300 ease-in-out translate-y-2.5 ${
                    isMobileMenuOpen ? "opacity-0" : "opacity-100"
                  }`}
                />
                <span
                  className={`absolute block h-0.5 w-6 bg-white lg:bg-gray-600 transform transition duration-300 ease-in-out ${
                    isMobileMenuOpen
                      ? "-rotate-45 translate-y-2.5"
                      : "translate-y-4"
                  }`}
                />
              </div>
            </button>
          </div>
        </nav>

        <div
          className={`lg:hidden transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? "max-h-96 opacity-100 pb-6"
              : "max-h-0 opacity-0 overflow-hidden"
          }`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-sm rounded-xl">
            {sectionIds.map((id) => (
              <a
                key={id}
                href={`#${id}`}
                onClick={(e) => handleNavClick(e, id)}
                className={`block px-4 py-3 rounded-lg transition-colors duration-200 text-sm font-medium ${
                  activeSection === id
                    ? "bg-white/15 text-white"
                    : "text-white hover:bg-white/10"
                }`}
              >
                {sectionLabels[id]}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
