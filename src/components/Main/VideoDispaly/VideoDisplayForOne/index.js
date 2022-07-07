import "./style.css";
export default function VideoDisplayForOne({ title, img }) {
  return (
    <>
      <div>
        <div className="video-display-for-one-img">
          <img src={img} alt="" />
        </div>
        <div className="video-display-for-one-title">{title}</div>
      </div>
    </>
  );
}
