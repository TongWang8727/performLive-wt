import SidebarItem from "./SidebarItem";

import SidebarPersonMessage from "./SidebarPersonMessage";
import "./style.css";

export default function Sidebar({ onAll, onLive ,isAll,isLive}) {
  return (
    <>
      <div className="sidebar-frame">
        <SidebarItem onAll={onAll} onLive={onLive} isAll={isAll} isLive={isLive}/>
        <SidebarPersonMessage />
      </div>
    </>
  );
}
