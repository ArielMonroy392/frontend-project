import './Text.css';

const Text = ({ className, children, style }) => {
  return <span className={className} style={style}>{children}</span>;
};

export default Text;
