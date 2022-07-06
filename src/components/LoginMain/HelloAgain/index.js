import LoginTitle from "../../Title/LoginTitle"
import LoginInput from "../../Input/LoginInput"
import RedButton from "../../Button"
import ContinueWith from "../../ContinueWith"
import Interlinkage from "../../a"


import { useState } from "react"
export default function HelloAgain() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    return (<>

        <div>
            <LoginTitle value='Hello again!' />
        </div>
        <div>
            <LoginInput title='Email' value={email} placeholder='Enter Your Email' id='Email' />
        </div>
        <div>
            <LoginInput title='Password' value={password} placeholder='Enter Your Password' id='Password' />
        </div>
        <div>
            <RedButton value='Login' id='Login' /></div>
        <div>
            <ContinueWith />
        </div>


    </>)

}