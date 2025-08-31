import React from "react";
import { Facebook, Instagram, Youtube } from "lucide-react";

const Footer: React.FC = () => {
  return (
    <footer className="border-t border-border/60 bg-black">
      <div className="container mx-auto py-10 flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div className="text-white/70 text-sm">
          © {new Date().getFullYear()} Move Mode Fit. Todos os direitos
          reservados.
        </div>
        <div className="flex items-center gap-6 text-white/80">
          <a
            href="#"
            aria-label="Instagram"
            className="hover:text-white transition-colors"
          >
            <Instagram className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="YouTube"
            className="hover:text-white transition-colors"
          >
            <Youtube className="h-5 w-5" />
          </a>
          <a
            href="#"
            aria-label="Facebook"
            className="hover:text-white transition-colors"
          >
            <Facebook className="h-5 w-5" />
          </a>
        </div>
        <nav className="flex items-center gap-6 text-sm">
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            Privacidade
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            Termos
          </a>
          <a
            href="#"
            className="text-white/70 hover:text-white transition-colors"
          >
            Contato
          </a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;
