'use client';

import { Container } from "react-bootstrap";
import { BsLinkedin, BsGithub, BsEnvelope, BsWhatsapp } from "react-icons/bs";
import { NavBar } from "../../commons/navbar/Navbar";
import { useLang } from "../../../utils/LangContext";
import { yearsOfExperience } from "../../../utils/dateUtils";
import { CONTACT } from "../../../utils/contact";
import { AccentEnd } from "../../commons/text/AccentEnd";
import "./banner.css";

export function Banner() {
  const { t, cvUrl } = useLang();

  return (
    <section id="banner">
      <NavBar />
      <Container className="banner-inner">
        <div className="banner-name-block">
          <p className="banner-label banner-enter"><span className="banner-status" />{t.banner.label}</p>
          <h1 className="banner-name">
            {t.banner.name.split(" ").map((word, i) => (
              <span key={word} className="reveal-line">
                <span className="reveal-inner" style={{ animationDelay: `${0.25 + i * 0.15}s` }}>{word}</span>
              </span>
            ))}
          </h1>
        </div>

        <div className="banner-statement banner-enter banner-enter-delay-2">
          <p className="banner-quote">
            <span className="quiet">{t.banner.quiet}</span>
            <span className="loud"><AccentEnd text={t.banner.loud} className="blink" /></span>
          </p>
          <p className="banner-lead">{t.banner.lead.replace("{years}", yearsOfExperience)}</p>
          <div className="banner-actions">
            <a href={cvUrl} target="_blank" rel="noreferrer" className="btn-dm">{t.banner.ctaCv} ↓</a>
            <a href={CONTACT.email} target="_blank" rel="noreferrer" className="banner-link"><BsEnvelope /> {t.banner.ctaEmail}</a>
            <a href={CONTACT.whatsapp} target="_blank" rel="noreferrer" className="banner-link"><BsWhatsapp className="social-whatsapp" /> {t.banner.ctaWhatsapp}</a>
          </div>
        </div>
      </Container>

      <Container className="banner-bar banner-enter banner-enter-delay-3">
        <a href="#about-me" className="banner-scroll">
          <svg width="12" height="16" viewBox="0 0 12 16" aria-hidden="true"><path d="M6 1v13M1 9l5 5 5-5" fill="none" stroke="currentColor" strokeWidth="1.5" /></svg>
          {t.banner.scroll}
        </a>
        <span className="banner-social">
          <a href={CONTACT.linkedin} target="_blank" rel="noreferrer"><BsLinkedin className="social-linkedin" /> LinkedIn ↗</a>
          <a href={CONTACT.github} target="_blank" rel="noreferrer"><BsGithub className="social-github" /> GitHub ↗</a>
        </span>
      </Container>
    </section>
  );
}
