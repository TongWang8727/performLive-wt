import { useState } from "react";
import Search from "../../assets/Search.png";
import "./style.css";
export default function HeaderSearch() {
  const [value, setValue] = useState("");

  const handleSearchChange = (e) => {
    setValue(e.target.value);
  };
  return (
    <>
      <div className="login-header-search-frame">
        <span>
          <img src={Search} alt="" />
        </span>
        <span>
          <input
            value={value}
            placeholder="Search"
            onChange={handleSearchChange}
            className="login-header-search-input"
          />
        </span>
      </div>
    </>
  );
}
