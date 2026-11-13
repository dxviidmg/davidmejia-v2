import "./logoplate.css";

// Fallback when there is no logo: "Grupo Constructor CARSEV" -> "GC"
const initials = (name) => name.split(/\s+/).filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

// Natural size of each logo file, so the browser reserves space before the image loads (avoids layout shift).
const SIZES = {
  "actumlogos.png": [105, 64], "dataiku.png": [64, 64], "entropia.png": [263, 64], "fixtergeek.png": [353, 64],
  "genone.avif": [184, 104], "hidalgo.png": [64, 64], "itpachuca.png": [62, 64], "ixulabs.svg": [125, 57],
  "plenumsoft.webp": [248, 64], "tec.png": [64, 64], "udemy.png": [33, 64], "utel.webp": [162, 64],
};
const sizeOf = (logo) => { const [width, height] = SIZES[logo.split("/").pop()] || []; return { width, height }; };

// Organization logo on a small white plate, so every logo reads on black and white sections alike.
// `fixed` gives every plate the same width (for aligned lists); otherwise the width follows the logo.
export const LogoPlate = ({ logo, name, fixed = false, className = "" }) => (
  <span className={`logo-plate ${fixed ? "logo-plate-fixed" : ""} ${className}`} aria-hidden="true">
    {logo
      ? <img src={logo} alt="" loading="lazy" {...sizeOf(logo)} />
      : <span className="logo-plate-initials">{initials(name || "")}</span>}
  </span>
);
