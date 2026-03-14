import { Col, Row, Container } from "react-bootstrap";
import { useLang } from "../../../utils/LangContext";
import './about.css'

const Bold = ({ text }) => (
  <span dangerouslySetInnerHTML={{ __html: text.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
);

export const About = () => {
  const { t } = useLang();
  return (
    <section id="about-me" className="about-section">
      <Container>
        <Row className="paddings">
          <Col md={12}>
            <h2>{t.about.title}</h2>
            <p className="text-justify"><Bold text={t.about.intro} /></p>
            <p className="text-justify"><Bold text={t.about.intro2} /></p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
