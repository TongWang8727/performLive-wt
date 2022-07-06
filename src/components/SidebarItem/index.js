import SidebarMenuItem from "./SidebarMenuItems/index";
import SidebarTitle from "./SideBarTitle";

import Analytics from "../../../assets/Analytics.png"
import Home from "../../../assets/Home.png"
import Live from "../../../assets/Live.png"
import OrdersShipping from "../../../assets/Orders&Shipping.png"
import PaymentShippingInfo from "../../../assets/Payment&ShippingInfo.png"
import Popular from "../../../assets/Popular.png"
import Products from "../../../assets/Products.png"
import Purchases from "../../../assets/Purchases.png"
import Settings from "../../../assets/Settings.png"
import Upcoming from "../../../assets/Upcoming.png"

import "./style.css";
export default function SidebarItem(){
    return(<>
    <div className="sidebar-frame">
        <div className="sidebar-team">
            <SidebarTitle value='BROWSE'/>
            <SidebarMenuItem value='Home' img={Home}/>
            <SidebarMenuItem value='Live' img={Live}/>
            <SidebarMenuItem value='Upcoming' img={Upcoming}/>
            <SidebarMenuItem value='Popular' img={Popular}/>
        </div>
        <div className="sidebar-team">
            <SidebarTitle value='MY ACCOUNT'/>
            <SidebarMenuItem value='Analytics' img={Analytics}/>
            <SidebarMenuItem value='Products' img={Products}/>
            <SidebarMenuItem value='Orders&Shipping' img={OrdersShipping}/>
            <SidebarMenuItem value='Settings' img={Settings}/>
        </div>
        <div className="sidebar-team">
            <SidebarTitle value='SHOPPING'/>
            <SidebarMenuItem value='Purchases' img={Purchases}/>
            <SidebarMenuItem value='Payment&ShippingInfo' img={PaymentShippingInfo}/>
        </div>
    </div>
    </>)

}