import React from 'react'
import './bannercomp.scss';

import logowhite from '../../../assets/footer/logoc.png';
import { Link } from 'react-router-dom';

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

const BannerComponent = ({img , title , pageName , icon , pageName1}) => {

  return (
    <div className='bannercomponent'>
        <div className="top">
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
        <img className='backgroundimg' alt='bgrndImg' src={img} />
        {/* <div style={{display:'flex' ,position:'absolute'}}> */}
            <h1>{pageName}</h1>
            <h1 style={{paddingTop: '90px' ,}}>{pageName1}</h1>

            <h4>{title}</h4>
            <img src={icon} className="icon"/>

        {/* </div> */}

        </div>

    </div>
  )
}

export default BannerComponent