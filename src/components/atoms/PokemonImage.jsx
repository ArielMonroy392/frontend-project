import './PokemonImage.css';

const PokemonImage = ({ src, alt, className = '', ...props }) => {
    return (
        <img
            src={src}
            alt={alt}
            className={`${className}`}
            {...props}
        />
    );
}

export default PokemonImage;