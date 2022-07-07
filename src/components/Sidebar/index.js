import SidebarItem from "./SidebarItem";

import SidebarPersonMessage from "./SidebarPersonMessage";
import "./style.css";

export default function Sidebar() {
  return (
    <>
      <div className="sidebar-frame">
        <SidebarItem />
        <SidebarPersonMessage/>
      </div>
    </>
  );
}
