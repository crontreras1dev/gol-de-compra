import { ArrowRight } from 'lucide-react';

export function FinalCta () {
  return (
    <section>
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Asegura tu copia por <span className="text-primary">$9.99 USD</span>.
        </h2>

        <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
          El precio sube a $29.99 USD cuando termine el contador. Sin avisos previos.
        </p>
        
        <a
          href="#oferta"
          className="cta-glow group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg font-bold text-base rounded-md hover:scale-[1.02] transition-transform"
        >
          ¡HAZ CLIC AQUÍ PARA ASEGURAR TU COPIA!
          <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
};