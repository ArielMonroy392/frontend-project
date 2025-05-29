import Icon from "../atoms/icon";
import Text from "../atoms/Text";
import './TypeBadge.css'; // Assuming you have a CSS file for styling

const TypeBadge = ({ type }) => {
    return (
        <span className={`badge ${type}`}>
            <Icon type={type} />
            <Text className="text-small capitalize font-medium">{type}</Text>
        </span>
    )
}

export default TypeBadge;