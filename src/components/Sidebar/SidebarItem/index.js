import SidebarMenuItem from "../SidebarMenuItems/index";
import SidebarTitle from "../SidebarTitle/index";

import Analytics from "../../../assets/Sidebar/Analytics.png"
import Home from "../../../assets/Sidebar/Home.png"
import Live from "../../../assets/Sidebar/Live.png"
import OrdersShipping from "../../../assets/Sidebar/Orders&Shipping.png"
import PaymentShippingInfo from "../../../assets/Sidebar/Payment&ShippingInfo.png"
import Popular from "../../../assets/Sidebar/Popular.png"
import Products from "../../../assets/Sidebar/Products.png"
import Purchases from "../../../assets/Sidebar/Purchases.png"
import Settings from "../../../assets/Sidebar/Settings.png"
import Upcoming from "../../../assets/Sidebar/Upcoming.png"


import "./style.css";
export default function SidebarItem(){
    return(<>
    <div className="sidebar-item-frame">
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