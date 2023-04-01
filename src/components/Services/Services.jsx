import React from 'react';
import './services1.scss';
import Footer from '../common/Footer/Footer';
import img from '../../assets/MainServices/servicesBanner.png';
import icon from '../../assets/banner/icon.png';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import servicesRightImg from '../../assets/MainServices/servicesright.png'
import DescriptionCommon from '../common/DescriptionCommon/DescriptionCommon';
const Services = () => {
    const title = "SERVICES";
    const pageName = "Overview"
    const descTitle = "TITLE";
  const subtitle = "Overview";
  const commonImg = servicesRightImg;
  const content1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
    // const pageName1 = "";
  
    // const pageTitle = "Join our Community";
    // const pageTitle2 = "Find your next job @ 3:33";
    // const to = "/currentopenings" 
  
  return (
    <div className='services1'>
        <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
        <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1}  commonImg={commonImg} showBtn={false} />
        <Footer/>
    </div>
  )
}

export default Services