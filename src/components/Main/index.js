import MainNavigation from "./MainNavigation";
import VideoDisplay  from "../Main/VideoDispaly/index"
import VideoLive from "../../assets/Video/Thumbnail.png"
import VideoUpcoming from "../../assets/Video/Thumbnail2.png"
import VideoPopular from "../../assets/Video/Rectangle 272.png"
export default function MainPage(){
    return(<>
    <div>
        <MainNavigation/>
    </div>
    <div>
        <VideoDisplay category='Live' title='Top 10 DJ Equipment Picks!' img={VideoLive} />
    </div>
    <div>
        <VideoDisplay category='Upcoming' title='Best coffee storage canisters' img={VideoUpcoming} />
    </div>
    <div>
        <VideoDisplay category='Popular' title='Best coffee storage canisters' img={VideoPopular} />
    </div>
    </>)
}