import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} className="text-center" style={{marginTop: "5px", marginBottom: "5px"}}>
            Powered by me
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
