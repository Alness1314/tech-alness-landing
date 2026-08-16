import { ArrowRight, Headset } from 'lucide-react'
import { contactHref } from '../../data/contact'
import { useReveal } from '../../hooks/useReveal'

export default function ContactSection() {
  const reveal = useReveal()

  return <section id="contacto" className="scroll-mt-24 px-5 py-16 sm:px-6"><div ref={reveal.ref} className={`page-shell ${reveal.className}`}><div className="cta-card"><span className="grid size-16 shrink-0 place-items-center rounded-2xl bg-white/12 text-white"><Headset size={32}/></span><div className="flex-1"><h2 className="text-2xl font-extrabold text-white sm:text-3xl">¿Necesitas soporte o tienes un proyecto?</h2><p className="mt-3 max-w-2xl leading-7 text-blue-100">Estoy listo para ayudarte. Hablemos y encontremos la mejor solución para tu proyecto, negocio o equipo.</p></div><a href={contactHref} className="inline-flex items-center justify-center gap-2 rounded-xl bg-white px-6 py-3.5 font-bold text-blue-700 transition hover:-translate-y-0.5 hover:shadow-xl">Contactar ahora <ArrowRight size={18}/></a></div></div></section>
}
