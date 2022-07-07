import LeftBtn from "../../../assets/Video/videoleft.png";
import RightBtn from "../../../assets/Video/videoright.png";
import VideoDisplayForOne from "./VideoDisplayForOne";
import "./style.css";
export default function VideoDisplay({ category, title, img }) {
  return (
    <>
      <div className="video-display-frame">
        <div className="video-display-category-frame">
          <div className="video-display-category-title">{category}</div>
          <div className="video-display-category-btn">
            <div className="video-display-category-btn-text"> View All</div>
            <img src={LeftBtn} alt="" />
            <img src={RightBtn} alt="" />
          </div>
        </div>
        <div className="video-display-video">
          <VideoDisplayForOne img={img} title={title}/>
          <VideoDisplayForOne img={img} title={title}/>
          <VideoDisplayForOne img={img} title={title}/>

        </div>
      </div>
    </>
  );
}
