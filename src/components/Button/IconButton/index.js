import "./style.css";
export default function IconButton({ style, src, value }) {
  return (
    <>
      {style === "right" && (
        <div className="IconButton-frame">
          <img src={src} alt="" />
          <div>{value}</div>
        </div>
      )}
      {style === "left" && (
        <div className="IconButton-frame">
          <div>{value}</div>
          <img src={src} alt="" />
        </div>
      )}
    </>
  );
}
