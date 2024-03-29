import React, { Suspense } from 'react';
import Banner from './Banner/Banner';
import Digital from './DigitalTransformation/Digital';
import './home.scss';
import Services from './Services/Services';
import HomeCareers from './HomeCareers/HomeCareers'
import Partners from './Partners/Partners';
import Footer from '../../components/common/Footer/Footer'
import Digital1 from './Digital1/Digital1';
import Testimonials from './Testimonials/Testimonials';
import Navbar from '../common/Navbar/Navbar';
import DummySlider from '../dummySlider/DummySlider';
import BoxComponent from './BoxComponent/BoxComponent';
import DummySlider1 from '../dummySlider1/DummySlider1';
import DummySlider2 from '../dummyslider2/DummySlider2';
import Connectwithus from '../common/connectwithus/Connectwithus';

const lazyFooter = React.lazy(()=> import('../../components/common/Footer/Footer'))

const Home = () => {
  return (
    <div className='homeComponent' >
        {/* <DummySlider/> */}
      <DummySlider2/>
        {/* <Banner/> */}
        <Digital1/>
        <Services/>
        {/* <BoxComponent/> */}
        <HomeCareers/>
        <Partners/>
        <Connectwithus/>
        <Suspense fallback={<div>...</div>}>
          <Footer/>

        </Suspense>
        {/* <Testimonials/> */}

    </div>
  )
}

export default Home