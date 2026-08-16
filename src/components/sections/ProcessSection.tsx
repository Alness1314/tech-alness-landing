import { CircleCheck, ClipboardList, MessageSquare, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { useReveal } from '../../hooks/useReveal'
import ProcessStep from '../ui/ProcessStep'
const steps: [LucideIcon, string, string][]=[[MessageSquare,'Diagnóstico','Analizo el problema o necesidad para entender la mejor solución.'],[ClipboardList,'Propuesta','Te presento la solución y el plan de trabajo.'],[Wrench,'Ejecución','Realizo el trabajo con calidad y en el tiempo acordado.'],[CircleCheck,'Entrega y soporte','Entrego el trabajo y doy soporte para asegurar tu satisfacción.']]
export default function WorkProcess(){const reveal=useReveal();return <section id="proceso" className="section scroll-mt-24"><div className="page-shell" ref={reveal.ref}><div className={reveal.className}><div className="section-heading"><span className="eyebrow">¿Cómo trabajo?</span><h2>Un proceso simple y efectivo</h2></div><div className="process-grid mt-14">{steps.map(([icon,title,description],i)=><ProcessStep key={title} icon={icon} number={i+1} title={title} description={description}/>)}</div></div></div></section>}
