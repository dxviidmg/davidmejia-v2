import { Col, Container, Row } from "react-bootstrap";
import certifications from "../data/certifications.json";
export const Certifications = () => {
  return (
    <section id="certifications" className="paddings">
      <Container>
        <h2>Certifications</h2>
        <Row>
          {certifications.map((certification, index) => {
            return (
              <Col lg={6}>
                <h3>
                  {certification.name} by {certification.instution}
                </h3>
                <p>
                  <strong>Expedition: </strong>
                  {certification.expedition} <br />{" "}
                  {certification.expiration ? (
                    <>
                      <strong>Expiration: </strong>
                      {certification.expiration}
                    </>
                  ) : (
                    ""
                  )}
                  
                  {certification.id ? (
                    <>
                      <strong>id: </strong>
                      {certification.id}
                    </>
                  ) : (
                    ""
                  )}{" "}
                </p>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
