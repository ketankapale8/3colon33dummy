import React from 'react';
import './flipped.scss'

const Flipped = ({descTitle2 ,subtitle2 , pageName2 , contenta , contentb , commonImg2 , showBtn , btnTitle}) => {
  return (
    <div className='desccommon'>
        <div className="descLeft">
            <img className='descbannerImg' src={commonImg2} alt="descBanner"/>
        </div>
        <div className="descRight">
            <div className="descDetails">
                <div className="title">{descTitle2}</div>
                <div className="subtitle">{subtitle2}</div>
                <div className="divBelowsubtitle"></div>
                <div className="descriptionDiv">
                    <p>{contenta}</p>
                    <p>{contentb}</p>
                </div>
                {showBtn == true && (
                        <button className='roleBtn'>
                            {btnTitle}
                        </button>

                    )}
            </div>

        </div>

    </div>
  )
}

export default Flipped