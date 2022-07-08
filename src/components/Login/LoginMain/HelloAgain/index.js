import LoginTitle from "../../../Title/LoginTitle";
import LoginInput from "../../../Input/LoginInput";
import RedButton from "../../../Button";
import ContinueWith from "../../../ContinueWith";
import { Link } from 'react-router-dom'
import "./style.css";
import store from "../../../../redux/store"

import { useState } from "react";
export default function HelloAgain({ onClick}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  

  const handleLogin=()=>{
    const loginMessage={
      email:email,
      password:password
    }
    const action={
      type:'login',
      data:loginMessage
    }
    store.dispatch(action);
    const result=store.getState()
    console.log('recive',result)
  }
  
  const handleEmail=(e)=>{
    setEmail(e.target.value)
  }

  return (
    <>
      <div>
        <LoginTitle value="Hello again!" />
      </div>
      <div>
        <LoginInput
          title="Email"
          value={email}
          placeholder="Enter Your Email"
          id="Email"
          key="Email"
          onchange={(e)=>{setEmail(e.target.value)}}
        />
      </div>
      <div className="hello-again-password">
        <LoginInput
          title="Password"
          value={password}
          placeholder="Enter Your Password"
          id="Password"
          key="Password"
          onchange={(e)=>{setPassword(e.target.value)}}
        />
        <div className="hello-again-forgotpassword" onClick={onClick}>
          Forgot password?
        </div>
      </div>
      <div>
        <Link to="/HomePage"><RedButton value="Login" id="Login" onClick={handleLogin}/></Link>
      </div>
      <div>
        <ContinueWith />
      </div>
    </>
  );
}
