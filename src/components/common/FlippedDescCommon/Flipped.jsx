import React from 'react';
import './flipped.scss';
import { Link } from 'react-router-dom';

const Flipped = ({descTitle2 ,subtitle2 , pageName2 , contenta , contentb , commonImg2 , showBtn , btnTitle , to }) => {
  return (
    <div className='flipped'>
        <div className="flippedContainer">
            <div className="flippedLeft">
                <img className='descbannerImg' src={commonImg2} alt="descBanner"/>
            </div>
            <div className="flippedRight">
                    <div className="title">{descTitle2}</div>
                    <div className="subtitle">{subtitle2}</div>
                    <div className="divBelowsubtitle"></div>
                    <div className="descriptionDiv">
                        <p>{contenta}</p>
                        <p>{contentb}</p>
                    </div>
                    <Link style={{textDecoration:'none'}} to={to}>
                        {showBtn == true && (
                                <button className='roleBtn'>
                                    {btnTitle}
                                </button>

                            )}
                    
                    </Link>
                </div>


        </div>

    </div>
  )
}

export default Flipped