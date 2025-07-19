import Icon from "../atoms/Icon";
import Text from "../atoms/Text";
import './TypeBadge.css';

const TypeBadge = ({ type }) => {
    return (
        <span className={`badge ${type}`}>
            <Icon icon={`${type}`} />
            <Text className="text-small capitalize font-medium">{type}</Text>
        </span>
    )
}

export default TypeBadge;