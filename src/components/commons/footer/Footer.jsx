'use client';

import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { useLang } from "../../../utils/LangContext";
import { LogoMark } from "../logo/Logo";
import { CONTACT } from "../../../utils/contact";
import { Reveal } from "../reveal/Reveal";
import { useNow } from "../../../utils/useNow";
import "./footer.css";

const ICONS = [
  { href: CONTACT.linkedin, label: "LinkedIn", Icon: BsLinkedin, className: "social-linkedin" },
  { href: CONTACT.github, label: "GitHub", Icon: BsGithub, className: "social-github" },
  { href: CONTACT.email, label: "Email", Icon: BsEnvelope },
  { href: CONTACT.whatsapp, label: "WhatsApp", Icon: BsWhatsapp, className: "social-whatsapp" },
];

export function Footer() {
  const { t } = useLang();
  const now = useNow();
  return (
    <footer id="footer" className="section">
      <Container>
        <Reveal as="h2" className="footer-contact" delay={0.1}>{t.footer.contact}</Reveal>
        <Reveal className="footer-actions" delay={0.2}>
          <a href={CONTACT.email} target="_blank" rel="noreferrer" className="btn-dm">
            <BsEnvelope /> {t.footer.ctaEmail}
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-dm btn-whatsapp">
            <BsWhatsapp /> {t.footer.ctaWhatsapp}
          </a>
        </Reveal>
        <div className="footer-bottom">
          <span className="footer-brand"><LogoMark size={18} className="nav-logo" /> © {now.getFullYear()} David Mejía</span>
          <div className="footer-icons">
            {ICONS.map(({ href, label, Icon, className }) => (
              <a key={label} href={href} target="_blank" rel="noreferrer" aria-label={label} className={className}><Icon /></a>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
