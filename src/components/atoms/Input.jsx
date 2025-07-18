import Icon from "./Icon"
import "./Input.css"

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange = () => { },
  className = "",
  icon,
  ...rest
}) {
  return (

    <div className="input-container">
      {
        icon && <div className="input-icon">
          <Icon icon={icon} color={'gray'} size={24} />
        </div>
      }
      <input type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${className} input ${icon ? "input-with-icon" : ""}`}
        {...rest}
      />
    </div>
  )
}