import LoginTitle from "../../Title/LoginTitle"
import TextNotice from "../../noice"
import RedButton from "../../Button"

export default function CheckYourInbox() {
    return (<>
        <div>
            <LoginTitle value='Check Your Inbox!' />
        </div>
        <div>
            <TextNotice value='Check your email for a link to reset your password. If it doesn’t appear within a few minutes, check your spam folder.' />
        </div>
        <div>
            <RedButton value='Return to Login' id='Return-to-Login' /></div>
        <div></div>
    </>)

}