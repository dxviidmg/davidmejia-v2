import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsFileText, BsEnvelope } from "react-icons/bs";
import { useLang } from "../../../utils/LangContext";
import { useInView } from "../../../utils/useInView";
import "./footer.css";

export function Footer() {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <footer id="footer">
      <Container className="text-center" ref={ref}>
        <p className={`footer-contact fade-up ${visible ? "visible" : ""}`}>{t.footer.contact}</p>
        <a href="https://wa.me/525561652599" target="_blank" rel="noreferrer" className={`footer-cta fade-up stagger-1 ${visible ? "visible" : ""}`}>{t.footer.cta}</a>
        <div className={`footer-icons fade-up stagger-2 ${visible ? "visible" : ""}`}>
          <a href="https://www.linkedin.com/in/david-mejia-guzman/" target="_blank" rel="noreferrer" title="LinkedIn">
            <BsLinkedin />
          </a>
          <a href="https://github.com/dxviidmg" target="_blank" rel="noreferrer" title="GitHub">
            <BsGithub />
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=davidmejia.05@hotmail.com" title="Email">
            <BsEnvelope />
          </a>
          <a href="https://docs.google.com/document/d/1C4btdRFF8tGugFYtQSfJXbwd-4dGArih1LSq5xKJ5Fg/export?format=pdf" target="_blank" rel="noreferrer" title="Download CV">
            <BsFileText />
          </a>
        </div>
        <p className="footer-copy">© {new Date().getFullYear()} David Mejía. {t.footer.rights}</p>
      </Container>
    </footer>
  );
}
