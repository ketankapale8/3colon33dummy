import React from 'react';
import './banner.scss';
import BannerWork from '../../../assets/BannerWork.png';
import BannerCircle from '../../../assets/BannerCircle.png';



const Banner = () => {
  return (
    <div className='banner'>
        <div className="left">
            <img src={BannerWork} className="bannerImg" alt="bannerImg"/>
            <div style={{marginLeft: '201px', display:'flex' , flexDirection:'column', alignItems:'start' }}>
                  <h1 className='title'> 
                  Innovative 
                  </h1>
                  <h1 className='title' >
                  future of digital 
                  </h1>
                  <h1 className='title' >
                  world
                  </h1>

              <p style={{paddingRight:'30px'}}>
              Lorem Ipsum is simply dummy text of the printing and 
              </p>
              <p>
              typesetting industry. Lorem Ipsum has been the industry’s 
              </p>
              <p style={{paddingRight:'120px'}}>
              standard dummy text ever since the 1500s.
              </p>


            </div>
        </div>

        <div className="right">
        <div style={{marginRight: '201px', display:'flex' , flexDirection:'column', alignItems:'start' }}>
            <img src={BannerCircle} className='CircleImg' alt="bannerCircle"/>

        </div>
        </div>

    </div>
  )
}

export default Banner