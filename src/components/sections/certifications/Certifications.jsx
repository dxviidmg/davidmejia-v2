import { Col, Container, Row } from "react-bootstrap";
import certifications from "../../../data/certifications.json";
import { MyCard } from "../../commons/cards/Card";
import { ContentCerfitication } from "./ContentCerfitication";
import "./certifications.css";


export const Certifications = () => {
  
  return (
    <section id="certifications" className="paddings">
      <Container>
        <h2 id="certifications-title">Certifications</h2>
        <Row>
          {certifications.map((certification, index) => {
            const title = certification.name + " by " + certification.instution
            return (
              <Col lg={3} key={index} className="padding-col">
                <MyCard
                  title={title}
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
