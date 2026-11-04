import {
  Header,
  Hero,
  Services,
  AboutBanner,
  WhyChooseUs,
  ContactCta,
  Footer,
} from "./components";
import CaseStudies from "./components/CaseStudies";
import LatestArticles from "./components/LatestArticles";

export default function Home() {
  return (
    <div>
      <Header />
      <main className="overflow-hidden bg-white">
        <div>
          <div
            id="inicio"
            className="mx-auto max-w-[1514px] scroll-mt-24 px-6 md:px-10 lg:px-16"
          >
            <Hero />
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
            <CaseStudies />
            <LatestArticles />
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
