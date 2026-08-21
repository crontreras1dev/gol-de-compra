import { ThumbsUp, Lock } from "lucide-react";
import Shoe from "../assets/shoe.png";
import { benefits } from "../data/benefits";

export function Benefits () {
  return (
    <section className="bg-bg py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div className="flex flex-col justify-start gap-20">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-stress-text">Lo que aprenderás:</h2>
        
          <ul className="flex flex-col gap-2">
            {
              benefits.map(benefit => (
                <li key={ benefit } className="flex items-center gap-2 text-lg grid grid-cols-[auto_1fr]">
                  <ThumbsUp className="text-primary w-5 h-5" />

                  { benefit }
                </li>
              ))
            }
          </ul>
          
          <div className="mt-10">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://pay.hotmart.com/Q107066648L" 
              className="cta-glow group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg font-bold text-base rounded-md hover:scale-[1.02] transition-transform text-center"
            >
              ¡QUIERO MI GUÍA + BONO DE REGALO!
            </a>

            <div className="mt-4 text-xs text-stress-text flex items-center gap-2">
              <Lock className="w-3.5 h-3.5" />

              <span>Pago 100% Seguro • Acceso Inmediato</span>
            </div>

          </div>
        </div>

        <div className="overflow-hidden rounded-lg w-full lg:h-[600px]" >
          <img src={ Shoe } alt="Zapato" className="object-cover w-full h-full" />
        </div>
      </div>
    </section>
  );
};