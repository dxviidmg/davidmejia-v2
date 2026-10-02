'use client';

import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { useLang } from "../../../utils/LangContext";
import { LogoMark } from "../logo/Logo";
import { CONTACT } from "../../../utils/contact";
import { Reveal } from "../reveal/Reveal";
import { SectionEyebrow } from "../section/SectionHeader";
import { AccentEnd } from "../text/AccentEnd";
import "./footer.css";

export function Footer() {
  const { t } = useLang();
  return (
    <footer id="footer" className="section">
      <Container>
        <Reveal as="p"><SectionEyebrow id="footer" /></Reveal>
        <Reveal as="h2" className="footer-contact" delay={0.1}><AccentEnd text={t.footer.contact} /></Reveal>
        <Reveal className="footer-actions" delay={0.2}>
          <a href={CONTACT.email} target="_blank" rel="noreferrer" className="btn-dm">
            <BsEnvelope /> {t.footer.ctaEmail}
          </a>
          <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="btn-dm btn-dm-ghost">
            <BsWhatsapp className="social-whatsapp" /> {t.footer.ctaWhatsapp}
          </a>
        </Reveal>
        <div className="footer-bottom">
          <span className="footer-brand"><LogoMark size={18} className="nav-logo" /> © {new Date().getFullYear()} David Mejía</span>
          <div className="footer-icons">
            <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-linkedin"><BsLinkedin /></a>
            <a href={CONTACT.github} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-github"><BsGithub /></a>
            <a href={CONTACT.email} target="_blank" rel="noreferrer" aria-label="Email"><BsEnvelope /></a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-whatsapp"><BsWhatsapp /></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
