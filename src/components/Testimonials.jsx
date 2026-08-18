import { TestimonialCard } from "./TestimonialCard";

export function Testimonials () {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold max-w-3xl">Lo que dicen jugadores:</h2>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
        <TestimonialCard />
      </div>
    </section>
  );
};