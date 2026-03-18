import { Col, Row, Container } from "react-bootstrap";
import { useLang } from "../../../utils/LangContext";
import { yearsOfExperience } from "../../../utils/dateUtils";
import { useInView } from "../../../utils/useInView";
import './about.css'

const Bold = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
);

export const About = () => {
  const { t } = useLang();
  const [ref, visible] = useInView();
  return (
    <section id="about-me" className="about-section">
      <Container>
        <Row className="paddings" ref={ref}>
          <Col md={12}>
            <h2 className={`fade-up ${visible ? "visible" : ""}`}>{t.about.title}</h2>
            <p className={`text-justify fade-up stagger-1 ${visible ? "visible" : ""}`}><Bold text={t.about.intro.replace("{years}", yearsOfExperience)} /></p>
            <p className={`text-justify fade-up stagger-2 ${visible ? "visible" : ""}`}><Bold text={t.about.intro2} /></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
