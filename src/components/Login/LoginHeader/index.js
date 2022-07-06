import Logo from "../../../assets/Group 1825.png";
import Menu from "../../../assets/Group 1823.png";
import Cart from "../../../assets/Group 1804.png";
import "./style.css";
import HeaderSearch from "../../HeaderSearch";

export default function LoginHeader() {
  return (
    <>
      <div className="loginheader-frame">
        <div className="loginheader-left">
          <div className="loginheader-left-menu"><img src={Menu} alt="" /></div>
          <div className="loginheader-left-logo"><img src={Logo} alt=""/></div>
        </div>
        <div>
            <HeaderSearch/>
        </div>
        <div className="loginheader-right-cart">
            <img src={Cart} alt=""/>
        </div>

      </div>
    </>
  );
}
