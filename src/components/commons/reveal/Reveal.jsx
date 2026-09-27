import { useInView } from "../../../utils/useInView";

// Fades its element in when it enters the viewport.
// <Reveal as="article" direction="left" delay={0.1} className="…">…</Reveal>
// Children can be a function of `visible` for content that animates on its own (bars, counters).
export const Reveal = ({ as: Tag = "div", direction = "up", delay = 0, className = "", style, children, ...rest }) => {
  const [ref, visible] = useInView();
  return (
    <Tag
      ref={ref}
      className={`fade-${direction} ${visible ? "visible" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}s`, ...style } : style}
      {...rest}
    >
      {typeof children === "function" ? children(visible) : children}
    </Tag>
  );
};
