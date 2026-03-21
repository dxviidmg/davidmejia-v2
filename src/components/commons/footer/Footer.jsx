import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsFileText, BsEnvelope } from "react-icons/bs";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import "./footer.css";

export function Footer() {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <footer id="footer" className="section-dark">
      <Container className="text-center" ref={ref}>
        <p className={`footer-contact fade-up ${visible ? "visible" : ""}`}>{t.footer.contact}</p>
        <a href={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`} target="_blank" rel="noreferrer" className={`footer-cta fade-up stagger-1 ${visible ? "visible" : ""}`}>{t.footer.cta}</a>
        <div className={`footer-icons fade-up stagger-2 ${visible ? "visible" : ""}`}>
          <a href={process.env.REACT_APP_LINKEDIN} target="_blank" rel="noreferrer" title="LinkedIn">
            <BsLinkedin />
          </a>
          <a href={process.env.REACT_APP_GITHUB} target="_blank" rel="noreferrer" title="GitHub">
            <BsGithub />
          </a>
          <a href={`https://mail.google.com/mail/?view=cm&to=${process.env.REACT_APP_EMAIL}`} title="Email">
            <BsEnvelope />
          </a>
          <a href={process.env.REACT_APP_CV_URL} target="_blank" rel="noreferrer" title="Download CV">
            <BsFileText />
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} David Mejía. {t.footer.rights}</p>
      </Container>
    </footer>
  );
}
