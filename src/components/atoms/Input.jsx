import Icon from "./Icon"
import "./Input.css"

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange = () => { },
  className,
  icon = "icons/search"
}) {
  return (

    <div className="input-container">
      <div className="input-icon">
        <Icon icon={icon} color={'gray'} size={24} />
      </div>
      <input type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className={`${className} input`}
      >

      </input>
    </div>
  )
}