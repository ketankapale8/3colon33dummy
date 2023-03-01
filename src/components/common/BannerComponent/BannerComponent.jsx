import React from 'react'
import './bannercomp.scss'

const BannerComponent = ({img , title , pageName , icon}) => {

  return (
    <div className='bannercomponent'>
        <img className='backgroundimg' alt='bgrndImg' src={img} style={{ backgroundImage: 'linear-gradient(to bottom, #4880EC, #019CAD)'}}/>
            <h1>{pageName}</h1>
            <h4>{title}</h4>
            <img src={icon} className="icon"/>
    </div>
  )
}

export default BannerComponent