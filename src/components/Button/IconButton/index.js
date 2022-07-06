import "./style.css";
export default function IconButton({ style, src, value }) {
  return (
    <>
      {style === "left" && (
        <div className="icon-button-frame">
          <img src={src} alt="" />
          <div className="icon-button-text">{value}</div>
        </div>
      )}
      {style === "right" && (
        <div className="icon-button-frame">
          <div className="icon-button-text">{value}</div>
          <img src={src} alt="" />
        </div>
      )}
    </>
  );
}
