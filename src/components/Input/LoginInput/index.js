import { useEffect, useState } from "react";
import "./style.css";
export default function LoginInput({
  title,
  value,
  placeholder,
  id,
  onchange,
  className,
}) {
  return (
    <>
      <div className="login-input-frame">
        <div className="login-input-title">{title}</div>
        <div className="login-input-input">
          <input
            placeholder={placeholder}
            value={value}
            id={id}
            onChange={onchange || value}
            className={className}
          />
        </div>
      </div>
    </>
  );
}
