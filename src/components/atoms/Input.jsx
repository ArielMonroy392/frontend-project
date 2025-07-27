import Icon from './Icon';
import styles from './Input.module.css';

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange = () => {},
  className = '',
  icon,
  ...rest
}) {
  return (
    <div className={`${styles.inputContainer} ${className}`}>
      {icon && (
        <div className={styles.inputContainer}>
          <Icon icon={icon} color={'gray'} size={24} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${styles.input} ${icon ? styles.inputWithIcon : ''}`}
        {...rest}
      />
    </div>
  );
}
