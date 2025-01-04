import { Col, Container, Image, Row } from "react-bootstrap";
import positions from "../../../data/positions.json";
import "./experience.css";

export const Experience = () => {
  return (
    <section id="experience" className="paddings">
      <Container>
        <h2>Experience</h2>
        <Row>
          {positions.map((position, index) => {
            const positionInfo = `${position.position} at ${position.company.name}`;
            return (
              <Col sm={12} md={6} key={index}>
                <h3>
                  {position.position} {positionInfo.length > 55 ? "" : (<br></br>)} at{" "}
                  <a
                    href={position.company.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {position.company.name}
                  </a>
                </h3>
                <Row>
                  <Col sm={12} md={8}>
                    <p>
                      <strong>Period:</strong> {position.period}
                      <br />
                      <strong>Location:</strong> {position.location}
                      <br />
                      <strong>Modality:</strong> {position.modality}
                      <br />
                      {position.notes}
                    </p>
                  </Col>
                  <Col sm={12} md={3}>
                    <Image
                      src={position.logo}
                      roundedCircle
                      style={{ height: "100px" }}
                      thumbnail
                    />
                  </Col>
                </Row>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
