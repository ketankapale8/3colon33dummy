import React from 'react'
import './homecareers.scss';
import { Link } from 'react-router-dom';
import homec from '../../../assets/homecareers/homec.png'

const HomeCareers = () => {
  return (
    <div className='homeCareers'>
      <div className="homeCareersContainer">
        <div className="homecareersLeft">
          <img className='leftImg' alt="cimg" src={homec}/>
        </div>
        <div className="homecareersRight">
        {/* <h4 className='title'>CAREERS</h4> */}
                  <div className="subtitle">Give your career the </div>
                  <div className="subtitle"> 3:33 edge</div>
                  <div className='divBelowsubtitle'/>
                  <div className="descriptionDiv">
                      <p className='desc'>
                      If you are energized by the power of digital in reimagining business, you have come to the right place. With us, you will get to work with world-class technologies to solve real issues businesses face today. Join us.
 
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