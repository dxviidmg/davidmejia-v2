import { Col, Container, Row } from "react-bootstrap";
import certifications from "../data/certifications.json";
import Card from "react-bootstrap/Card";


export const Certifications = () => {
  return (
    <section id="certifications" className="paddings">
      <Container>
        <h2>Certifications</h2>
        <Row>
          {certifications.map((certification, index) => {
            return (
              <Col lg={3} key={index}>

<Card className="h-100 shadow">
      <Card.Body>
        <Card.Title>{certification.name} by {certification.instution}</Card.Title>
        

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
      </Card.Body>
    </Card>

              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};
