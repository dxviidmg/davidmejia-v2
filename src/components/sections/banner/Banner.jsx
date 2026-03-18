import { useEffect, useState, useMemo, useRef, useCallback } from "react";
import { Col, Row, Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsFileText, BsEnvelope } from "react-icons/bs";
import { ParticlesBackground } from "./Particles";
import { NavBar } from "../../commons/navbar/Navbar";
import { useLang } from "../../../utils/LangContext";
import { yearsOfExperience } from "../../../utils/dateUtils";
import projects from "../../../data/projects.json";
import "./banner.css";

const AnimatedNumber = ({ prefix, target, duration = 1500 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef();
  const started = useRef(false);

  const start = useCallback(() => {
    if (started.current) return;
    started.current = true;
    const steps = 40;
    const inc = target / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += inc;
      if (current >= target) { setCount(target); clearInterval(timer); }
      else setCount(Math.floor(current));
    }, duration / steps);
  }, [target, duration]);

  useEffect(() => {
    const el = ref.current;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) start(); }, { threshold: 0.5 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [start]);

  return <span ref={ref}>{prefix}{count}</span>;
};

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
            <p className="banner-greeting banner-enter">{t.banner.greeting}</p>
            <h1 className="banner-name banner-enter banner-enter-delay-1">{t.banner.name}</h1>
            <h2 id="iam" className="banner-enter banner-enter-delay-2">
              {text}
              <span className="cursor">|</span>
            </h2>
            <div className="banner-icons banner-enter banner-enter-delay-3">
              <a href="https://www.linkedin.com/in/david-mejia-guzman/" target="_blank" rel="noreferrer" title="LinkedIn">
                <BsLinkedin className="icon" size={40} />
              </a>
              <a href="https://github.com/dxviidmg" target="_blank" rel="noreferrer" title="GitHub">
                <BsGithub className="icon" size={40} />
              </a>
              <a href="mailto:davidmejia.05@hotmail.com" title="Email">
                <BsEnvelope className="icon" size={40} />
              </a>
              <a href="https://docs.google.com/document/d/1C4btdRFF8tGugFYtQSfJXbwd-4dGArih1LSq5xKJ5Fg/export?format=pdf" target="_blank" rel="noreferrer" title="Download CV">
                <BsFileText className="icon" size={40} />
              </a>
            </div>
            <a href="#projects" className="banner-cta banner-enter banner-enter-delay-4">{t.banner.cta}</a>
            <div className="banner-stats banner-enter banner-enter-delay-4">
              {t.banner.stats.map((s, i) => {
                let num, prefix = "";
                if (s.computed === "yearsOfExperience") { num = yearsOfExperience; prefix = "+"; }
                else if (s.computed === "projectsDelivered") {
                  num = Math.floor(projects.length / 5) * 5;
                  prefix = projects.length % 5 ? "+" : "";
                } else {
                  const match = s.value.match(/(\+?)(\d+)/);
                  num = parseInt(match[2]); prefix = match[1];
                }
                return (
                  <div key={i} className="banner-stat">
                    <span className="banner-stat-value"><AnimatedNumber prefix={prefix} target={num} /></span>
                    <span className="banner-stat-label">{s.label}</span>
                  </div>
                );
              })}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
}
