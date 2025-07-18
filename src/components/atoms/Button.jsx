import "./Button.css";

export default function Button({ children, variant = "primary", className, onClick, disabled = false, type = "button" }) {
  return (
    <button className={`button ${variant} ${className || ""} ${disabled ? "disabled" : ""}`} onClick={onClick} disabled={disabled} type={type}>
      {children}
    </button>
  );
};
