import GuaranteeImg from '../assets/garantia.png';

export function Guarantee () {
  return (
    <section className="bg-primary flex flex-col items-center justify-center p-10 gap-10 my-16 md:my-24 max-w-3xl mx-auto px-4">
      <div className="flex flex-col items-center justify-center gap-5 md:w-1/2">
        <img src={GuaranteeImg} alt="Garantía" width={300} />

        <p className="text-center text-bg text-lg font-bold">Si no estás completamente satisfecho con tu compra, devuélvelo en un plazo de 7 días y te devolveremos tu dinero</p>
      </div>
    </section>
  );
};