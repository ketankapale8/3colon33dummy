import React from 'react';
import './descommon.scss';

const DescriptionCommon = ({descTitle ,subtitle , pageName , content1 , content2 , commonImg , showBtn , btnTitle}) => {
    // const [btn , showBtns] = useState(false)
  return (
    <div className='desccommon'>
        <div className="descLeft">
            <div className="descDetails">
                <div className="title">{descTitle}</div>
                <div className="subtitle">{subtitle}</div>
                <div className="divBelowsubtitle"></div>
                <div className="descriptionDiv">
                    <p>{content1}</p>
                    <p>{content2}</p>
                </div>
                <div >
                    {showBtn == true && (
                        <button className='roleBtn'>
                            {btnTitle}
                        </button>

                    )}
            

      </div>
            </div>
        </div>
        <div className="descRight">
            <img className='descbannerImg' src={commonImg} alt="descBanner"/>

        </div>

    </div>
  )
}

export default DescriptionCommon