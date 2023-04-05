import React from 'react';
import './industries.scss';
import img from '../../assets/banner/aboutus.png';
import icon from '../../assets/banner/icon.png';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import Footer from '../common/Footer/Footer';
const Industries = () => {
  const title = "Industries";
  const descTitle = "TITLE";
  const pageName = "Services across Verticles ";
  return (
    <div className='industries'>
      <BannerComponent img={img} title={title} pageName={pageName}  icon={icon}/>
      <h1 style={{paddingLeft:'35%'}}>Content will be updated soon..</h1>
      <div  style={{marginTop:'550px'}}>
        <Footer/>

      </div>
    </div>
  )
}

export default Industries