import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function FaqItem ({ question, answer }) {
  const [open, setOpen] = useState(false);

  const isOpen = () => setOpen(open => !open);

  return (
    <div className="border-b border-border">
      <button 
        onClick={ isOpen } 
        className="w-full flex px-4 items-center justify-between py-5 text-left gap-4 cursor-pointer hover:bg-zinc-900 rounded-lg transition-colors"
      >
        <p className="text-base md:text-lg text-stress-text">{ question }</p>

        <ChevronDown className={ `w-5 h-5 shrink-0 text-stress-text transition-transform duration-300 ${ open ? 'rotate-180' : ''}` } />
      </button>

      <div className={ `overflow-hidden transition-all duration-300 ${ open ? 'max-h96 pb-6' : 'max-h-0' }` }>
        <p className="leading-relaxed">{ answer }</p>
      </div>
    </div>
  );
};