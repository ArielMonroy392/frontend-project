import Icon from '../atoms/Icon';
import Text from '../atoms/Text';
import './TypeBadge.css';

const TypeBadge = ({
  type,
  onlyIcon = false,
  size = 15,
  rounded = 'normal',
}) => {
  return (
    <span
      className={`badge ${rounded === 'normal' ? 'rounded' : 'rounded-large'} ${type}`}
    >
      <Icon icon={`${type}`} size={size} />
      {!onlyIcon && (
        <Text className="text-small capitalize font-medium">{type}</Text>
      )}
    </span>
  );
};

export default TypeBadge;
