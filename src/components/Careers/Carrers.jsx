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
  const pageName = "Harness insights "
  const pageName1 = "Catalyze change";
  const descTitle = "TITLE";
  const subtitle = "Be part of future-defining work.";
  const commonImg = careers;
  const content1 = "If you are energized by the power of digital in reimagining business, you have come to the right place. With us, you will get to work with world-class technologies to solve real issues businesses face today"
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