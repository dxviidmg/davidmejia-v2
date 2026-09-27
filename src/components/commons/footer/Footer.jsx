import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import { LogoMark } from "../logo/Logo";
import "./footer.css";

export function Footer() {
  const { t } = useLang();
  const [ref, visible] = useInView();
  const email = `https://mail.google.com/mail/?view=cm&to=${process.env.REACT_APP_EMAIL}`;
  const whatsapp = `https://wa.me/${process.env.REACT_APP_WHATSAPP}`;
  return (
    <footer id="footer" className="section">
      <Container ref={ref}>
        <p className={`section-eyebrow fade-up ${visible ? "visible" : ""}`}><span className="num">06</span> — {t.nav.contact}</p>
        <h2 className={`footer-contact fade-up stagger-1 ${visible ? "visible" : ""}`}>{t.footer.contact.slice(0, -1)}<span className="accent-dot">{t.footer.contact.slice(-1)}</span></h2>
        <div className={`footer-actions fade-up stagger-2 ${visible ? "visible" : ""}`}>
          <a href={email} target="_blank" rel="noreferrer" className="btn-dm">
            <BsEnvelope /> {t.footer.ctaEmail}
          </a>
          <a href={whatsapp} target="_blank" rel="noreferrer" className="btn-dm btn-dm-ghost">
            <BsWhatsapp className="social-whatsapp" /> {t.footer.ctaWhatsapp}
          </a>
        </div>
        <div className="footer-bottom">
          <span className="footer-brand"><LogoMark size={18} className="nav-logo" /> © {new Date().getFullYear()} David Mejía</span>
          <div className="footer-icons">
            <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer" aria-label="LinkedIn" className="social-linkedin"><BsLinkedin /></a>
            <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer" aria-label="GitHub" className="social-github"><BsGithub /></a>
            <a href={email} target="_blank" rel="noreferrer" aria-label="Email"><BsEnvelope /></a>
            <a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="social-whatsapp"><BsWhatsapp /></a>
          </div>
        </div>
      </Container>
    </footer>
  );
}
