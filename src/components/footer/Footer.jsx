import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
  return (
    <footer>
      <Container>
        <Row>
          <Col xs={12} className="text-center">
            <p style={{paddingTop: "5px"}}>Powered by me</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
