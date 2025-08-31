import React from "react";
import CTAButton from "./CTAButton";

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-border/60 bg-black/60 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between py-4">
        <a href="#" className="flex items-center gap-2 group">
          <div className="h-8 w-8 rounded-md bg-primary/90 group-hover:bg-primary transition-colors" aria-hidden />
          <span className="text-lg font-bold tracking-tight text-white">Move Mode Fit</span>
        </a>
        <nav className="hidden md:flex items-center gap-6 text-sm text-white/80">
          <a href="#beneficios" className="hover:text-white transition-colors">Benefícios</a>
          <a href="#depoimentos" className="hover:text-white transition-colors">Prova Social</a>
        </nav>
        <CTAButton gaLabel="header_cta" asChild>
          <a href="#cta">Quero Começar Agora</a>
        </CTAButton>
      </div>
    </header>
  );
};

export default Header;
