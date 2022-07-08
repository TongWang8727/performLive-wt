import Logo from "../../../assets/Logo.png";
import Menu from "../../../assets/Menu.png";
import Cart from "../../../assets/Cart.png";
import "./style.css";

export default function PerformanceHeader() {
  return (
    <>
      <div className="perform-header-frame">
        <div className="perform-header-left">
          <div className="perform-header-left-menu">
            <img src={Menu} alt="" />
          </div>
          <div className="perform-header-left-logo">
            <img src={Logo} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
