import { useEffect, useState, useMemo } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsFileText } from "react-icons/bs";
import { ParticlesBackground } from "./Particles";
import { NavBar } from "../../commons/navbar/Navbar";
import { useLang } from "../../../utils/LangContext";
import "./banner.css";

export function Banner() {
  const { t } = useLang();
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);

  const titles = useMemo(() => t.banner.titles, [t]);

  useEffect(() => {
    const tick = () => {
      let i = loopNum % titles.length;
      let fullText = titles[i];
      let updateText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);
      setText(updateText);
      if (isDeleting) setDelta(50);
      if (!isDeleting && updateText === fullText) {
        setIsDeleting(true);
        setDelta(3000);
      } else if (isDeleting && updateText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
      }
    };
    let ticker = setInterval(tick, delta);
    return () => clearInterval(ticker);
  }, [loopNum, text, isDeleting, delta, titles]);

  return (
    <section id="banner" style={{ position: "relative" }}>
      <ParticlesBackground />
      <NavBar />
      <Container>
        <Row className="min-height d-flex align-items-center text-center">
          <Col sm={12}>
            <p className="banner-greeting">{t.banner.greeting}</p>
            <h1 className="banner-name">{t.banner.name}</h1>
            <h2 id="iam">
              {text}
              <span className="cursor">|</span>
            </h2>
            <div className="banner-icons">
              <a href="https://www.linkedin.com/in/david-mejia-guzman/" target="_blank" rel="noreferrer" title="LinkedIn">
                <BsLinkedin className="icon" size={40} />
              </a>
              <a href="https://github.com/dxviidmg" target="_blank" rel="noreferrer" title="GitHub">
                <BsGithub className="icon" size={40} />
              </a>
              <a href="https://docs.google.com/document/d/1C4btdRFF8tGugFYtQSfJXbwd-4dGArih1LSq5xKJ5Fg/export?format=pdf" target="_blank" rel="noreferrer" title="Download CV">
                <BsFileText className="icon" size={40} />
              </a>
            </div>
            <a href="#projects" className="banner-cta">{t.banner.cta}</a>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
