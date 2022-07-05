import "./style.css";
export default function LoginInput({title,value,placeholder,id}){
    return(<>
    <div className="logininput-frame">
        <div className="logininput-title">{title}</div>
        <div className="logininput-input">
            <input placeholder={placeholder} value={value} id={id}/>
        </div>
    </div>
    </>)
}