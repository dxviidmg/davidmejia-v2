// Contact links, built once from the environment (see .env.example)
export const CONTACT = {
  email: `https://mail.google.com/mail/?view=cm&to=${process.env.REACT_APP_EMAIL}`,
  whatsapp: `https://wa.me/${process.env.REACT_APP_WHATSAPP}`,
  linkedin: process.env.REACT_APP_LINKEDIN,
  github: process.env.REACT_APP_GITHUB,
};
