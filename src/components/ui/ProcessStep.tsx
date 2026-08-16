import type { LucideIcon } from 'lucide-react'

type ProcessStepProps = { icon: LucideIcon; number: number; title: string; description: string }

export default function ProcessStep({ icon:Icon, number, title, description }: ProcessStepProps){return <article className="relative text-center"><div className="process-icon"><Icon size={26}/></div><span className="mt-4 block text-xs font-bold uppercase tracking-[.2em] text-blue-600 dark:text-blue-400">Paso {number}</span><h3 className="mt-2 text-xl font-bold text-slate-950 dark:text-white">{title}</h3><p className="mx-auto mt-3 max-w-xs leading-7 text-slate-600 dark:text-slate-400">{description}</p></article>}
