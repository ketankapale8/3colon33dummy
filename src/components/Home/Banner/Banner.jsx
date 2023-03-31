import React, { useState , useEffect } from 'react';
import './banner.scss';
import BannerWork from '../../../assets/work.png';
import BannerCircle from '../../../assets/BannerCircle.png';
// import Navbar from '../../common/Navbar/Navbar';
import { Link } from 'react-router-dom';
import BrandLogo from '../../../assets/logo.png';
import logowhite from '../../../assets/footer/logoc.png';

const navItems = [
  {
    title : "About us",
    to : "/aboutus"
  },
  {
    title : "Services",
    to : "/"
  },
  {
    title : "Insights",
    to: "/"
  },
  {
    title : "Career",
    to :"/careers"
  },
  {
    title : "let's talk",
    to: "/letstalk"
  }
]

const Banner = () => {
  const [sticky , setSticky] = useState(false);

  useEffect(()=>{
    const handleScroll = () =>{
      setSticky(window.scrollY > 110);
      console.log(window.scrollY)
    }
    window.addEventListener('scroll' , handleScroll);
    return () => window.removeEventListener('scroll' , handleScroll)
    
  },[])

  return (
    <>
    <div className='banner'>
        <div className={`${ sticky ? 'sticky' : 'top'}`}>
        <div className="navbar">
        <div className="navContainer">
          <div className="logoContainer">
            <Link to="/">
              <img src={logowhite} className="logo" alt='brandlogo'/>
            </Link>
          </div>
          <div className="linksContainer">
            {navItems.map(item=>{
              return (
                <div className='links'>
                  <Link to={item.to} style={{textDecoration:'none'}}>
                    <h4>{item.title}</h4>
                  </Link>
                </div>
              )
            })}

          </div>

        </div>
      </div>
        </div>

      <div className="bottom">
          <div className="left">
              <img src={BannerWork} className="bannerImg" alt="bannerImg"/>
              
              <div style={{ paddingLeft : '10px', display:'flex' , flexDirection:'column', alignItems:'flex-start' , textAlign:'start', paddingTop:'330px'}}>
                <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start'}}>
                      <div className='title'> 
                      Innovative 
                      </div>
                      <div className='title' >
                      future of digital 
                      </div>
                      < div className='title' >
                      world
                      </div>

                </div>

                <div >
                  <p >
                  Lorem Ipsum is simply dummy text of the printing and 
                  </p>
                  <p>
                  typesetting industry. Lorem Ipsum has been the industry’s 
                  </p>
                  <p >
                  standard dummy text ever since the 1500s.
                  </p>

                </div>

              </div>
          </div>

          <div className="right">
          <div style={{paddingRight: '10px', display:'flex' , flexDirection:'column', alignItems:'start' }}>
              <img src={BannerCircle} className='CircleImg' alt="bannerCircle"/>

          </div>
          </div>

      </div>

    </div>
    
    </>
  )
}

export default Banner