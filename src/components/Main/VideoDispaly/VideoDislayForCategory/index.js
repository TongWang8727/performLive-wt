import "./style.css";
import VideoDisplayForOne from "../VideoDisplayForOne";
export default function VideoDislayForCategory({ category,img,title }) {
  return (
    <>
      <div className="video-display-for-category-frame">{category}</div>
      <div >
          <VideoDisplayForOne img={img} title={title}/>
      </div>
    </>
  );
}
