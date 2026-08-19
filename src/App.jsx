import { useState, useEffect } from 'react'
import { Hero } from "./components/Hero";
import { Solution } from "./components/Solution";
import { TestimonialCard } from "./components/TestimonialCard";
import { Layout } from "./layouts/Layout";
import { Testimonials } from "./components/Testimonials";
import { testimonials } from "./data/testimonials";
import { faqs } from './data/faqs';

// src/App.jsx
// import { useState, useEffect } from 'react'
import {
  Zap, Lock, ShieldCheck, Star, ChevronDown, Gift,
  CheckCircle2, AlertTriangle, Footprints, FlaskConical,
  DollarSign, ShieldAlert, ArrowRight, Quote, Timer,
  BookOpen
} from 'lucide-react'
import { Faqs } from './components/Faqs';

/* ─────────────────────────────────────────────
   Countdown — empiece en 14:59 como pide el brief
───────────────────────────────────────────── */
// function CountdownTimer({ minutes = 14, seconds = 59 }) {
//   const [total, setTotal] = useState(minutes * 60 + seconds)
//   useEffect(() => {
//     const id = setInterval(() => setTotal(s => (s > 0 ? s - 1 : 0)), 1000)
//     return () => clearInterval(id)
//   }, [])
//   const h = String(Math.floor(total / 3600)).padStart(2, '0')
//   const m = String(Math.floor((total % 3600) / 60)).padStart(2, '0')
//   const s = String(total % 60).padStart(2, '0')
//   return (
//     <span className="inline-flex items-center gap-1 font-mono tabular-nums">
//       {[h, m, s].map((u, i) => (
//         <span key={i} className="flex items-center gap-1">
//           <span className="text-xl md:text-2xl font-bold">{u}</span>
//           {i < 2 && <span className="text-primary text-xl md:text-2xl font-bold">:</span>}
//         </span>
//       ))}
//     </span>
//   )
// }

/* ─────────────────────────────────────────────
   Placeholder dashed — política estricta de imágenes
───────────────────────────────────────────── */
function Placeholder({ w, h, label, className = '' }) {
  return (
    <div
      className={`border-2 border-dashed border-zinc-700 bg-zinc-900/40 rounded-xl flex flex-col items-center justify-center p-6 text-zinc-500 ${className}`}
      style={{ aspectRatio: `${w} / ${h}` }}
    >
      <div className="text-[10px] uppercase tracking-widest text-zinc-600 mb-2 font-mono">
        {w} × {h}px
      </div>
      <div className="text-sm text-center leading-snug max-w-[80%]">{label}</div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   FAQ Accordion item
───────────────────────────────────────────── */
function FAQItem({ q, a, defaultOpen = false }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className="border-b border-border">
      <button
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between py-5 text-left gap-4"
      >
        <span className="text-base md:text-lg font-medium text-main-text">{q}</span>
        <ChevronDown
          className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
        />
      </button>
      <div className={`overflow-hidden transition-all duration-200 ${open ? 'max-h-96 pb-6' : 'max-h-0'}`}>
        <p className="text-zinc-400 leading-relaxed">{a}</p>
      </div>
    </div>
  )
}

/* ─────────────────────────────────────────────
   App
───────────────────────────────────────────── */
export default function App() {
  // const [showSticky, setShowSticky] = useState(false)

  // useEffect(() => {
  //   const handler = () => {
  //     const y = window.scrollY
  //     const max = document.body.scrollHeight - window.innerHeight - 800
  //     setShowSticky(y > 900 && y < max)
  //   }
  //   window.addEventListener('scroll', handler, { passive: true })
  //   handler()
  //   return () => window.removeEventListener('scroll', handler)
  // }, [])

  return (
    <>
    <Layout>
      <Hero />
      <Solution />
      <Testimonials testimonials={ testimonials } />
      <Faqs faqs={ faqs } />
    </Layout>

    {/* <div className="min-h-screen bg-bg text-main-text font-sans antialiased"> */}

      {/* ── Top urgency bar ─────────────────────── */}
      {/* <div className="sticky top-0 z-40 bg-zinc-950 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-2.5 flex items-center justify-center gap-2 text-xs md:text-sm">
          <Zap className="w-3.5 h-3.5 text-primary shrink-0" />
          <span className="font-medium">OFERTA DE LANZAMIENTO —</span>
          <span className="text-primary font-semibold">66% DE DESCUENTO SOLO HOY</span>
        </div>
      </div> */}


      {/* ── PROBLEM ─────────────────────────────── */}
      {/* <section className="border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-zinc-500">02 / El diagnóstico</span>
            <span className="h-px w-12 bg-border"></span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            ¿Terminas los partidos con dolor articular, ampollas o miedo a lesionarte?
          </h2>

          <div className="mt-12 grid grid-cols-1 lg:grid-cols-12 gap-5"> */}
            {/* Featured */}
            {/* <div className="lg:col-span-7 border-l-2 border-amber-500/70 bg-card rounded-r-xl p-7 md:p-9">
              <div className="flex items-center gap-2 mb-4">
                <AlertTriangle className="w-4 h-4 text-amber-500" />
                <span className="text-xs font-mono uppercase tracking-wider text-amber-500">
                  Caso 01 — el más grave
                </span>
              </div>
              <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">El peligro del Cleat Lock</h3>
              <p className="text-zinc-300 leading-relaxed">
                Usar taco largo (FG) en césped sintético traba tu rodilla y causa el{' '}
                <span className="text-amber-500 font-semibold">70% de las rupturas de LCA</span>{' '}
                en fútbol amateur. El taco no cede, la rodilla sí.
              </p>
            </div> */}

            {/* Two smaller */}
            {/* <div className="lg:col-span-5 flex flex-col gap-5">
              <div className="border-l-2 border-zinc-600 bg-card rounded-r-xl p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <DollarSign className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Caso 02</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Dinero tirado a la basura</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  Pagar $200+ USD por la gama "Elite" no te hace jugar mejor si la capellada no ajusta a tu tipo de pie.
                </p>
              </div>

              <div className="border-l-2 border-zinc-600 bg-card rounded-r-xl p-6 flex-1">
                <div className="flex items-center gap-2 mb-3">
                  <ShieldAlert className="w-4 h-4 text-zinc-400" />
                  <span className="text-xs font-mono uppercase tracking-wider text-zinc-500">Caso 03</span>
                </div>
                <h3 className="font-display text-lg font-bold mb-2">Sin fisioterapeuta en la banca</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">
                  En la liga del fin de semana no hay cuerpo médico cuidándote. Tu única defensa es tu calzado.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── BENEFITS ────────────────────────────── */}
      {/* <section className="border-b border-border py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center gap-3 mb-6">
            <span className="font-mono text-xs text-zinc-500">04 / Lo que aprendes</span>
            <span className="h-px w-12 bg-border"></span>
          </div>

          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-3xl">
            Lo que aprenderás para dominar la cancha sin riesgos.
          </h2>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-5"> */}
            {/* Featured card */}
            {/* <div className="md:row-span-2 bg-card border border-border rounded-xl p-7 md:p-8 flex flex-col">
              <Footprints className="w-8 h-8 text-primary mb-5" strokeWidth={1.5} />
              <h3 className="font-display text-xl md:text-2xl font-bold mb-3">Biomecánica de Suelas</h3>
              <div className="font-mono text-xs text-zinc-500 mb-4">FG · SG · AG · TF · IN</div>
              <p className="text-zinc-300 leading-relaxed mb-auto">
                Descifra la suela exacta para sintético 3G/4G, tierra o sala. Cada superficie tiene
                un patrón de taco que impide que tu pie se trabe o resbale.
              </p>
              <div className="mt-6 pt-6 border-t border-border">
                <div className="text-xs text-zinc-500">Incluye tabla comparativa</div>
                <div className="text-sm text-zinc-300 mt-1">
                  5 suelas × 5 superficies = 25 combinaciones resueltas
                </div>
              </div>
            </div>

            <div className="bg-card border border-border rounded-xl p-7">
              <FlaskConical className="w-7 h-7 text-secondary mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold mb-2">Cuero vs. Sintético</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Conoce la retención de peso, ajuste y absorción de agua de cada capellada antes de decidir.
              </p>
            </div>

            <div className="bg-card border border-border rounded-xl p-7">
              <DollarSign className="w-7 h-7 text-primary mb-4" strokeWidth={1.5} />
              <h3 className="font-display text-lg font-bold mb-2">Gasto Inteligente por Gamas</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Descubre por qué la gama intermedia ($80–$160 USD) es el punto dulce perfecto.
              </p>
            </div>
          </div> */}

          {/* Full width card */}
          {/* <div className="mt-5 bg-card border border-border rounded-xl p-7 md:p-8 flex flex-col md:flex-row md:items-center gap-6">
            <ShieldCheck className="w-8 h-8 text-secondary shrink-0" strokeWidth={1.5} />
            <div className="flex-1">
              <h3 className="font-display text-lg font-bold mb-2">Reglas de Oro por Superficie</h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Elecciones obligatorias y prohibiciones absolutas para evitar lesiones. Lo que se
                puede y lo que nunca se debe hacer, en una sola hoja.
              </p>
            </div>
            <div className="font-mono text-xs text-zinc-500 border-l border-border pl-6 hidden md:block leading-relaxed">
              1 página<br/>imprimible
            </div>
          </div>
        </div>
      </section> */}

      {/* ── OFFER ───────────────────────────────── */}
      {/* <section id="oferta" className="border-b border-border py-16 md:py-24 scroll-mt-12">
        <div className="max-w-4xl mx-auto px-4">
          <div className="border-2 border-primary rounded-2xl overflow-hidden"> */}

            {/* Countdown strip */}
            {/* <div className="bg-primary text-bg px-6 py-4 flex items-center justify-between flex-wrap gap-3">
              <div className="flex items-center gap-2">
                <Timer className="w-5 h-5" />
                <span className="font-bold text-sm md:text-base">La oferta expira en:</span>
              </div>
              <div className="font-bold text-bg">
                <CountdownTimer />
              </div>
            </div>

            <div className="p-7 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-zinc-500">06 / La oferta</span>
                <span className="h-px w-12 bg-border"></span>
                <span className="text-xs text-primary font-semibold">LANZAMIENTO</span>
              </div>

              <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-8">
                Todo lo que recibes hoy:
              </h2>

              <div className="space-y-4 mb-10">
                <div className="flex items-start gap-4 border border-border rounded-xl p-5 bg-card">
                  <BookOpen className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="font-bold text-main-text mb-1">Ebook "Gol de Compra"</div>
                    <div className="text-sm text-zinc-400">
                      47 páginas · PDF interactivo · Biomecánica, suelas y gamas explicadas
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-zinc-500">Valor</div>
                    <div className="text-zinc-300 font-mono">$29.99</div>
                  </div>
                </div>

                <div className="flex items-start gap-4 border border-primary/40 rounded-xl p-5 bg-primary/5">
                  <Gift className="w-6 h-6 text-primary shrink-0 mt-0.5" strokeWidth={1.5} />
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1 flex-wrap">
                      <span className="font-bold text-main-text">BONO GRATIS</span>
                      <span className="text-[10px] bg-primary text-bg px-1.5 py-0.5 rounded font-bold">
                        INCLUIDO
                      </span>
                    </div>
                    <div className="text-sm text-zinc-400">
                      "Guía de Calentamiento en 5 Minutos" — rutina exprés para preparar
                      articulaciones y prevenir desgarros.
                    </div>
                  </div>
                  <div className="text-right shrink-0">
                    <div className="text-xs text-zinc-500">Valor</div>
                    <div className="text-zinc-300 font-mono">$15.00</div>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-8 mb-8">
                <div className="flex items-end justify-between flex-wrap gap-4">
                  <div>
                    <div className="text-sm text-zinc-500 mb-1">Precio regular</div>
                    <div className="text-2xl text-zinc-500 line-through font-mono">$44.99 USD</div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-primary font-semibold mb-1">Precio de hoy</div>
                    <div className="text-5xl md:text-6xl font-display font-bold text-main-text">
                      $9.99<span className="text-lg text-zinc-400 font-sans font-normal ml-1">USD</span>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="#"
                className="cta-glow group block w-full text-center px-8 py-5 bg-primary text-bg font-bold text-base md:text-lg rounded-md hover:scale-[1.01] transition-transform"
              >
                ¡APROVECHAR EL 66% DE DESCUENTO AHORA!
              </a>

              <div className="mt-5 flex items-center justify-center gap-4 text-xs text-zinc-500 flex-wrap">
                <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5" /> Pago seguro</span>
                <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5" /> Acceso inmediato</span>
                <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5" /> Garantía 7 días</span>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* ── GUARANTEE ───────────────────────────── */}
      {/* <section className="border-b border-border py-16 md:py-24">
        <div className="max-w-2xl mx-auto px-4 text-center">
          <ShieldCheck className="w-10 h-10 text-secondary mx-auto mb-6" strokeWidth={1.5} />
          <h2 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Garantía Incondicional de 7 Días
          </h2>
          <p className="text-zinc-400 leading-relaxed">
            Prueba la guía, aplica los consejos y si sientes que no protegió tus piernas ni te ayudó
            a ahorrar dinero, te devolvemos el 100% de tu inversión sin preguntas.
          </p>
        </div>
      </section> */}

      {/* ── FOOTER ──────────────────────────────── */}
      <footer className="py-16 md:py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          {/* <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Asegura tu copia por <span className="text-primary">$9.99 USD</span>.
          </h2>
          <p className="text-zinc-400 mb-8 max-w-xl mx-auto">
            El precio sube a $29.99 USD cuando termine el contador. Sin avisos previos.
          </p>
          <a
            href="#oferta"
            className="cta-glow group inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-bg font-bold text-base rounded-md hover:scale-[1.02] transition-transform"
          >
            ¡HAZ CLIC AQUÍ PARA ASEGURAR TU COPIA!
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
          </a> */}

          <div className="mt-16 pt-8 border-t border-border text-xs text-zinc-600 space-y-3">
            <div className="flex items-center justify-center gap-2">
              <Lock className="w-3 h-3" />
              <span>Pago procesado de forma segura por Hotmart</span>
            </div>
            {/* <div className="flex items-center justify-center gap-4 flex-wrap">
              <a href="#" className="hover:text-zinc-400 transition-colors">Política de Privacidad</a>
              <span className="text-zinc-700">·</span>
              <a href="#" className="hover:text-zinc-400 transition-colors">Términos de Servicio</a>
              <span className="text-zinc-700">·</span>
              <a href="#" className="hover:text-zinc-400 transition-colors">Soporte</a>
            </div> */}
            <div className="pt-3 max-w-2xl mx-auto leading-relaxed">
              © 2026 Gol de Compra. Todos los derechos reservados. Esta guía no sustituye consejo
              médico profesional. Consulta a tu médico antes de iniciar cualquier actividad física
              si tienes lesiones previas. Hotmart es el procesador de pagos seguro; no almacena ni
              comparte tus datos financieros con el vendedor.
            </div>
          </div>
        </div>
      </footer>

      {/* ── Sticky CTA ─────────────────────────── */}
      {/* {showSticky && (
        <div className="fixed bottom-0 left-0 right-0 z-30 bg-zinc-950/95 backdrop-blur border-t border-border sticky-enter">
          <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="hidden sm:block">
                <div className="text-xs text-zinc-500">Precio de lanzamiento</div>
                <div className="flex items-baseline gap-2">
                  <span className="text-xl font-bold text-main-text font-mono">$9.99</span>
                  <span className="text-sm text-zinc-500 line-through font-mono">$44.99</span>
                </div>
              </div>
              <div className="sm:hidden text-xs text-zinc-400">
                <span className="text-primary font-bold">$9.99</span> hoy
              </div>
            </div>
            <a
              href="#oferta"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary text-bg font-bold text-sm rounded-md"
            >
              Asegurar mi copia
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>
      )} */}
    {/* </div> */}
    </>
  )
}