import "./style.css";

export default function NavigationButton({value,isClick,onClick}){
    return (<>
    <div className={isClick ? "navigation-button-frame-click" : "navigation-button-frame"} onClick={onClick}>
      {value}
    </div>
    </>)
}