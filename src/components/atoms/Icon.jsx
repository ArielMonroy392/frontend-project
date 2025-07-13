import './Icon.css';

const Icon = ({ icon, color, size = 15 }) => {
    return (
        <img src={`icons/${icon}.svg`}
            alt={`${icon}`}
            className="icon"
            style={{ color, width: size, height: size }} />
    );
}

export default Icon;