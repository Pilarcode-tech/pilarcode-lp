"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const WhyChooseUs = () => {
  return (
    <div className="max-w-[1514px] mx-auto bg-[#f8f9fc] rounded-3xl overflow-hidden border border-gray-100 relative">
      {/* Subtle decorative gradient orbs */}
      <div className="absolute top-[-80px] left-[-60px] w-[300px] h-[300px] rounded-full bg-[#278deb] opacity-[0.04] blur-[100px] pointer-events-none" />
      <div className="absolute bottom-[-60px] right-[-40px] w-[250px] h-[250px] rounded-full bg-[#211cda] opacity-[0.03] blur-[80px] pointer-events-none" />

      <div className="flex flex-col lg:flex-row gap-6 lg:gap-16 p-10 md:p-16 relative z-10">
        {/* Left column */}
        <div className="lg:w-[40%] flex flex-col gap-6">
          <div>
            <p className="font-extrabold text-[#211cda] text-xs tracking-widest">DIFERENCIAIS</p>
            <p className="text-3xl lg:text-4xl text-gray-800 font-medium mt-3 leading-tight">
              Por que escolher a{" "}
              <span className="text-[#278deb] font-medium">Pilarcode?</span>
            </p>
            <p className="font-manrope text-gray-500 text-sm mt-4 leading-relaxed">
              Combinamos expertise técnica com visão estratégica para entregar
              soluções que realmente fazem a diferença no seu negócio.
            </p>
          </div>
          <p className="font-manrope text-gray-800 text-base font-medium">
            Sua parceira ideal em transformação digital.
          </p>
        </div>

        {/* Right column - checklist */}
        <div className="lg:w-[60%] flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{ color: "#211cda", fontSize: 22, marginTop: "2px", flexShrink: 0 }}
              />
              <div>
                <p className="text-gray-800 font-medium text-sm">
                  Equipe altamente qualificada
                </p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Profissionais especializados em diversas tecnologias, prontos para
                  resolver os desafios mais complexos.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{ color: "#211cda", fontSize: 22, marginTop: "2px", flexShrink: 0 }}
              />
              <div>
                <p className="text-gray-800 font-medium text-sm">
                  Soluções personalizadas
                </p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Cada negócio é único. Desenvolvemos sob medida para suas
                  necessidades específicas.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{ color: "#211cda", fontSize: 22, marginTop: "2px", flexShrink: 0 }}
              />
              <div>
                <p className="text-gray-800 font-medium text-sm">
                  Tecnologia de ponta
                </p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Utilizamos as ferramentas e frameworks mais modernos do mercado.
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <CheckCircleOutlineIcon
                sx={{ color: "#211cda", fontSize: 22, marginTop: "2px", flexShrink: 0 }}
              />
              <div>
                <p className="text-gray-800 font-medium text-sm">
                  Suporte contínuo
                </p>
                <p className="text-gray-500 text-xs mt-1 leading-relaxed">
                  Acompanhamento pós-entrega para garantir que tudo funcione perfeitamente.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChooseUs;
