import LoginHeader from "../../components/LoginHeader/index";
import LoginMain from "../../components/LoginMain/index";
import LoginFooter from "../../components/LoginFooter";

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
