const Label = ({className, children, ...props}) => {
    return (
        <span className={className} {...props}>
            {children}
        </span>
    )
}

export default Label;