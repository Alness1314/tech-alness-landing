export const contact = {
  email: '', phone: '', whatsapp: '', github: '', linkedin: '', location: 'México',
}

export const contactHref = contact.email ? `mailto:${contact.email}` : '#contacto'
