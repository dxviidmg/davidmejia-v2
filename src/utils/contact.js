// Contact links, built once from the environment (see .env.example)
export const CONTACT = {
  email: `https://mail.google.com/mail/?view=cm&to=${process.env.NEXT_PUBLIC_EMAIL}`,
  whatsapp: `https://wa.me/${process.env.NEXT_PUBLIC_WHATSAPP}`,
  linkedin: process.env.NEXT_PUBLIC_LINKEDIN,
  github: process.env.NEXT_PUBLIC_GITHUB,
};
