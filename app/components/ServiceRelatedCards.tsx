import Link from "next/link";
import ArrowForwardIcon from "@mui/icons-material/ArrowForwardRounded";
import type { ServiceData } from "../data/services";

interface ServiceRelatedCardsProps {
  services: ServiceData[];
}

const ServiceRelatedCards = ({ services }: ServiceRelatedCardsProps) => {
  if (services.length === 0) return null;

  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <h2 className="font-manrope text-2xl lg:text-4xl font-semibold text-gray-900 text-center mb-4">
        Serviços Relacionados
      </h2>
      <p className="text-gray-500 font-dmsans text-center max-w-2xl mx-auto mb-12">
        Conheça outros serviços que podem complementar sua solução
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        {services.map((service) => (
          <Link
            key={service.slug}
            href={`/servicos/${service.slug}`}
            className="group bg-white border border-gray-100 rounded-2xl p-6 hover:shadow-lg hover:border-[#211cda]/10 transition-all duration-300"
          >
            <div
              className={`w-full h-32 rounded-xl bg-gradient-to-br ${service.gradient} mb-5 flex items-center justify-center`}
            >
              <span className="text-white/80 font-manrope font-semibold text-sm">
                {service.shortTitle}
              </span>
            </div>
            <h3 className="font-manrope font-semibold text-base text-gray-900 mb-2 group-hover:text-[#211cda] transition-colors">
              {service.title}
            </h3>
            <p className="font-dmsans text-sm text-gray-500 leading-relaxed mb-4">
              {service.description}
            </p>
            <span className="inline-flex items-center gap-1 text-[#211cda] font-dmsans text-sm font-medium">
              Saiba mais
              <ArrowForwardIcon sx={{ fontSize: 16 }} />
            </span>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ServiceRelatedCards;
