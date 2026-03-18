import { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLang } from "../../../utils/LangContext";
import "./navbar.css";

const MENU = [
  { id: "banner", key: "home" },
  { id: "about-me", key: "about" },
  { id: "experience", key: "experience" },
  { id: "skills", key: "skills" },
  { id: "education", key: "education" },
  { id: "publications", key: "publications" },
  { id: "certifications", key: "certifications" },
  { id: "projects", key: "projects" },
];

export function NavBar() {
  const { lang, t, toggle } = useLang();
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
          <Nav className="ms-auto align-items-center">
            {MENU.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? "nav-link-active" : "nav-link-default"}
                onClick={() => setActiveLink(item.id)}
              >
                {t.nav[item.key]}
              </Nav.Link>
            ))}
            <button className="lang-toggle" onClick={toggle}>
              {lang === "en" ? "ES" : "EN"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
