import GuaranteeImg from '../assets/garantia.png';

export function Guarantee () {
  return (
    <section className="bg-primary flex flex-col items-center justify-center p-10 gap-10 my-16 md:my-24 max-w-3xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-5 md:w-1/2">
        <img src={GuaranteeImg} alt="Garantía" width={300} />

        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center text-bg font-bold">
            Garantía Incondicional de 7 Días
        </h2>

        <p className="text-lg text-center text-bg font-bold">
          Prueba la guía, aplica los consejos y si sientes que no protegió tus piernas ni te ayudó
          a ahorrar dinero, te devolvemos el 100% de tu inversión sin preguntas.
        </p>
      </div>
    </section>
  );
};