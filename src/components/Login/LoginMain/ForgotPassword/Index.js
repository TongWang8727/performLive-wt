import BackToLoginBtn from "../../../Button/BackToLogin"
import LoginTitle from "../../../Title/LoginTitle"
import TextNotice from "../../../noice"
import LoginInput from "../../../Input/LoginInput"
import RedButton from "../../../Button"
import { useState } from "react"

export default function ForgotPassword({onClick,onBack}) {
    const [inputValue, setInputValue] = useState('')
    return (<>
        <div>
            <BackToLoginBtn onClick={onBack}/>
        </div>
        <div>
            <LoginTitle value='Forgot password?' />
        </div>
        <div>
            <TextNotice value='Enter your email address and we will send you a link to reset your password.' />
        </div>
        <div>
            <LoginInput title='Email' value={inputValue} placeholder='Enter Your Email' id='Email' />
        </div>
        <div>
            <RedButton value='Reset My Password' id='Reset-My-Password' onClick={onClick}/></div>
        <div></div>
    </>)

}