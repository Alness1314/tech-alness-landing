import { Menu, X } from "lucide-react";
import { useState } from "react";
import Logo from "../ui/Logo";
import ThemeToggle from "../ui/ThemeToggle";

const links = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Desarrollo", "#desarrollo"],
  ["Mantenimiento", "#mantenimiento"],
  ["Sobre mí", "#sobre-mi"],
  ["Contacto", "#contacto"],
];
type NavbarProps = { theme: "light" | "dark"; onToggleTheme: () => void };
export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/50 bg-white/65 shadow-[0_12px_40px_rgba(15,23,42,.08)] backdrop-blur-2xl dark:border-white/10 dark:bg-[#030914]/65 dark:shadow-[0_12px_45px_rgba(0,0,0,.22)]">
      <nav
        className="page-shell flex h-18 items-center justify-between"
        aria-label="Navegación principal"
      >
        <Logo />
        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="nav-link">
              {label}
            </a>
          ))}
        </div>
        <div className="hidden items-center gap-3 lg:flex">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <a href="#contacto" className="button-primary button-small">
            Solicitar soporte
          </a>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
          <button
            className="icon-button"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={open}
          >
            {open ? <X /> : <Menu />}
          </button>
        </div>
      </nav>
      {open && (
        <div className="border-t border-slate-200 bg-white px-5 py-5 dark:border-white/8 dark:bg-[#07111f] lg:hidden">
          {links.map(([label, href]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="block rounded-lg px-3 py-3 font-semibold text-slate-700 hover:bg-blue-50 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {label}
            </a>
          ))}
          <a
            href="#contacto"
            onClick={() => setOpen(false)}
            className="button-primary mt-3 w-full"
          >
            Solicitar soporte
          </a>
        </div>
      )}
    </header>
  );
}
