import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import "./navbar.css";

const MENU = [
  { id: "banner", label: "Home" },
  { id: "about-me", label: "About" },
  { id: "experience", label: "Experience" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
];

export function NavBar() {
  const [activeLink, setActiveLink] = useState("banner");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <Navbar fixed="top" expand="md" className={scrolled ? "nav-scrolled" : "nav-top"}>
      <Container>
        <Navbar.Brand href="#banner" className="nav-brand">DM</Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto">
            {MENU.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? "nav-link-active" : "nav-link-default"}
                onClick={() => setActiveLink(item.id)}
              >
                {item.label}
              </Nav.Link>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
