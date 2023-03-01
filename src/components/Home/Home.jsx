import React from 'react';
import Banner from './Banner/Banner';
import Digital from './DigitalTransformation/Digital';
import './home.scss';
import Services from './Services/Services';
import HomeCareers from './HomeCareers/HomeCareers'
import Partners from './Partners/Partners';
import Footer from '../../components/common/Footer/Footer'

const Home = () => {
  return (
    <div className='homeComponent'>
      <Banner/>
      <Digital/>
      <Services/>
      <HomeCareers/>
      <Partners/>
      <Footer/>
    </div>
  )
}

export default Home