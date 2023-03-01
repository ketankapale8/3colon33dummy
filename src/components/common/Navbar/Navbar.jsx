import React from 'react';
import './navbar.scss';
import BrandLogo from '../../../assets/logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {

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
      to: "/"
    }
  ]
  return (
    <div className='navbar'>
      <div className="logoContainer">
        <Link to="/">
          <img src={BrandLogo} className="logo" alt='brandlogo'/>
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
  )
}

export default Navbar