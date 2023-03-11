import React from 'react'
import './bannerinside.scss';

import { Link } from 'react-router-dom';


const BannerInside = ({img , pageTitle , pageTitle2 ,to}) => {

  return (
    <div className='bannercomponent1'>
        <div className="bottom">
        <img className='backgroundimg' alt='bgrndImg' src={img} />
            <h1>{pageTitle}</h1>
            <h1 style={{paddingTop: '90px' ,}}>{pageTitle2}</h1>
            <Link  to={to} style={{zIndex:99 , marginTop:'-120px'}}>
                <button className="roleBtn">View Open Positions</button>
            </Link>
        </div>

    </div>
  )
}

export default BannerInside