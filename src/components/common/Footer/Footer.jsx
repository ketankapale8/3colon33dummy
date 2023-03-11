import React from 'react';
import './footer.scss';
import logo from '../../../assets/footer/logoc.png';
import breaker from '../../../assets/footer/breaker.png'
import one from '../../../assets/footer/1.png';
import two from '../../../assets/footer/2.png';
import three from '../../../assets/footer/3.png';

const bottom = ['Terms And Conditions' , "Cookie Disclosures", "Privacy Notice"]
const social = [one , two , three]

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footerLeft">
        <img className='companyLogo' alt='logoc' src={logo}/>
        <img className='breaker' alt='breaker' src={breaker}/>

        <div className='copyright'>
          <p className='content'>© 2023 3:33. All rights reserved.</p>

        </div>


      </div>
      <div className="footerRight">
        <div className="top">
            <h4>SUBSCRIBE NEWSLETTER</h4>
        </div>
        <div className="middle">
          <input title='name' className='name' placeholder='name'/>
          <input title='email' className='email' placeholder='email'/>
          <button className='submitBtn'>SUBMIT</button>
        </div>
        <div className="social">
          {social.map(item=>{
            return (
              <>
              <img className='mediaImg' src={item} alt="socialImgs"/>
              </>
            )
          })}

        </div>
        <div className='bottom'>
          {bottom.map(item=>{
            return (
              <>
            <p>{item}</p>

              </>
            )
          })}


        </div>
          
      </div>

    </div>
  )
}

export default Footer