import CancelAndReturn from "../../../assets/Performance/CancelAndReturn.png";
import { Link } from "react-router-dom";
import "./style.css";
export default function PerformanceSubtitle({ title, num }) {
  return (
    <>
      <div className="performance-subtitle-frame">
        <div className="performance-subtitle-btn">
          <Link to="/HomePage">
            <img src={CancelAndReturn} alt="" />
          </Link>
        </div>
        <div className="performance-subtitle-title">{title}</div>
        <div className="performance-subtitle-step">Step {num} of 3</div>
      </div>
    </>
  );
}
