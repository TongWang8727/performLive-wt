import HomeHeader from "../../components/HomePage/HomeHeader";
import Sidebar from "../../components/Sidebar";
import MainNavigation from "../../components/Main/MainNavigation";
import "./style.css";
import { useState } from "react";
import LiveComponent from "../../components/Main/VideoDispaly/Live";
import VideoDisplay from "../../components/Main/VideoDispaly";
import VideoLive from "../../assets/Video/Thumbnail.png";
import VideoUpcoming from "../../assets/Video/Thumbnail2.png";
import VideoPopular from "../../assets/Video/Rectangle 272.png";

export default function HomePage() {
  const [isAll, setIsAll] = useState(true);
  const [isLive, setIsLive] = useState(false);

  const message = [
    {
      category: "Live",
      title: "Top 10 DJ Equipment Picks!",
      img: VideoLive,
    },
    {
      category: "Upcoming",
      title: "Best coffee storage canisters",
      img: VideoUpcoming,
    },
    {
      category: "Popular",
      title: "Best coffee storage canisters",
      img: VideoPopular,
    },
  ];

  const handleAll=()=>{
    setIsAll(true)
    setIsLive(false)
  }

  const handleLive=()=>{
    setIsAll(false)
    setIsLive(true)
  }
  return (
    <>
      <div className="home-page-frame">
        <HomeHeader />
      </div>
      <div className="home-page-siderbar">
        <Sidebar onAll={handleAll} onLive={handleLive} isAll={isAll} isLive={isLive}/>
      </div>
      <div className="home-page-main">
        <div>
          <MainNavigation />
        </div>
        <div>
          {isAll && (
            <div>
              {message.map((item) => {
                return (
                  <VideoDisplay
                    category={item.category}
                    title={item.title}
                    img={item.img}
                  />
                );
              })}
            </div>
          )}

          {isLive && (
            <div>
              <LiveComponent/>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
