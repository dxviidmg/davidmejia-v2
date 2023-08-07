import "./contact.css";
import { Col, Row, Container } from "react-bootstrap";
import { BsFacebook } from "react-icons/bs";

export const Contact = () => {
  return (
    <section id="contact">
      <Container>
        <Row>
          <Col xl={4}>
            <a href="/" className="navbar-brand font-weight-bold d-block">
              {/* <img src={miImagenFooter} alt="logo-foot" /> */}
            </a>
            <br />
            <br />
            <div>
              <span>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eum minus quo, dolor vel cum, libero harum tenetur iste alias itaque similique ad adipisci praesentium perferendis a. Beatae aut officiis quod!
                {/* <br />
                <br />
                Call Center: <br />
                09:00 am - 08:00 pm <br />
                <br />
                Sucursal Zapote Gordo <br />
                09:00 am- 02:00 pm y de 04:00 pm a 07:00 pm. <br />
                <br />
                Correo electrónico y app móvil <br />
                Atención las 24 hrs. del día{" "} */}
              </span>
            </div>
          </Col>
          <Col xl={3}>
            {/* <h3>Enláces rápidos</h3> */}
                
          </Col>
          <Col xl={5}>
            {/* <h3>Ubicaciones</h3> */}
            {/* menu */}
            {/* <strong>Matriz Tuxpan, Veracruz</strong>
            <br /> Demetrio Ruiz Malerva #65 Local 5E Col. Zapote Gordo Tuxpan,
            Veracruz
            <br /> Telefono: 01-800-838-62-53
            <br />
            Telefonos para Soporte 783-834-00-06, 783-835-97-00 ó 783-834-00-09
            <br />
            <br />
            <strong>Suc. Llano enmedio, Veracruz</strong>
            <br />
            Avenida Independencia No. 75 Primer Piso Colonia Centro Localidad
            Llano Enmedio, Municipio de Ixhuatlán de Madero, Veracruz <br />
            Whatsaap 7461135308 7838359700 ó 7838340009
            <br />
            <br />
            <strong>Suc. Actopan Hidalgo</strong>
            <br />
            Calle Hidalgo No. 175 Col. Rojo Gómez Actopan, Hidalgo <br />
            <br />
            <strong>Suc. Huachinango, Puebla</strong>
            <br />
            Calle Juárez No. 29 Col. Centro Huauchinango, Puebla <br />
            <br /> */}
            <h3>Follow us</h3>
            <BsFacebook
              size={30}
              href="https://www.facebook.com/DigyNetworks"
            />
          </Col>
        </Row>
        <Row id="copyright">
          <Col xl={12} className="text-center">
            ©2023 Copyright David 
          </Col>
        </Row>
      </Container>
    </section>
  );
};
