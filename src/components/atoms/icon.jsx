import './Icon.css';

const Icon = ({ type }) => {
    return (
        <img src={`/icons/${type}.svg`}
            alt={type}
            className="type-icon" />
    );
}

export default Icon;