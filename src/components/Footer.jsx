import { Lock } from 'lucide-react';

export function Footer () {
  return (
    <footer className="py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <div className="mt-16 pt-8 border-t border-border text-xs text-zinc-600 space-y-3">
          <div className="flex items-center justify-center gap-2">
            <Lock className="w-3 h-3" />

            <span>Pago procesado de forma segura por Hotmart</span>
          </div>

          <div className="pt-3 max-w-2xl mx-auto leading-relaxed">
            © 2026 Gol de Compra. Todos los derechos reservados. Esta guía no sustituye consejo
            médico profesional. Consulta a tu médico antes de iniciar cualquier actividad física
            si tienes lesiones previas. Hotmart es el procesador de pagos seguro; no almacena ni
            comparte tus datos financieros con el vendedor.
          </div>

          <p className="text-stress-text">
            Made with 💙 by {''}            
            <a 
              href="https://freelanceweb.work" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-[#50ecff] hover:text-[#3eadbb] hover:underline"
            >
              FreelanceWeb;
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};