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
        <h4 className='title'>CAREERS</h4>
                  <div className="subtitle">Move your career</div>
                  <div className="subtitle">forward</div>
                  <div className='divBelowsubtitle'/>
                  <div className="descriptionDiv">
                      <p className='desc'>
                      Lorem Ipsum is simply dummy text of the printing and typesetting
                          industry. Lorem Ipsum has been the industry’s standard dummy text
                          ever since the 1500s, when an unknown printer took a galley of type 
                          and scrambled it to make a type specimen book. It has survived. 

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