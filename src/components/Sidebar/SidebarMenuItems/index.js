import "./style.css";
export default function SidebarMenuItem({ value,img }) {
  return (
    <>
      <div className="sidebar-menu-item-frame">
        <img src={img} alt=''/>
        <div className="sidebar-menu-item-title">{value}</div>
      </div>
    </>
  );
}
