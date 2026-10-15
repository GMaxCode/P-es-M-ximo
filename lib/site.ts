const fallback = {
  clientName: "Pães Máximo",
  city: "Ji-Paraná-RO",
  whatsappNumber: "+55 69 8465-1109",
  whatsappMessage:
    "Olá Damião, vim pelo seu site, gostaria de fazer uma encomenda!",
  instagram: "https://www.instagram.com/sdamiaomaximodos/",
  facebook: "",
  linkedin: "",
  email: "maximodamiao70@gmail.com",
  address: "Rua João Goulart, 541, bairro Riachuelo",
  hours: "Segunda e quarta, das 12h às 17h",
  siteUrl: "http://localhost:3000",
};

export const site = {
  clientName: process.env.NEXT_PUBLIC_CLIENT_NAME || fallback.clientName,
  city: process.env.NEXT_PUBLIC_CITY || fallback.city,
  whatsappNumber:
    process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || fallback.whatsappNumber,
  whatsappMessage:
    process.env.NEXT_PUBLIC_WHATSAPP_MESSAGE || fallback.whatsappMessage,
  instagram: process.env.NEXT_PUBLIC_INSTAGRAM || fallback.instagram,
  facebook: process.env.NEXT_PUBLIC_FACEBOOK || fallback.facebook,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN || fallback.linkedin,
  email: process.env.NEXT_PUBLIC_EMAIL || fallback.email,
  address: process.env.NEXT_PUBLIC_ADDRESS || fallback.address,
  hours: process.env.NEXT_PUBLIC_HOURS || fallback.hours,
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || fallback.siteUrl,
};

export function buildWhatsAppUrl(message: string = site.whatsappMessage) {
  return `https://wa.me/${site.whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
}

export const whatsappUrl = buildWhatsAppUrl();
export const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(`${site.address}, ${site.city}`)}`;
