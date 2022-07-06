import LoginHeader from "../../components/Login/LoginHeader/index"
import LoginMain from "../../components/Login/LoginMain/index";
import LoginFooter from "../../components/Login/LoginFooter";

import './style.css'
export default function Login() {
  return (
    <>
      <div>
        <LoginHeader />
      </div>
      <div>
        <LoginMain/>
      </div>
      <div>
        <LoginFooter/>
      </div>
    </>
  );
}
