import React , {useEffect, useState} from 'react';
import './navbar.scss';
import BrandLogo from '../../../assets/logo.png';
import footerLogo from '../../../assets/footer/logoc.png'
import { Link } from 'react-router-dom';
import ServicesDropdown from '../../ServicesNav/ServicesNav';

const Navbar = () => {

  const [click, setClick] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);
  const [navbarChange ,setNavbarChange] = useState(false);
  const [changeLogo , setChangeLogo] = useState(BrandLogo)
  const onMouseEnter = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDropdown(false);
    } else {
      setDropdown(false);
    }
  };

  const changeBackground = () =>{
      if(window.scrollY >= 85){
        // console.log(window.scrollY)
        setNavbarChange(true)
      }else {
        setNavbarChange(false)
      }
  }

  window.addEventListener('scroll', changeBackground)
  useEffect(()=>{
    changeBackground()
  },[])

  // const navItems = [
  //   {
  //     title : "About us",
  //     to : "/aboutus"
  //   },
  //   {
  //     title : "Services",
  //     to : "/"
  //   },
  //   {
  //     title : "Insights",
  //     to: "/"
  //   },
  //   {
  //     title : "Career",
  //     to :"/careers"
  //   },
  //   {
  //     title : "let's talk",
  //     to: "/"
  //   }
  // ]
  return (
    <div className={navbarChange  ? 'navbar-active': 'navbar'}>
      {/* <div className="navContainer"> */}
        <div className="logoContainer">
          <Link to="/">
            <img src={window.scrollY <= 85 ? footerLogo : BrandLogo} className="logo" alt='brandlogo'/>
          </Link>
        </div>
        <div className="linksContainer">


<ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to="/aboutus" className='links' onClick={closeMobileMenu}>
                About us
              </Link>
            </li>
            <li className='nav-item'
            onMouseEnter={onMouseEnter}
            onMouseLeave={onMouseLeave}
            >
              <Link
              to='/'
              className='links'
              onClick={closeMobileMenu}
            >
              Services <i className='fas fa-caret-down' />
              {dropdown && <ServicesDropdown/>}
            </Link>

            </li>
            <li className='nav-item'>
              <Link to="/insights" className='links' onClick={closeMobileMenu}>
              Insights
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/industries" className='links' onClick={closeMobileMenu}>
              Industries
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/careers" className='links' onClick={closeMobileMenu}>
              Careers
              </Link>
            </li>

            <li className='nav-item'>
              <Link to="/letstalk" className='links' onClick={closeMobileMenu}>
              Lets Talk
              </Link>
            </li>

          </ul>

        </div>

      {/* </div> */}
    </div>
  )
}

export default Navbar