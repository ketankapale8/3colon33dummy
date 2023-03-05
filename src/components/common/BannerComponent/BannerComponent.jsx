import React from 'react'
import './bannercomp.scss'

const BannerComponent = ({img , title , pageName , icon , pageName1}) => {

  return (
    <div className='bannercomponent'>
        <img className='backgroundimg' alt='bgrndImg' src={img} />
        {/* <div style={{display:'flex' ,position:'absolute'}}> */}
            <h1>{pageName}</h1>
            <h1 style={{paddingTop: '90px' ,}}>{pageName1}</h1>

            <h4>{title}</h4>
            <img src={icon} className="icon"/>

        {/* </div> */}
    </div>
  )
}

export default BannerComponent