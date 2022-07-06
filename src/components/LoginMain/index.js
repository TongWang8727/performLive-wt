import "./style.css";
import HelloAgain from "./HelloAgain";
import ForgotPassword from "./ForgotPassword/Index";
import CheckYourInbox from "./CheckYourInbox";
import CreateAnAccount from "./CreateAnAccount";
import Interlinkage from "../a";
export default function LoginMain() {
  return (
    <>
      <div className="loginmain-frame">
        <div className="loginmain-context">
          {/* <HelloAgain /> */}
          {/* <ForgotPassword/> */}
          {/* <CheckYourInbox/> */}
          <CreateAnAccount/>
        </div>
        <div>
          <Interlinkage notice='New to Perform Life?' linkValue='Create an account'/>
        </div>
        <div>
          <Interlinkage notice='Already have an account?' linkValue='Login here'/>
        </div>
      </div>
    </>
  );
}
