import { Moon, Sun } from 'lucide-react'
type ThemeToggleProps = { theme: 'light' | 'dark'; onToggle: () => void }
export default function ThemeToggle({ theme, onToggle }: ThemeToggleProps) {
  return <button type="button" onClick={onToggle} className="icon-button" aria-label={`Activar modo ${theme === 'dark' ? 'claro' : 'oscuro'}`}>{theme === 'dark' ? <Sun size={18}/> : <Moon size={18}/>}</button>
}
