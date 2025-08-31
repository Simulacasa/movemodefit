import React from "react";
import CTAButton from "./CTAButton";

const FinalCtaSection: React.FC = () => {
  return (
    <section id="cta" className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500 via-emerald-600 to-emerald-700" />
      <div className="relative container mx-auto py-16 text-white">
        <div className="max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">Pronto para começar?</h2>
          <p className="mt-3 text-white/90 text-lg">Dê o primeiro passo rumo a uma rotina equilibrada, com treinos que respeitam seu corpo e aceleram resultados.</p>
          <div className="mt-8">
            <CTAButton gaLabel="final_cta" className="bg-white text-black hover:bg-white/90">
              Quero Começar Agora
            </CTAButton>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCtaSection;
