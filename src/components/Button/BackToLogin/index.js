import Vector from '../../../assets/Vector.png'
import "./style.css";

export default function BackToLoginBtn(){
    return(<>
      <div className='backtooginBtn-frame'>
          <img src={Vector} alt=''/>
          <div>Back to Login</div>
      </div>
    </>)
}