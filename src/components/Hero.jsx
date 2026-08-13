import { Lock } from "lucide-react";
import heroMockup from "../assets/hero-mockup.png";
import { useRotatingtext } from "../hooks/useRotatingText";

export function Hero () {
  const surfaceOptions = [
    "Sintética",
    "Cesped",
    "Tierra",
    "Hierba",
    "Asfalto",
    "Cemento",
  ];
  
  const currentSurface = useRotatingtext(surfaceOptions, 2500);

  return (
    <section className="flex flex-col md:flex-row gap-10 justify-center items-center">
      <div className="md:w-1/2">
        <h1 className="text-4xl md:text-5xl font-bold text-stress-text">
          Juega sin dolor de rodilla ni lesiones:

          <br />

          <p className="text-main-text font-normal">
            Elige las botas correctas para

            <span className="text-primary font-bold"> { currentSurface }</span>
          </p>
        </h1>

        <p className="mt-7 text-lg max-w-xl">
          La guía práctica de biomecánica y suelas para futbolistas aficionados. Evita rupturas de ligamentos, cuida tus articulaciones y no tires tu dinero
        </p>

        <div className="mt-10">
          <a 
            href="" 
            className="cta-glow group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg font-bold text-base rounded-md hover:scale-[1.02] transition-transform"
          >
            ¡QUIERO MI GUÍA + BONO DE REGALO!
          </a>

          <div className="mt-4 text-xs text-stress-text flex items-center gap-2">
            <Lock className="w-3.5 h-3.5" />

            <span>Pago 100% Seguro • Acceso Inmediato</span>
          </div>

        </div>
      </div>

      <div className="md:w-1/2">
        <img 
          src={heroMockup} 
          alt="Hero Mockup"
          width={600} 
          height={600} 
        />
      </div>
    </section>
  );
};