import { useState } from "react";
import "./style.css";
export default function LoginInput({title,value,placeholder,id,onchange,className}){
    const [ivalue,setIvalue]=useState('')
    const handleChange=(e)=>{
        setIvalue(e.target.value)

    }

    return(<>
    <div className="logininput-frame">
        <div className="logininput-title">{title}</div>
        <div className="logininput-input">
            <input placeholder={placeholder} value={ivalue} id={id} onChange={handleChange} className={className}/>
        </div>
    </div>
    </>)
}