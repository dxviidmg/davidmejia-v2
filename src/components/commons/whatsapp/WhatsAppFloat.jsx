import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { useLang } from "../../../utils/LangContext";
import { CONTACT } from "../../../utils/contact";
import { useScroll } from "../../../utils/useScroll";
import "./whatsapp.css";

// Visible between the hero and the contact section: both already have their own WhatsApp link
export const WhatsAppFloat = () => {
  const { t } = useLang();
  const [shown, setShown] = useState(false);

  useScroll(() => {
    const pastHero = window.scrollY > window.innerHeight * 0.6;
    // The footer is lazy-loaded, so look it up on every scroll instead of once
    const footer = document.getElementById("footer");
    const atFooter = footer && footer.getBoundingClientRect().top < window.innerHeight * 0.85;
    setShown(Boolean(pastHero && !atFooter));
  });

  return (
    <a
      href={CONTACT.whatsapp}
      target="_blank"
      rel="noreferrer"
      className={`whatsapp-float ${shown ? "is-shown" : ""}`}
      aria-label={t.footer.ctaWhatsapp}
      title={t.footer.ctaWhatsapp}
      tabIndex={shown ? 0 : -1}
    >
      <BsWhatsapp />
    </a>
  );
};
