import "./Button.css";

export default function Button ({ children, variant = "primary", className, onClick }) {
  return (
    <button className={`button ${variant } ${className || ""}`} onClick={onClick}>
      {children}
    </button>
  );
};
