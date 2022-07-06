import "./style.css";
export default function IconButton({ style, src, value }) {
  return (
    <>
      {style === "right" && (
        <div className="icon-button-frame">
          <img src={src} alt="" />
          <div>{value}</div>
        </div>
      )}
      {style === "left" && (
        <div className="icon-button-frame">
          <div>{value}</div>
          <img src={src} alt="" />
        </div>
      )}
    </>
  );
}
