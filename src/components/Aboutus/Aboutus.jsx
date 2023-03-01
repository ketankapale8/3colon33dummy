import React from 'react'
import Footer from '../common/Footer/Footer';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import img from '../../assets/banner/aboutus.png';
import icon from '../../assets/banner/icon.png';
import './aboutus.scss';
import aboutus from '../../assets/commondesc/aboutus.png';
import aboutusF from '../../assets/Flipped/aboutus.png';
import DescriptionCommon from '../common/DescriptionCommon/DescriptionCommon';
import Flipped from '../common/FlippedDescCommon/Flipped';
import Values from './Values/Values';

const Aboutus = () => {
  const title = "About Us";
  const descTitle = "TITLE";
  const subtitle = "Great Place to Work";
  const commonImg = aboutus;
  const pageName = "Creating Meaningful Impact For Better Tomorrow";
  const content1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
  const content2 = "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less  normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English .Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy."



  const descTitle2 = "LEADERS";
  const subtitle2 = "Get to know our leaders";
  const commonImg2 = aboutusF;
  const pageName2 = "Creating Meaningful Impact For Better Tomorrow";
  const contenta = "With decades of experience in technology and managed services, our leaders are committed to building and creating a better future for our customers, employees and our communities around the world. "
  const contentb = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
  const btnTitle = "Meet Our Leaders"
  return (
    <div className='aboutus'>
      <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
      <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1} content2={content2} commonImg={commonImg} showBtn={false}/>
      <Values/>
      <Flipped descTitle2={descTitle2} subtitle2={subtitle2} contenta={contenta} contentb={contentb} commonImg2={commonImg2} showBtn={true} btnTitle={btnTitle}/>
      <Footer/>
    </div>
  )
}

export default Aboutus