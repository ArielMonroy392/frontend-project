import "./Button.css";

export default function Button({ children, variant = "primary", className, onClick, disabled = false }) {
  return (
    <button className={`button ${variant} ${className || ""} ${disabled ? "disabled" : ""}`} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
