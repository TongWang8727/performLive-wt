import INS from "../../assets/INS.png";
import FaceBook from "../../assets/FaceBook.png";
import Twitter from "../../assets/Twitter.png";
import Google from "../../assets/Google.png";
import Apple from "../../assets/Apple.png";
import "./style.css";

export default function ContinueWith() {
  return (
    <>
      <div className="other-way-login-frame">
        <div className="other-way-login-notice">Or continue with</div>
        <div className="other-way-login-logo">
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
