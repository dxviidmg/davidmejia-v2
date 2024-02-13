import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";
import { capitalizeString } from "../../../utils/utils";

export function NavBar() {
  const [activeLink, setActiveLink] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  const menu = ["banner", "about-me", "experience", "skills", "certifications", "projects"];

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };
  return (
    <Navbar
      fixed="top"
      expand="md"
      className={scrolled ? "scrolled" : "unscrolled"}
    >
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {menu.map((option, index) => {
              return (
                <Nav.Link key={index}
                  href={`#${option}`}
                  className={
                    activeLink === option ? "active navbar-link" : "navbar-link"
                  }
                  onClick={() => onUpdateActiveLink(option)}
                >
                  <span className="link-text">
                    {index === 0
                      ? "Home"
                      : capitalizeString(option).replace("-", " ")}
                  </span>
                </Nav.Link>
              );
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
