const PokemonImage = ({ src, alt, className = '', ...props }) => {
    return (
        <img
            src={`pokemon/${src}`}
            alt={alt}
            className={`object-cover ${className}`}
            {...props}
        />
    );
}

export default PokemonImage;