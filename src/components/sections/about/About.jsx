import { Col, Row, Container } from "react-bootstrap";
import about from "./../../../data/about.json";
import './about.css'

export const About = () => {
  return (
    <section id="about-me" className="about-section">
      <Container>
        <Row className="paddings">
          <Col md={12}>
            <h2>About me</h2>
            {about.map((e, i) => (
              <p key={i} className="text-justify">{e}</p>
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};
