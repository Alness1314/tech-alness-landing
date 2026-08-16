import { ArrowRight, BadgeCheck, Clock3, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import hero from "../../assets/images/hero.webp";
import { useReveal } from "../../hooks/useReveal";

const features: [LucideIcon, string, string][] = [
  [Clock3, "Soporte rápido", "Atención eficiente."],
  [BadgeCheck, "Garantía de servicio", "Trabajos confiables."],
  [ShieldCheck, "Seguridad", "Protegemos tu información."],
];
export default function Hero() {
  const reveal = useReveal();
  return (
    <section
      id="inicio"
      className="relative overflow-hidden scroll-mt-24 pt-14 pb-20 lg:pt-20"
    >
      <div ref={reveal.ref} className={`page-shell relative ${reveal.className}`}>
        <div className="grid items-center gap-12 lg:grid-cols-[.92fr_1.08fr]">
          <div>
            <div className="eyebrow">Tecnología a tu alcance</div>
            <h1 className="mt-5 max-w-2xl text-5xl font-extrabold leading-[1.03] tracking-[-.045em] text-slate-950 sm:text-6xl lg:text-7xl dark:text-white">
              Soluciones tecnológicas que impulsan tu{" "}
              <span className="text-gradient">productividad.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-8 text-slate-600 dark:text-slate-300">
              Desarrollo de software a la medida y mantenimiento profesional de
              equipos PC, laptops y servidores.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a href="#servicios" className="button-primary">
                Ver servicios <ArrowRight size={18} />
              </a>
              <a href="#contacto" className="button-secondary">
                Solicitar soporte
              </a>
            </div>
          </div>
          <div className="relative">
            <div className="hero-frame">
              <img
                src={hero}
                alt="Equipo de cómputo profesional con iluminación azul"
                className="h-full w-full object-cover object-center"
                fetchPriority="high"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#030914]/20 via-transparent to-transparent" />
            </div>
            <div className="floating-chip">
              <span className="size-2 rounded-full bg-emerald-400 shadow-[0_0_14px_#34d399]" />{" "}
              Soluciones confiables
            </div>
          </div>
        </div>
        <div className="mt-14 grid gap-4 border-t border-slate-200 pt-8 sm:grid-cols-3 dark:border-white/10">
          {features.map(([Icon, title, text]) => (
            <div key={title} className="flex items-center gap-4">
              <span className="feature-icon">
                <Icon size={21} />
              </span>
              <div>
                <h2 className="font-bold text-slate-950 dark:text-white">
                  {title}
                </h2>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
