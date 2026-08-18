import suelas from "../assets/suelas.png";

const characteristics = [
  // 'Biomecánica traducida a decisiones de compra',
  'Comparativas visuales de suelas por superficie',
  'Prevensión de lesiones', 
  'Tipos de tacos',
  'Materiales de la capellada',
  'Tipos de campo de juego',
  'En donde gastar y en donde NO y cuanto'
];

export function Solution () {
  return (
    <section className="border-b border-border py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl mb-12">
          Te presentamos {' '}

          <span className="text-primary italic font-normal">
            "Gol de Compra"
          </span>
          
          : tu estrategia inteligente de calzado.
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
          <div>
            <img 
              src={suelas} 
              alt="Suelas de botas de futbol" 
              width="800" 
              height="500" 
            />
          </div>

          <div>
            <p className="text-lg text-zinc-300 leading-relaxed mb-6">
              Esta guía descompone la biomecánica, la geometría de los tacos y los materiales de la capellada en español simple.
            </p>

            <p className="text-zinc-400 leading-relaxed mb-8">
              Nada de marketing de marcas. Solo datos: qué suela usar dependiendo de campo en el que juegues,
              qué gamas valen lo que cuestan, y qué evitar aunque tu ídolo lo use.
            </p>

            <div className="space-y-4 border-t border-border pt-6">
              {characteristics.map((t, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="font-mono text-xs text-primary">0{i + 1}</span>
                  <span className="text-zinc-300 text-sm">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};