import "./logoplate.css";

// Fallback when there is no logo: "Grupo Constructor CARSEV" -> "GC"
const initials = (name) => name.split(/\s+/).filter((w) => w.length > 2).slice(0, 2).map((w) => w[0]).join("").toUpperCase();

// Organization logo on a small white plate, so every logo reads on black and white sections alike.
// `fixed` gives every plate the same width (for aligned lists); otherwise the width follows the logo.
export const LogoPlate = ({ logo, name, fixed = false, className = "" }) => (
  <span className={`logo-plate ${fixed ? "logo-plate-fixed" : ""} ${className}`} aria-hidden="true">
    {logo
      ? <img src={process.env.PUBLIC_URL + logo} alt="" loading="lazy" />
      : <span className="logo-plate-initials">{initials(name || "")}</span>}
  </span>
);
