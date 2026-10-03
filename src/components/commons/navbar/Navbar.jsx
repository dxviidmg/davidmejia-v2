'use client';

import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useLang } from "../../../utils/LangContext";
import { useScroll } from "../../../utils/useScroll";
import { LogoMark } from "../logo/Logo";
import { SECTIONS } from "../../../sections";
import "./navbar.css";

export function NavBar() {
  const { lang, t, toggle } = useLang();
  const [activeLink, setActiveLink] = useState(null);
  const [scrolled, setScrolled] = useState(false);

  useScroll(() => setScrolled(window.scrollY > 50));

  return (
    <Navbar fixed="top" expand="md" variant="dark" className={scrolled ? "nav-scrolled" : "nav-top"}>
      <Container>
        <Navbar.Brand href="#banner" className="nav-brand">
          <LogoMark size={18} className="nav-logo" />
          <span>David Mejía</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="main-nav" />
        <Navbar.Collapse id="main-nav">
          <Nav className="ms-auto align-items-md-center">
            {SECTIONS.map((item) => (
              <Nav.Link
                key={item.id}
                href={`#${item.id}`}
                className={activeLink === item.id ? "nav-link-dm active" : "nav-link-dm"}
                onClick={() => setActiveLink(item.id)}
              >
                {t.nav[item.nav]}
              </Nav.Link>
            ))}
            <button className="lang-toggle" onClick={toggle} aria-label="Change language">
              {lang === "en" ? "ES" : "EN"}
            </button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
