import { Code2, Laptop, Monitor, Server } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'

export type Service = { id: string; title: string; description: string; icon: LucideIcon }

export const services: Service[] = [
  { id: 'desarrollo', title: 'Desarrollo de Software', description: 'Desarrollo de aplicaciones web, APIs, aplicaciones de escritorio y sistemas a la medida de tus necesidades.', icon: Code2 },
  { id: 'mantenimiento', title: 'Mantenimiento PC', description: 'Mantenimiento preventivo y correctivo para computadoras de escritorio.', icon: Monitor },
  { id: 'laptops', title: 'Mantenimiento Laptops', description: 'Optimización, limpieza, cambio de componentes y mejora de rendimiento.', icon: Laptop },
  { id: 'servidores', title: 'Servidores', description: 'Instalación, configuración y mantenimiento de servidores físicos y virtuales.', icon: Server },
]
