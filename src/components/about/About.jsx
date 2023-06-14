import { Col, Row, Container, Image } from "react-bootstrap";
import { useEffect, useState } from "react";
import about from "../data/about.json";

export const About = () => {
  const img =
    "https://cdn.awsli.com.br/600x450/1601/1601923/produto/129894767/6bba6d6010.jpg";
  return (
    <section>
      <Container className="">
        <Row className="paddings d-flex align-items-center">
          <Col md={6} className="">
            <h2 className="text-center">About me</h2>
            {about.map((e, i) => {
              return (
                <p key={i} className="text-justify">
                  {e}
                </p>
              );
            })}
          </Col>
          <Col md={1}></Col>
          <Col md={4} className="text-center">
            <Image roundedCircle src={img} className="w-100" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};
