import { useState } from "react";
import "./style.css";
export default function LoginInput({
  title,
  value,
  placeholder,
  id,
  onchange,
  className,
}) {
  const [ivalue, setIvalue] = useState("");
  const handleChange = (e) => {
    setIvalue(e.target.value);
  };

  return (
    <>
      <div className="login-input-frame">
        <div className="login-input-title">{title}</div>
        <div className="login-input-input">
          <input
            placeholder={placeholder}
            value={ivalue}
            id={id}
            onChange={handleChange}
            className={className}
          />
        </div>
      </div>
    </>
  );
}
