import MainNavigation from "./MainNavigation";
import VideoDisplay from "../Main/VideoDispaly/index";
import VideoLive from "../../assets/Video/Thumbnail.png";
import VideoUpcoming from "../../assets/Video/Thumbnail2.png";
import VideoPopular from "../../assets/Video/Rectangle 272.png";
export default function MainPage() {
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
  return (
    <>
      <div>
        <MainNavigation />
      </div>
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
    </>
  );
}
