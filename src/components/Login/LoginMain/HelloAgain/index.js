import LoginTitle from "../../../Title/LoginTitle"
import LoginInput from "../../../Input/LoginInput"
import RedButton from "../../../Button"
import ContinueWith from "../../../ContinueWith"
import "./style.css";


import { useState } from "react"
export default function HelloAgain({onClick,
onNext}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    return (<>

        <div>
            <LoginTitle value='Hello again!' />
        </div>
        <div>
            <LoginInput title='Email' value={email} placeholder='Enter Your Email' id='Email' />
        </div>
        <div className="hello-again-password">
            <LoginInput title='Password' value={password} placeholder='Enter Your Password' id='Password' />
            <div className="hello-again-forgotpassword" onClick={onClick}>Forgot password?</div>
        </div>
        <div>
            <RedButton value='Login' id='Login' onClick={onNext} /></div>
        <div>
            <ContinueWith />
        </div>


    </>)

}