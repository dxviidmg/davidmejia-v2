// Colors the closing punctuation of a phrase with the accent: "producto completo." / "¿…juntos?"
export const AccentEnd = ({ text, className = "" }) => {
  const last = text.slice(-1);
  if (!/[.?!]/.test(last)) return text;
  return <>{text.slice(0, -1)}<span className={`accent-end ${className}`}>{last}</span></>;
};
