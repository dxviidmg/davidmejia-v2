import { Col, Container, Row } from "react-bootstrap";
import positions from "../../../data/positions.json";
import './experience.css'


export const Expirience = () => {
  return (
    <section id="experience" className="paddings">
      <Container>
        <h2>Experience</h2>

        <Row>
          {positions.map((position, index) => {
            return (
              <Col sm={12} md={6} key={index}>
                {" "}
                <h3>
                  {position.position} in{" "}
                  <a
                    href={position.company.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {position.company.name}
                  </a>
                </h3>
                <p>
                  <strong>Period:</strong> {position.period}. <br />
                  <strong>Location:</strong> {position.location}. <br />{" "}
                  <strong>Modality:</strong> {position.modality} <br />{" "}
                  {position.notes}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
