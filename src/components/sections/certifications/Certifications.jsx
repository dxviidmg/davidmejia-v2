import { Col, Container, Row } from "react-bootstrap";
import certifications from "../../../data/certifications.json";
import { MyCard } from "../../commons/cards/Card";
import { ContentCerfitication } from "./ContentCerfitication";



export const Certifications = () => {
  return (
    <section id="certifications" className="paddings">
      <Container>
        <h2>Certifications</h2>
        <Row>
          {certifications.map((certification, index) => {
            return (
              <Col lg={3} key={index} className="padding-col">
                <MyCard
                  title={certification.name}
                  content={ContentCerfitication(certification)}
                />
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
