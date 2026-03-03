import type { ProcessStep } from "../data/services";

interface ServiceProcessStepsProps {
  steps: ProcessStep[];
}

const ServiceProcessSteps = ({ steps }: ServiceProcessStepsProps) => {
  return (
    <section className="bg-[#f8f9fc] py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-manrope text-2xl lg:text-4xl font-semibold text-gray-900 text-center mb-4">
          Como trabalhamos
        </h2>
        <p className="text-gray-500 font-dmsans text-center max-w-2xl mx-auto mb-12">
          Nosso processo garante qualidade e transparência em cada etapa
        </p>
        <div className="max-w-3xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="flex gap-5 lg:gap-8 mb-8 last:mb-0">
              <div className="flex flex-col items-center">
                <div className="w-10 h-10 rounded-full bg-[#211cda] text-white flex items-center justify-center font-manrope font-bold text-sm shrink-0">
                  {index + 1}
                </div>
                {index < steps.length - 1 && (
                  <div className="w-px h-full bg-[#211cda]/20 mt-2" />
                )}
              </div>
              <div className="pb-8 last:pb-0">
                <h3 className="font-manrope font-semibold text-lg text-gray-900 mb-1.5">
                  {step.title}
                </h3>
                <p className="font-dmsans text-sm text-gray-500 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceProcessSteps;
