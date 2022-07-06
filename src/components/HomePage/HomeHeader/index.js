import Logo from "../../../assets/Logo.png";
import Menu from "../../../assets/Menu.png";
import Cart from "../../../assets/Cart.png";
import "./style.css";
import HeaderSearch from "../../HeaderSearch";
import IconButton from "../../Button/IconButton";
import Add from "../../../assets/Add.png"

export default function HomeHeader() {
  return (
    <>
      <div className="home-header-frame">
        <div className="home-header-left">
          <div className="home-header-left-menu"><img src={Menu} alt="" /></div>
          <div className="home-header-left-logo"><img src={Logo} alt=""/></div>
        </div>
        <div>
            <HeaderSearch/>
        </div>
        <div className="home-header-right-cart">
            <img src={Cart} alt=""/>
        </div>
        <div className="home-header-redbtn">
            <IconButton style='left' value='New Performance' src={Add}/>
        </div>

      </div>
    </>
  );
}
