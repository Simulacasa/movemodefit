import React from "react";
import { Activity, Heart, Clock, ShieldCheck } from "lucide-react";

const items = [
  {
    icon: Activity,
    title: "Treino inteligente",
    desc: "Programações eficientes, focadas em resultado e segurança.",
  },
  {
    icon: Heart,
    title: "Bem-estar completo",
    desc: "Força, mobilidade e vitalidade para o dia a dia.",
  },
  {
    icon: Clock,
    title: "Flexível e prático",
    desc: "Se adapta à sua rotina com constância e propósito.",
  },
  {
    icon: ShieldCheck,
    title: "Acompanhamento seguro",
    desc: "Metodologia confiável para evoluir com qualidade.",
  },
];

const BenefitsSection: React.FC = () => {
  return (
    <section
      id="beneficios"
      className="bg-black text-white py-20 border-t border-border/60"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Benefícios que elevam sua performance
        </h2>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {items.map(({ icon: Icon, title, desc }) => (
            <div
              key={title}
              className="group rounded-xl border border-border/60 bg-gradient-to-b from-white/[0.02] to-transparent p-6"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-500/15 ring-1 ring-emerald-500/30">
                <Icon className="h-6 w-6 text-emerald-400" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{title}</h3>
              <p className="mt-2 text-white/70 text-sm leading-relaxed">
                {desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
