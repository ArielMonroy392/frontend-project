import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import styles from './TypeBadge.module.css';
import clsx from 'clsx';

const TypeBadge = ({ type, onlyIcon = false, size = 15, rounded }) => {
  return (
    <span
      className={clsx(
        styles.badge,
        rounded === 'large' && styles.roundedLarge,
        `${type}`
      )}
    >
      <Icon icon={type} size={size} />
      {!onlyIcon && (
        <Text className="textSmall capitalize fontMedium">{type}</Text>
      )}
    </span>
  );
};

export default TypeBadge;
