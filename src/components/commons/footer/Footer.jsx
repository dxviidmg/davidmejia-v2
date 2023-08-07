// import { Container, Row, Col } from "react-bootstrap";

// export function Footer() {
//   return (
//     <footer>
//       <Container>
//         <Row>
//           <Col xs={12} className="text-center" style={{marginTop: "10px", marginBottom: "10px"}}>
//           © 2023 All rights reserved.
//           </Col>
//         </Row>
//       </Container>
//     </footer>
//   );
// }
// import { ContactUs } from "./contactus/ContactUs"
import { Contact } from "./Contact"

export const Footer = () => {
    return (<footer>
        <Contact/>
    </footer>)
}