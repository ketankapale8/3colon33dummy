import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.scss';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import one from '../../assets/sliderbanner/1.png'
import two from '../../assets/sliderbanner/2.png'
import three from '../../assets/sliderbanner/3.png'
import four from '../../assets/sliderbanner/4.png';

export default function DummySlider2() {
  return (
    <>
        <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        onNavigationHide={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
        <div className='main'>
           <div>
            <img src={one} />
            <div className='title'>
                <h2>Harnessing insights</h2>
                <h2 >Catalyzing change</h2>

            </div>

            <div className='desc'>

            <p >
            Accelerating business growth through digital transformation, 
            </p>
                      <p  >
                      optimizing operations and unlocking innovation. 
                      </p>
            </div>
           
           </div>
        </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='main'>
        <div className='title'>
                <h2>Digital Quality</h2>
                <h2 >Assurance</h2>

            </div>

            <div className='desc'>

            <p >
            Unlocking Excellence in the Digital Realm: 
            </p>
                      <p  >
                      Elevate Your Quality Assurance
                      </p>
            </div>

        <img src={two} />
        </div>

        </SwiperSlide>
        <SwiperSlide>
        <div className='main'>

<img src={three} />

<div className='title'>
        <h2>A Brigde to a </h2>
        <h2 > Brighter future.</h2>

    </div>

    <div className='desc'>

    <p >
    Bridging Dreams, Building Futures
    </p>
              <p  >
              Connecting for a Brighter Tomorrow
              </p>
    </div>
</div>
        </SwiperSlide>
        <SwiperSlide>
        <div className='main'>
        <div className='title'>
                <h2>Innovation Unleashed: Transforming </h2>
                <h2 >Possibilities into Reality!</h2>

            </div>

            <div className='desc'>

            <p >
            Driving Forward,  
            </p>
                      <p  >
                      Embracing Change : Unleashing Continuous Progress! 
                      </p>
            </div>


        <img src={four} />

        </div> 
        </SwiperSlide>
        
      </Swiper>
    </>
  )
}
