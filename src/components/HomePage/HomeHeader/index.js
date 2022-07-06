import Logo from "../../../assets/Group 1825.png";
import Menu from "../../../assets/Group 1823.png";
import Cart from "../../../assets/Group 1804.png";
import "./style.css";
import HeaderSearch from "../../HeaderSearch";
import RedButton from "../../Button/index"

export default function LoginHeader() {
  return (
    <>
      <div className="homeheader-frame">
        <div className="homeheader-left">
          <div className="homeheader-left-menu"><img src={Menu} alt="" /></div>
          <div className="homeheader-left-logo"><img src={Logo} alt=""/></div>
        </div>
        <div>
            <HeaderSearch/>
        </div>
        <div className="homeheader-right-cart">
            <img src={Cart} alt=""/>
        </div>
        <div className="homeheader-redbtn">
            <RedButton/>
        </div>

      </div>
    </>
  );
}
