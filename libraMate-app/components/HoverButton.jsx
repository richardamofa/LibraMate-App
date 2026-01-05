import "./HoverButton.css";

export function HoverButton({
  children = "Button",
  variant = "default",
  icon: Icon,
  onClick,
  className = "",
}) {
  return (
    <button
      onClick={onClick}
      className={`hover-btn ${variant} ${className}`}
    >
      {Icon && <Icon className="btn-icon" />}
      <span className="btn-text">{children}</span>
      <span className="btn-overlay"></span>
    </button>
  );
}
