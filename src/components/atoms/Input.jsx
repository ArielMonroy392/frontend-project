import Icon from './Icon';
import styles from './Input.module.css';
import clsx from 'clsx';

export default function Input({
  type = 'text',
  placeholder = '',
  value,
  onChange = () => {},
  className = '',
  icon,
  ...rest
}) {
  const resolvedClasses = className
    .split(' ')
    .map(cls => styles[cls])
    .filter(Boolean);

  return (
    <div className={styles.inputContainer}>
      {icon && (
        <div className={styles.inputIcon}>
          <Icon icon={icon} color="gray" size={24} />
        </div>
      )}
      <input
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={clsx(
          styles.input,
          icon && styles.inputWithIcon,
          ...resolvedClasses
        )}
        {...rest}
      />
    </div>
  );
}
