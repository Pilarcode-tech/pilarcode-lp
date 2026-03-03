import Link from "next/link";
import { Header, Footer } from "./components";

export default function NotFound() {
  return (
    <>
      <Header />
      <main className="bg-white min-h-[60vh] flex items-center justify-center px-4">
        <div className="text-center max-w-lg">
          <p className="text-[#211cda] font-manrope font-bold text-sm tracking-widest mb-4">
            ERRO 404
          </p>
          <h1 className="font-manrope text-4xl lg:text-5xl font-semibold text-gray-900 mb-4">
            Página não encontrada
          </h1>
          <p className="font-dmsans text-gray-500 mb-8">
            A página que você está procurando não existe ou foi movida.
            Que tal voltar para o início?
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/"
              className="bg-[#211cda] hover:bg-[#060554] text-white px-6 py-3 rounded-full font-manrope font-semibold text-sm transition-colors"
            >
              Voltar ao Início
            </Link>
            <Link
              href="/#servicos"
              className="border border-gray-300 hover:border-[#211cda] text-gray-700 hover:text-[#211cda] px-6 py-3 rounded-full font-manrope font-semibold text-sm transition-colors"
            >
              Ver Serviços
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
