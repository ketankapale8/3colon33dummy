import React from 'react'
import Footer from '../common/Footer/Footer';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import img from '../../assets/banner/aboutus.png';
import icon from '../../assets/banner/icon.png';
import './aboutus.scss';
import aboutus from '../../assets/commondesc/about.png';
import aboutusF from '../../assets/Flipped/about2.png';
import DescriptionCommon from '../common/DescriptionCommon/DescriptionCommon';
import Flipped from '../common/FlippedDescCommon/Flipped';
import Values from './Values/Values';
import PresenceComp from '../common/PresenceComp/Presence';
import Connectwithus from '../common/connectwithus/Connectwithus';

const Aboutus = () => {
  const title = "About Us";
  const descTitle = "TITLE";
  const subtitle = "Great Place to Work";
  const commonImg = aboutus;
  const pageName = "Revolutionizing business. ";
  const pageName1 = " Harnessing the power of technology.";
  const content1 = "At 3:33, we have a diverse community of people who believe in the work we do. Our collective aspiration is to offer game-changing digital services and solutions for our clients all over the world. We are continuously focused on making each career here fulfilling and successful, and continuously looking for ways to equip our people with the tools they need today to solve for tomorrow.."
  const content2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less  normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English .Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy."



  const descTitle2 = "LEADERS";
  const subtitle2 = "Get to know our leaders";
  const commonImg2 = aboutusF;
  const pageName2 = "Creating Meaningful Impact For Better Tomorrow";
  const contenta = "With decades of experience in technology and managed services, our leaders are committed to building and creating a better future for our customers, employees and our communities around the world. "
  const contentb = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
  const btnTitle = "Meet Our Leaders"
  const to = "/leadership";


  let [w , setW] = React.useState(window.innerWidth)
function updateSize(){
  let width = window.innerWidth;
  setW(width)

}
React.useEffect(()=>{
  window.addEventListener('resize', updateSize);

},[w])
  return (
    <div className='aboutus'>
      <BannerComponent img={img} title={title} pageName={pageName} pageName1={pageName1} icon={icon}/>
      <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1} commonImg={commonImg} showBtn={false}/>
      {w> 850 && (
      <div style={{height:'300px', paddingTop: '20px'}}>
        <PresenceComp />
      </div>
      )}
      <Values />
      <Flipped descTitle2={descTitle2} subtitle2={subtitle2} contenta={contenta} contentb={contentb} commonImg2={commonImg2} showBtn={true} btnTitle={btnTitle} to={to}/>
      <Connectwithus/>
      <Footer/>
    </div>
  )
}

export default Aboutus