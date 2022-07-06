import "./style.css";

export default function Interlinkage({ notice, linkValue, onClick }) {
  return (
    <>
      <div className="link-notice">
        {notice}
        <span className="link" onClick={onClick}>
          {linkValue}
        </span>
      </div>
    </>
  );
}
