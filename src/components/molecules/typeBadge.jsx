import Icon from "../atoms/icon";
import Text from "../atoms/Text";
import './TypeBadge.css';

const TypeBadge = ({ type }) => {
    return (
        <span className={`badge ${type.type.name}`}>
            <Icon type={type.type.name} />
            <Text className="text-small capitalize font-medium">{type.type.name}</Text>
        </span>
    )
}

export default TypeBadge;