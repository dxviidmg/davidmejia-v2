import "./particles.css";

export const ParticlesBackground = () => (
  <div className="css-particles" aria-hidden="true">
    {Array.from({ length: 20 }, (_, i) => <span key={i} className="particle" />)}
  </div>
);
