import { useState } from "react";
import Search from "../../assets/Group 2048.png";
import './style.css'
export default function HeaderSearch() {
    const [value,setValue]=useState('')

    const handleSearchChange=(e)=>{
        setValue(e.target.value)
    }
  return (
    <>
      <div className="loginheader-search-frame">
        <span><img src={Search} alt=''/></span>
        <span><input value={value} placeholder='Search' onChange={handleSearchChange} className='loginheader-search-input'/></span>
      </div>
    </>
  );
}
