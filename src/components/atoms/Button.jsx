import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  disabled = false,
  type = 'button',
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
