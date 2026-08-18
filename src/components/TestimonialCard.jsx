// import {testimonials} from "../data/testimonials";

export function TestimonialCard ({ id, name, reta, quote, profilePicture, location }) {
  return (
    <div className="bg-card border border-border rounded-xl p-7 md:p-8 flex flex-col" key={testimonials[0].id}>
      <div className="flex items-center gap-1 mb-5">
        <p className="w-4 h-4 fill-primary text-primary">{testimonials[0]}</p>
      </div>
      <p className="text-lg text-zinc-200 leading-relaxed mb-6">
        "{testimonials[0].quote}"
      </p>
      <div className="mt-auto flex items-center gap-3 pt-5 border-t border-border">
        <div className="w-12 h-12 rounded-full border-2 border-dashed border-zinc-700 bg-zinc-900/50 flex items-center justify-center text-[9px] text-zinc-600 font-mono">
          80×80
        </div>
        <div>
          <div className="font-medium text-main-text">{testimonials[0].name}</div>
          <div className="text-xs text-zinc-500">{testimonials[0].location}</div>
        </div>
      </div>
    </div>
  );
};