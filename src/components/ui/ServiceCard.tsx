import { ArrowUpRight } from 'lucide-react'
import type { Service } from '../../data/services'

export default function ServiceCard({ service }: { service: Service }) {
  const Icon = service.icon
  return <article id={service.id} className="service-card scroll-mt-28"><span className="service-icon"><Icon size={29}/></span><h3 className="mt-7 text-xl font-bold text-slate-950 dark:text-white">{service.title}</h3><p className="mt-3 flex-1 leading-7 text-slate-600 dark:text-slate-400">{service.description}</p><a href="#contacto" className="mt-7 inline-flex items-center gap-1.5 font-bold text-blue-600 dark:text-blue-400">Ver más <ArrowUpRight size={17}/></a></article>
}
