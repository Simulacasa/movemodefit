import React from "react";
import CTAButton from "./CTAButton";

const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-black text-white">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -inset-[30%] bg-[radial-gradient(ellipse_at_center,rgba(16,185,129,0.12),transparent_60%)]" />
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />
      </div>
      <div className="container mx-auto pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
            Movimento que transforma: corpo forte, mente em equilíbrio.
          </h1>
          <p className="mt-6 text-lg md:text-xl text-white/80">
            Treinos inteligentes, orientação precisa e consistência. Sofisticação e bem-estar para sua rotina.
          </p>
          <div className="mt-10 flex items-center gap-4">
            <CTAButton gaLabel="hero_cta" className="px-7 py-4 text-base" asChild>
              <a href="#cta">Quero Começar Agora</a>
            </CTAButton>
            <a href="#beneficios" className="text-white/70 hover:text-white transition-colors">Ver benefícios</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
