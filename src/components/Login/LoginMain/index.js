import "./style.css";
import HelloAgain from "./HelloAgain";
import ForgotPassword from "./ForgotPassword/Index";
import CheckInbox from "./CheckInbox";
import Register from "./Register";
import Interlinkage from "../../a";
import { useState } from "react";
export default function LoginMain() {
  const [isLogin, setIsLogin] = useState(true);
  const [isForgotPassword, setIsForgotPassword] = useState(false);
  const [isCheckInbox, setIsCheckInbox] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const handleRegister = () => {
    setIsLogin(false);
    setIsRegister(true);
  };

  const handleForgotPassword = () => {
    setIsLogin(false);
    setIsForgotPassword(true);
  };

  const handleLogin = () => {
    console.log(222);
  };

  const handleResetPassword = () => {
    setIsForgotPassword(false);
    setIsCheckInbox(true);
  };

  const handleReturnToLogin = () => {
    setIsCheckInbox(false);
    setIsLogin(true);
  };
  const handleBackToLogin = () => {
    setIsRegister(false);
    setIsForgotPassword(false);
    setIsLogin(true);
  };
  return (
    <>
      <div className="login-main-frame">
        <div className="login-main-context">
          {isLogin && (
            <HelloAgain onClick={handleForgotPassword} onNext={handleLogin} />
          )}
          {isForgotPassword && (
            <ForgotPassword
              onClick={handleResetPassword}
              onBack={handleBackToLogin}
            />
          )}
          {isCheckInbox && <CheckInbox onClick={handleReturnToLogin} />}
          {isRegister && <Register onClick={handleBackToLogin} />}
        </div>
        {isLogin && (
          <div>
            <Interlinkage
              notice="New to Perform Life?"
              linkValue="Create an account"
              onClick={handleRegister}
            />
          </div>
        )}
        {isRegister && (
          <div>
            <Interlinkage
              notice="Already have an account?"
              linkValue="Login here"
              onClick={handleBackToLogin}
            />
          </div>
        )}
      </div>
    </>
  );
}
