import { BriefcaseBusiness, CodeXml, Mail, MapPin } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { contact } from "../../data/contact";
import Logo from "../ui/Logo";

type LinkItem = readonly [string, string];
type SocialItem = readonly [string, LucideIcon, string];

const nav: LinkItem[] = [
  ["Inicio", "#inicio"],
  ["Servicios", "#servicios"],
  ["Desarrollo", "#desarrollo"],
  ["Mantenimiento", "#mantenimiento"],
  ["Contacto", "#contacto"],
];
const serviceLinks: LinkItem[] = [
  ["Desarrollo de Software", "#desarrollo"],
  ["Mantenimiento PC", "#mantenimiento"],
  ["Mantenimiento Laptops", "#laptops"],
  ["Servidores", "#servidores"],
];

export default function Footer() {
  const socialCandidates: SocialItem[] = [
    [contact.github, CodeXml, "GitHub"],
    [contact.linkedin, BriefcaseBusiness, "LinkedIn"],
    [contact.email ? `mailto:${contact.email}` : "", Mail, "Email"],
  ];
  const social = socialCandidates.filter(([url]) => Boolean(url));

  return (
    <footer className="border-t border-white/8 bg-[#030914] py-14 text-slate-400">
      <div className="page-shell grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col items-center">
          <Logo variant="square" />
          <p className="mt-5 w-full max-w-xs text-left leading-7">
            Soluciones tecnológicas en desarrollo de software y mantenimiento de
            equipos.
          </p>
          {social.length > 0 && (
            <div className="mt-5 flex gap-3">
              {social.map(([url, Icon, label]) => (
                <a
                  key={label}
                  href={url}
                  aria-label={label}
                  className="footer-social"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          )}
        </div>
        <FooterLinks title="Enlaces" links={nav} />
        <FooterLinks title="Servicios" links={serviceLinks} />
        <div>
          <h3 className="footer-title">Contacto</h3>
          <div className="mt-5 space-y-3">
            {contact.email && (
              <a href={`mailto:${contact.email}`} className="footer-contact">
                <Mail size={16} />
                {contact.email}
              </a>
            )}
            {contact.phone && (
              <a href={`tel:${contact.phone}`} className="footer-contact">
                {contact.phone}
              </a>
            )}
            {contact.location && (
              <p className="footer-contact">
                <MapPin size={16} />
                {contact.location}
              </p>
            )}
          </div>
        </div>
      </div>
      <div className="page-shell mt-12 border-t border-white/8 pt-7 text-sm">
        © {new Date().getFullYear()} ALNESS. Todos los derechos reservados.
      </div>
    </footer>
  );
}

function FooterLinks({ title, links }: { title: string; links: LinkItem[] }) {
  return (
    <div>
      <h3 className="footer-title">{title}</h3>
      <ul className="mt-5 space-y-3">
        {links.map(([label, href]) => (
          <li key={label}>
            <a href={href} className="hover:text-blue-400">
              {label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
