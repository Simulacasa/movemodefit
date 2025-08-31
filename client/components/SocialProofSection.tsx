import React from "react";

const testimonials = [
  {
    quote:
      "Em poucas semanas me senti mais disposto e confiante. Os treinos são objetivos e eficientes.",
    name: "Diego, 34",
  },
  {
    quote:
      "A metodologia é clara e segura. Evoluí sem dores e com resultados consistentes.",
    name: "Marina, 29",
  },
  {
    quote:
      "Finalmente encontrei uma rotina que consigo manter. Qualidade acima de quantidade.",
    name: "Rafael, 41",
  },
];

const SocialProofSection: React.FC = () => {
  return (
    <section
      id="depoimentos"
      className="bg-black text-white py-20 border-t border-border/60"
    >
      <div className="container mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">
          Resultados reais, experiências de quem vive o movimento
        </h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="rounded-xl border border-border/60 bg-white/[0.02] p-6"
            >
              <blockquote className="text-white/90">“{t.quote}”</blockquote>
              <figcaption className="mt-4 text-sm text-white/60">
                {t.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;
