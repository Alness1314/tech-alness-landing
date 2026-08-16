import logoHorizontal from '../../assets/logos/logo_horizontal_ui.webp'
import logoSquare from '../../assets/logos/logo_cuadrado_ui.webp'

type LogoProps = { variant?: 'horizontal' | 'square' }

export default function Logo({ variant = 'horizontal' }: LogoProps) {
  const isSquare = variant === 'square'
  return (
    <a href="#inicio" className="group inline-flex items-center" aria-label="ALNESS TECH, ir al inicio">
      <img
        src={isSquare ? logoSquare : logoHorizontal}
        width={isSquare ? 320 : 700}
        height={isSquare ? 320 : 233}
        alt="ALNESS Tech — Mantenimiento de computadoras y desarrollo de software"
        className={`${isSquare ? 'footer-brand-logo' : 'brand-logo'} object-contain transition-transform duration-300 group-hover:scale-[1.02]`}
      />
    </a>
  )
}
