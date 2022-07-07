import Photo from "../../../assets/Sidebar/Photo.png";
import Exit from "../../../assets/Sidebar/Exit.png";
import LifetimeEarnings from "../../../assets/Sidebar/lifetime earnings.png";
import "./style.css";

export default function SidebarPersonMessage() {
  return (
    <>
      <div className="sidebar-person-message-frame">
        <div>
          <img src={LifetimeEarnings} alt="" />
        </div>
        <div className="sidebar-person-message-text">
          <div className="sidebar-person-message-photo">
            <img src={Photo} alt="" />
          </div>
          <div>
            <div className="sidebar-person-message-name">Kenny Semba</div>
            <div className="sidebar-person-message-old">13 Performances</div>
          </div>
          <div className="sidebar-person-message-exitbtn">
            <img src={Exit} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
