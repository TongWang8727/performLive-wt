import SidebarMenuItem from "../SidebarMenuItems/index";
import SidebarTitle from "../SidebarTitle/index";

import Analytics from "../../../assets/Sidebar/Analytics.png";
import Home from "../../../assets/Sidebar/Home.png";
import Live from "../../../assets/Sidebar/Live.png";
import OrdersShipping from "../../../assets/Sidebar/Orders&Shipping.png";
import PaymentShippingInfo from "../../../assets/Sidebar/Payment&ShippingInfo.png";
import Popular from "../../../assets/Sidebar/Popular.png";
import Products from "../../../assets/Sidebar/Products.png";
import Purchases from "../../../assets/Sidebar/Purchases.png";
import Settings from "../../../assets/Sidebar/Settings.png";
import Upcoming from "../../../assets/Sidebar/Upcoming.png";

import "./style.css";
export default function SidebarItem({ onAll, onLive,isAll,isLive }) {
  return (
    <>
      <div className="sidebar-item-frame">
        <div className="sidebar-team">
          <SidebarTitle value="BROWSE" />
          <SidebarMenuItem value="Home" img={Home} onClick={onAll} isClick={isAll} key='Home'/>
          <SidebarMenuItem value="Live" img={Live} onClick={onLive} isClick={isLive} key='Live'/>
          <SidebarMenuItem value="Upcoming" img={Upcoming} key='Upcoming'/>
          <SidebarMenuItem value="Popular" img={Popular} key='Popular'/>
        </div>
        <div className="sidebar-team">
          <SidebarTitle value="MY ACCOUNT" />
          <SidebarMenuItem value="Analytics" img={Analytics} key='Analytics'/>
          <SidebarMenuItem value="Products" img={Products} key='Products'/>
          <SidebarMenuItem value="Orders&Shipping" img={OrdersShipping} key='OrdersShipping'/>
          <SidebarMenuItem value="Settings" img={Settings} key='Settings'/>
        </div>
        <div className="sidebar-team">
          <SidebarTitle value="SHOPPING" />
          <SidebarMenuItem value="Purchases" img={Purchases} key='Purchases'/>
          <SidebarMenuItem
            value="Payment&ShippingInfo"
            img={PaymentShippingInfo}
            key='PaymentShippingInfo'
          />
        </div>
      </div>
    </>
  );
}
