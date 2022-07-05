import INS from "../../assets/Group 263.png";
import FaceBook from "../../assets/Group 264.png";
import Twitter from "../../assets/Group 265.png";
import Google from "../../assets/Group 266.png";
import Apple from "../../assets/Group 549.png";
import "./style.css";

export default function ContinueWith() {
  return (
    <>
      <div className="otherway-login-frame">
        <div className="otherway-login-notice">Or continue with</div>
        <div className="otherway-login-logo">
          <img src={Google} alt="" />
          <img src={FaceBook} alt="" />
          <img src={INS} alt="" />
          <img src={Twitter} alt="" />
          <img src={Apple} alt="" />
        </div>
      </div>
    </>
  );
}
