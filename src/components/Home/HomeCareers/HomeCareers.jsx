import React from 'react'
import './homecareers.scss';
import { Link } from 'react-router-dom';

const HomeCareers = () => {
  return (
    <div className='homeCareers'>
      <div className="homecareersLeft"></div>
      <div className="homecareersRight">
        <div className="homecareersDesc">
          <div className="title">CAREERS</div>
          <div className="subtitle">Move your career 
forward</div>
          <div className="divBelowsubtitle"/>
          <div className="descriptionDiv">
            <p>Lorem 
            Ipsum has been the industry’s standard </p>
          <p>
            and scrambled it to make a type specimen book. 
            </p>
            <p>Lorem Ipsum has been the industry’s standard </p>
          <p>
              and scrambled it to make a type specimen book
            </p>
            <p>Lorem 
            Ipsum has been the industry’s standard </p>
          <p>
              and scrambled it to make a type specimen book. 
            </p>

          </div>

          <Link to="/careers" style={{textDecoration:'none'}}>
            <button className='roleBtn'>
              Find Your Next Role
            </button>
          
          </Link>
        </div>
        
      </div>
    </div>
  )
}

export default HomeCareers