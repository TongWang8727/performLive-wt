import "./style.css";
export default function TextNotice({ value }) {
    return (<>
        <div className="text-notice-frame">
            {value}
        </div>
    </>)
}