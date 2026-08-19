import { FaqItem } from "./FaqItem";

export function Faqs ({ faqs }) {
  return (
    <section className="py-16 md:py-24 max-w-3xl mx-auto px-4">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-10 text-stress-text">Dudas frecuentes</h2>

      <div className="flex flex-col gap-4">
        {
          faqs.map((faq, index) => (
            <FaqItem 
              key={ index } 
              question={ faq.question } 
              answer={ faq.answer } 
            />
          ))
        }
      </div>
    </section>
  );
};