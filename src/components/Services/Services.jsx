import React from 'react';
import './services1.scss';
import Footer from '../common/Footer/Footer';
import img from '../../assets/MainServices/servicesBanner.png';
import icon from '../../assets/banner/icon.png';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import servicesRightImg from '../../assets/MainServices/servicesright.png'
import DescriptionCommon from '../common/DescriptionCommon/DescriptionCommon';
import ServicesDesc from './ServicesDesc/ServicesDesc'

const Services = () => {
    const title = "SERVICES";
    const pageName = "Overview"
    const descTitle = "TITLE";
  const subtitle = "Pivot your business today";
  const commonImg = servicesRightImg;
  const content1 = "The business environment today demands every organization to continuously reinvent themselves so that they can create perceivable value. For lasting success, they need an integrated approach that combines technology suited to their business needs, embracing new business models, and creating sustainable benefits for their customers. "
  const content2 = "We help your organization take an all-around view to innovation and mine hidden sources of value so that you can achieve measurable success."
    // const pageName1 = "";
  
    // const pageTitle = "Join our Community";
    // const pageTitle2 = "Find your next job @ 3:33";
    // const to = "/currentopenings" 
  
  return (
    <div className='services1'>
        <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
        <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1} content2={content2}  commonImg={commonImg} showBtn={false} />
        <ServicesDesc/>
        <Footer/>
    </div>
  )
}

export default Services