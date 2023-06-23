import { Col, Row, Container } from "react-bootstrap";
import about from "./../../../data/about.json";
import './about.css'
import { Photo } from "./Photo";


export const About = () => {
  return (
    <section id="about-me">
      <Container>
        <Row className="paddings d-flex align-items-center">
          <Col md={7}>
            <h2>About me</h2>
            {about.map((e, i) => {
              return (
                <p key={i} className="text-justify">
                  {e}
                </p>
              );
            })}
          </Col>
          <Col xs={12} md={5}>
            <Photo/>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
