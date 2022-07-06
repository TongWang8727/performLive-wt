import "./style.css";
export default function TextNotice({ value }) {
    return (<>
        <div className="textnotice-frame">
            {value}
        </div>
    </>)
}