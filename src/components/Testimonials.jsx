import { TestimonialCard } from "./TestimonialCard";

export function Testimonials ({ testimonials }) {
  return (
    <section className="py-16 md:py-24 flex flex-col items-center">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl text-center w-full text-stress-text">Lo que dicen jugadores:</h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {
          testimonials.map(testimonial => (
            <TestimonialCard 
              key={ testimonial.id }
              name={ testimonial.name }
              rate={ testimonial.rate }
              quote={ testimonial.quote }
              location={ testimonial.location }
            />

          ))
        }
      </div>
    </section>
  );
};