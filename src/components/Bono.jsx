import BonoDeRegalo from "../assets/bono.png";
import { Lock } from "lucide-react";

export function Bono () {
  return (
    <section className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-around items-center">
      <div className="w-full flex justify-center">
        <img src={ BonoDeRegalo } alt="Bono de Regalo" width={400} height={400} />
      </div>

      <div className="w-full flex flex-col gap-4 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary italic">¡BONO DE REGALO!</h2>

        <p>Adquiere hoy "Gol de compra": el manual para saber cómo invertir tu dinero de la mejor manera y llevate de regalo una pequeña guía de calentamiento en 5 minutos para prevención de lesiones</p>

        {/* <p>Este bono de regalo es para ti, si te compras el gol de compra, te regalamos este bono de regalo.</p>

        <p>Este bono de regalo es para ti, si te compras el gol de compra, te regalamos este bono de regalo.</p> */}

        <div className="mt-10">
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://pay.hotmart.com/Q107066648L" 
            className="cta-glow group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg font-bold text-base rounded-md hover:scale-[1.02] transition-transform text-center"
          >
            ¡QUIERO MI GUÍA + BONO DE REGALO!
          </a>

          <div className="mt-4 text-xs text-stress-text flex justify-center items-center gap-2">
            <Lock className="w-3.5 h-3.5" />

            <span>Pago 100% Seguro • Acceso Inmediato</span>
          </div>
        </div>
      </div>
    </section>
  );
};