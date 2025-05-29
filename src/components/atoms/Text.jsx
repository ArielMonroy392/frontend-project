import './Text.css';

const Text = ({ className, children }) => {
    return (
        <span className={className}>
            {children}
        </span>
    )
}

export default Text
