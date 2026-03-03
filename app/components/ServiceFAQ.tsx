"use client";

import { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import type { ServiceFAQ as ServiceFAQType } from "../data/services";

interface ServiceFAQProps {
  faq: ServiceFAQType[];
  serviceName: string;
}

const ServiceFAQ = ({ faq, serviceName }: ServiceFAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="container mx-auto px-4 py-16 lg:py-24">
      <h2 className="font-manrope text-2xl lg:text-4xl font-semibold text-gray-900 text-center mb-4">
        Perguntas Frequentes
      </h2>
      <p className="text-gray-500 font-dmsans text-center max-w-2xl mx-auto mb-12">
        Tire suas dúvidas sobre {serviceName}
      </p>
      <div className="max-w-3xl mx-auto">
        {faq.map((item, index) => {
          const isOpen = openIndex === index;
          return (
            <div
              key={index}
              className="border-b border-gray-200 last:border-b-0"
            >
              <button
                onClick={() => setOpenIndex(isOpen ? null : index)}
                className="w-full py-5 flex items-center justify-between text-left cursor-pointer group"
                aria-expanded={isOpen}
              >
                <h3 className="font-manrope font-medium text-base lg:text-lg text-gray-900 pr-4 group-hover:text-[#211cda] transition-colors">
                  {item.question}
                </h3>
                <ExpandMoreIcon
                  sx={{ fontSize: 24, color: "#211cda" }}
                  className={`shrink-0 transition-transform duration-300 ${
                    isOpen ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-300 ${
                  isOpen ? "max-h-96 pb-5" : "max-h-0"
                }`}
              >
                <p className="font-dmsans text-sm text-gray-500 leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ServiceFAQ;
