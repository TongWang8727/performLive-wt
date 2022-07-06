import LoginTitle from "../../../Title/LoginTitle"
import LoginInput from "../../../Input/LoginInput"
import RedButton from "../../../Button"
import ContinueWith from "../../../ContinueWith"
import "./style.css";

import { useState } from "react"
export default function Register({onClick}) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (<>

        <div>
            <LoginTitle value='Create an account' />
        </div>
        <div>
            <LoginInput title='Email' value={email} placeholder='Enter Your Email' id='Email' />
        </div>
        <div className="register-password">
            <LoginInput title='Password' value={password} placeholder='Enter Your Password' id='Password' />
            <LoginInput title='' value={password} placeholder='Confirm Your Password' id='Confirm-Password' className='confirm-password'/>
        </div>
        <div>
            <RedButton value='Register' id='Register' onClick={onClick}/>
        </div>
        <div>
            <ContinueWith />
        </div>


    </>)

}