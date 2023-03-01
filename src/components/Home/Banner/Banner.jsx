import React from 'react';
import './banner.scss';
import BannerWork from '../../../assets/BannerWork.png';
import BannerCircle from '../../../assets/BannerCircle.png';



const Banner = () => {
  return (
    <div className='banner'>
        <div className="left">
            <img src={BannerWork} className="bannerImg" alt="bannerImg"/>
            <div style={{lineHeight:'10px' , display:'flex', justifyContent:'center' , flexDirection:'column'}}>
                <h1 className='title'style={{paddingRight:'30px'}}> 
                Innovative 
                </h1>
                <h1 className='title' style={{paddingLeft:'130px'}}>
                future of digital 
                </h1>
                <h1 className='title' style={{paddingRight:'210px'}}>
                world
                </h1>

            </div>
            <div style={{display:'flex', justifyContent:'center' , flexDirection:'column' , paddingTop:'10px', paddingLeft:'35px'}}>
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
            <img src={BannerCircle} className='CircleImg' alt="bannerCircle"/>
        </div>

    </div>
  )
}

export default Banner