import Logo from "../../../assets/Logo.png";
import Menu from "../../../assets/Menu.png";
import Cart from "../../../assets/Cart.png";
import "./style.css";
import HeaderSearch from "../../HeaderSearch";

export default function LoginHeader() {
  return (
    <>
      <div className="login-header-frame">
        <div className="login-header-left">
          <div className="login-header-left-menu"><img src={Menu} alt="" /></div>
          <div className="login-header-left-logo"><img src={Logo} alt=""/></div>
        </div>
        <div>
            <HeaderSearch/>
        </div>
        <div className="login-header-right-cart">
            <img src={Cart} alt=""/>
        </div>

      </div>
    </>
  );
}
