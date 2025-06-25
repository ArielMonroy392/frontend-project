import "./Input.css"

export default function Input({
  type = "text",
  placeholder = "",
  value,
  onChange = () => { },
  className,
  icon = ""
}) {
  return (

    <div className="input-container">
      <span className="material-symbols-outlined icon">
        {icon}
      </span>
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