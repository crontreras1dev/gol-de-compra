import { User } from "lucide-react";

export function TestimonialCard () {
  return (
    <div className="bg-card border border-border rounded-xl p-7 md:p-8 flex flex-col">
      <div className="flex items-center gap-1 mb-5">
        <p className="w-4 h-4 fill-primary text-primary">⭐⭐⭐⭐⭐</p>
      </div>
      <p className="text-lg text-zinc-200 leading-relaxed mb-6">
        La mejor guía que me he comprado en mi vida! Vale cada centavo
      </p>
      <div className="mt-auto flex items-center gap-3 pt-5 border-t border-border">
        <div className="w-12 h-12 rounded-full border-2 border-dashed border-zinc-700 bg-zinc-900/50 flex items-center justify-center text-[9px] text-zinc-600 font-mono">
          <User />
        </div>
        <div>
          <div className="font-medium text-main-text">Cristian Contreras</div>
          <div className="text-xs text-zinc-500">Bogotá, Colombia</div>
        </div>
      </div>
    </div>
  );
};