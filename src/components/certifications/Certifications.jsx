import { Col, Container, Row } from "react-bootstrap";
import certifications from "../data/certifications.json";
import { MyCard } from "../cards/Card";
import { getContentCerfitication } from "./utils";



export const Certifications = () => {
  return (
    <section id="certifications" className="paddings">
      <Container>
        <h2>Certifications</h2>
        <Row>
          {certifications.map((certification, index) => {
            return (
              <Col lg={3} key={index}>
                <MyCard
                  title={certification.name}
                  content={getContentCerfitication(certification)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
