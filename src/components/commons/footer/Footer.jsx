import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsFileText } from "react-icons/bs";
import { useLang } from "../../../utils/LangContext";
import "./contact.css";

export function Footer() {
  const { t } = useLang();
  return (
    <footer id="footer">
      <Container className="text-center">
        <div className="footer-icons">
          <a href="https://www.linkedin.com/in/david-mejia-guzman/" target="_blank" rel="noreferrer" title="LinkedIn">
            <BsLinkedin />
          </a>
          <a href="https://github.com/dxviidmg" target="_blank" rel="noreferrer" title="GitHub">
            <BsGithub />
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
