import React from 'react';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import './letstalk.scss';
import icon from '../../assets/banner/icon.png';
import img from '../../assets/letstalk/Banner.png'
import Contact from './contactusComponent/Contact';
import Location from './Location/Location';
import Footer from '../common/Footer/Footer';
import six from '../../assets/contactus/six.png';
import BannerInside from '../common/BannerForInside/BannerInside';



const Letstalk = () => {
  const title = "LETS TALK";
  const pageName = "Don't be a strainger"
  const pageName1 = "Just say hello!";

  const pageTitle = "Join our Community";
  const pageTitle2 = "Find your next job @ 3:33";
  const to = "/currentopenings" 


  return (
    <div className="letstalk">
      <BannerComponent  img={img} title={title} pageName={pageName} pageName1={pageName1} icon={icon}/>
      <Contact/>
      <BannerInside img={six} pageTitle={pageTitle} pageTitle2={pageTitle2} to={to} />
      <Location/>
      <Footer/>
    </div>
  )
}

export default Letstalk