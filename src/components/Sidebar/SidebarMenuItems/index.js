import "./style.css";
export default function SidebarMenuItem({ value,img,onClick,isClick}) {
  return (
    <>
      <div className={isClick ? "sidebar-menu-item-frame-active" : "sidebar-menu-item-frame"}>
        <img src={img} alt='' />
        <div className={isClick ? "sidebar-menu-item-title-active" : "sidebar-menu-item-title"} onClick={onClick}>{value}</div>
      </div>
    </>
  );
}
