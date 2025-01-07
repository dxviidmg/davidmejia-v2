 import { Container, Row, Col } from "react-bootstrap";
import './contact.css'

export function Footer() {
   return (
     <footer id="footer">
       <Container>
         <Row>
           <Col xs={12} className="text-center" style={{marginTop: "10px", marginBottom: "10px"}}>
           © 2025 All rights reserved.
           </Col>
         </Row>
       </Container>
     </footer>
   );
 }
