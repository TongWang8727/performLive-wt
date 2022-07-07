import HomeHeader from '../../components/HomePage/HomeHeader';
import MainPage from '../../components/Main';
import Sidebar from '../../components/Sidebar';
import "./style.css";

// import './style.css'
export default function HomePage() {
  return (
    <>
      <div className='home-page-frame'>
        <HomeHeader />
      </div>
      <div className='home-page-siderbar'>
      <Sidebar/>
      </div>
      <div className='home-page-main'>
        <MainPage/>
      </div>
    </>
  );
}
