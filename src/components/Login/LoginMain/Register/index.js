import LoginTitle from "../../../Title/LoginTitle";
import LoginInput from "../../../Input/LoginInput";
import RedButton from "../../../Button";
import ContinueWith from "../../../ContinueWith";
import "./style.css";
import store from "../../../../redux/store";

import { useState } from "react";
export default function Register({ onClick }) {
  const [email, setEmail] = useState("");
  const [firstPassword, setFirstPassword] = useState("");
  const [secondPassword, setSecondPassword] = useState("");

  const handleRegister = () => {
    const message = {
      email: email,
      password: firstPassword,
    };
    const action = {
      type: "register",
      data: message,
    };
    if (firstPassword === secondPassword) {
      store.dispatch(action);
    }
    onClick();
  };
  return (
    <>
      <div>
        <LoginTitle value="Create an account" />
      </div>
      <div>
        <LoginInput
          title="Email"
          value={email}
          placeholder="Enter Your Email"
          id="Email"
          key="Email"
          onchange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className="register-password">
        <LoginInput
          title="Password"
          value={firstPassword}
          placeholder="Enter Your Password"
          id="firstPassword"
          key="firstPassword"
          onchange={(e) => {
            setFirstPassword(e.target.value);
          }}
        />
        <LoginInput
          title=""
          value={secondPassword}
          placeholder="Confirm Your Password"
          id="Confirm-Password"
          key="Confirm-Password"
          className="confirm-password"
          onchange={(e) => {
            setSecondPassword(e.target.value);
          }}
        />
      </div>
      <div>
        <RedButton
          value="Register"
          id="Register"
          onClick={handleRegister}
        />
      </div>
      <div>
        <ContinueWith />
      </div>
    </>
  );
}
