import styles from './Text.module.css';
import clsx from 'clsx';

const Text = ({ className = '', children, style }) => {
  const resolvedClasses = className
    .split(' ')
    .map(cls => styles[cls])
    .filter(Boolean);

  return (
    <span className={clsx(resolvedClasses)} style={style}>
      {children}
    </span>
  );
};

export default Text;
