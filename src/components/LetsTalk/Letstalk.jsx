import React from 'react';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import './letstalk.scss';
import icon from '../../assets/banner/icon.png';
import img from '../../assets/letstalk/Banner.png'
import Contact from './contactusComponent/Contact';

const Letstalk = () => {
  const title = "LETS TALK";
  const pageName = "Don't be a strainger"
  const pageName1 = "Just say hello!";
  return (
    <div className="letstalk">
      <BannerComponent  img={img} title={title} pageName={pageName} pageName1={pageName1} icon={icon}/>
      <Contact/>
      
    </div>
  )
}

export default Letstalk