import styles from './Button.module.css';

export default function Button({
  children,
  variant = 'primary',
  className,
  onClick,
  disabled = false,
  type = 'button',
  size = null
}) {
  return (
    <button
      className={`${styles.button} ${styles[variant]} ${className || ''} ${size && styles[size]}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
    </button>
  );
}
