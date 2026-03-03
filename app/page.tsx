"use client";

import {
  Header,
  Hero,
  Services,
  AboutBanner,
  WhyChooseUs,
  ContactCta,
  Footer,
} from "./components";
import { useMobile } from "./hooks";

export default function Home() {
  const isMobile = useMobile();

  return (
    <div>
      {!isMobile && (
        <div className="font-manrope bg-[#278deb] text-white text-center pt-4 pb-12 text-sm font-jakarta -mb-6">
          Inovação ao seu alcance: conectamos você ao futuro
        </div>
      )}
      <Header />
      <main className="bg-white rounded-t-3xl -mt-[90px] relative z-10 overflow-hidden bg-no-repeat">
        <div className="bg-cover bg-center bg-no-repeat pt-[90px]">
          <div
            id="inicio"
            className="container mx-auto px-4 mb-5 md:mb-20 z-99 scroll-mt-[100px] relative"
          >
            <Hero />
            {/* Decorative hero background - like deep-fire's hero-bg.png */}
            <img
              alt=""
              aria-hidden="true"
              role="presentation"
              src="/hero-bg.svg"
              className="absolute right-0 top-[-100px] w-[550px] h-[550px] hidden lg:block pointer-events-none"
              style={{ zIndex: -1 }}
            />
          </div>
          <div id="servicos" className="scroll-mt-[100px]">
            <Services />
          </div>
          <div className="px-4 mb-5 md:mb-20 mt-6 md:mt-20">
            <div id="sobre" className="scroll-mt-[100px]">
              <AboutBanner />
            </div>
            <div className="mt-6 md:mt-20">
              <WhyChooseUs />
            </div>
            <div id="contato" className="scroll-mt-[100px]">
              <ContactCta />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
