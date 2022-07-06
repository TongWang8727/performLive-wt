import "./style.css";
import HelloAgain from "./HelloAgain";
import ForgotPassword from "./ForgotPassword/Index";
import CheckInbox from "./CheckInbox";
import Register from "./Register";
import Interlinkage from "../a";
import { useState } from "react";
export default function LoginMain() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isCheckInbox, setIsCheckInbox] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleRegisterChange = () => {};

  const handleForgotPassword = () => {
    console.log(111);
    setIsLogin(false);
    setIsForgotPassword(true);
  };

  const handleLogin = () => {
    console.log(222);
    
  };
  return (
    <>
      <div className="loginmain-frame">
        <div className="loginmain-context">
          {isLogin && (
            <HelloAgain
              onClick={handleForgotPassword}
              onNext={handleLogin}
            />
          )}
          {isForgotPassword && <ForgotPassword />}
          {isCheckInbox && <CheckInbox />}
          {isRegister && <Register />}
        </div>
        {isLogin && (
          <div>
            <Interlinkage
              notice="New to Perform Life?"
              linkValue="Create an account"
              onClick={handleRegisterChange}
            />
          </div>
        )}
        {isRegister && (
          <div>
            <Interlinkage
              notice="Already have an account?"
              linkValue="Login here"
            />
          </div>
        )}
      </div>
    </>
  );
}
