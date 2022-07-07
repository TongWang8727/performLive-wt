import VideoDislayForCategory from "../VideoDislayForCategory"
import LiveImg from "../../../../assets/Video/Thumbnail.png"
export default function LiveComponent(){
    return (<>
    <div>
        <VideoDislayForCategory category='Live' img={LiveImg} title='Top 10 DJ Equipment Picks!'/>
    </div>
    </>)
}