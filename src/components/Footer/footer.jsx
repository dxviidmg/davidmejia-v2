import { Container, Row, Col } from "react-bootstrap";

export function Footer() {
    return (<footer className="tagline">
        <Container>
            <Row>
                <Col xs={12}>
                    <p className="tagline">Powered by dxviidmg</p>
                </Col>
            </Row>
        </Container>
    </footer>)
}