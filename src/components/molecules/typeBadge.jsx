import Icon from "../atoms/icon";
import Label from "../atoms/label";

const TypeBadge = ({ type }) => {
    return (
        <span className="">
            <Icon type={type} className="inline-block w-4 h-4 mr-1" />
            <Label className={""}>{type}</Label>
        </span>
    )
}

export default TypeBadge;