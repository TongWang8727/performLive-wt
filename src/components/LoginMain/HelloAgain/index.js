import LoginTitle from "../../Title/LoginTitle"
import LoginInput from "../../Input/LoginInput"
import RedButton from "../../Button"
import ContinueWith from "../../ContinueWith"


import { useState } from "react"
export default function HelloAgainComponent(){
    const [inputValue,setInputValue]=useState('')
    const [password,setPassword]=useState('')
    return(<>
    <div>
        <LoginTitle value='Hello again!'/>
        <LoginInput title='Email' value={inputValue} placeholder='Enter Your Email' id='Email'/>
        <LoginInput title='Password' value={password} placeholder='Enter Your Password' id='Password'/>
        <RedButton value='Login' id='Login'/>
        <ContinueWith/>
    </div>
    </>)

}