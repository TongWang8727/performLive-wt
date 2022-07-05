import "./style.css";
import HelloAgainComponent from "./HelloAgain";
export default function LoginMain() {
  return (
    <>
      <div className="loginmain-frame">
        <div className="loginmain-context">
          <HelloAgainComponent/>
        </div>
      </div>
    </>
  );
}
