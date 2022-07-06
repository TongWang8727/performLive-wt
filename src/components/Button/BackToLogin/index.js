import Vector from '../../../assets/Vector.png'
import "./style.css";

export default function BackToLoginBtn({onClick}){
    return(<>
      <div className='backtooginBtn-frame'>
          <img src={Vector} alt='' onClick={onClick}/>
          <div onClick={onClick}>Back to Login</div>
      </div>
    </>)
}