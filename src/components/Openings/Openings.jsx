import React from 'react';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import Footer from '../common/Footer/Footer';
import './openings.scss';
import img from '../../assets/banner/careers.png'
import icon from '../../assets/banner/icon.png';
import CurrentOpenings from './CurrentOpenings/CurrentOpenings';

const Openings = () => {
    const title = "Opportunities";
    const pageName = "Meaningful Work "
    const pageName1 = "Meaningful Life";
  return (
    <div className='openings'>
        <BannerComponent img={img} title={title} pageName={pageName} pageName1={pageName1} icon={icon}/>
        <CurrentOpenings/>
        <Footer/>
    </div>
  )
}

export default Openings