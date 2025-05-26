const Icon = ({ name, className = '', ...props }) => {
    return (
        <image src={`/icons/${name}.svg`}
            alt={name}
            className={`object-cover ${className}`}
            {...props}>
        </image>
    );
}

export default Icon;