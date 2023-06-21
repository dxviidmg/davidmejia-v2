import { Col, Row, Container, Image } from "react-bootstrap";
import about from "../data/about.json";

export const About = () => {
  const img =
    "https://cdn.awsli.com.br/600x450/1601/1601923/produto/129894767/6bba6d6010.jpg";
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
          <Col xs={12} md={5} className="text-center">
            <Image roundedCircle src={img} className="w-75" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
