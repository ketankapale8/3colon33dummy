import React from 'react'
import BannerComponent from '../common/BannerComponent/BannerComponent';
import Footer from '../common/Footer/Footer';
import './careers.scss';
import img from '../../assets/banner/careers.png'
import icon from '../../assets/banner/icon.png';
import careers from '../../assets/commondesc/careers.png';
import DescriptionCommon from '../common/DescriptionCommon/DescriptionCommon';
import { Link } from 'react-router-dom';
import CultureComp from './cultureComp/CultureComp';
import Network from './Network/Network';
import Values from '../Aboutus/Values/Values'
import CareersTestimonials from './CareersTestimonials/CareersTestimonials';

const Carrers = () => {
  const title = "Careers";
  const pageName = "Meaningful Work "
  const pageName1 = "Meaningful Life";
  const descTitle = "TITLE";
  const subtitle = "Find Your Next Step at 3:33";
  const commonImg = careers;
  const content1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
  const btnTitle = "View Open Positions"
  
  return (
    <div className='careers'>
      <BannerComponent img={img} title={title} pageName={pageName} pageName1={pageName1} icon={icon}/>
      <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1}  commonImg={commonImg} showBtn={true} btnTitle={btnTitle} to="/currentopenings"/>
      <CultureComp/>
      <Network/>
      <Values/>
      <CareersTestimonials/>
      <Footer />


    </div>
  )
}

export default Carrers