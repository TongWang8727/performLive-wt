import "./style.css";

export default function  Interlinkage({notice,linkValue}){
    return(<>
    <div className="link-notice">{notice}<span className="link">{linkValue}</span></div>
    </>)
}