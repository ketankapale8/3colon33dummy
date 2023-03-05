import React from 'react'
import './digital1.scss';
import Digital from '../../../assets/digital/digital.png';

const Digital1 = () => {
  return (
    <div className="digital">
        <div className="digitalContainer">
            <div className="digitalLeft">
            <img src={Digital} alt="leftdigitalImg" className='leftImg'/>
            </div>

            <div className="digitalRight">
                <h4 className='title'>TITLE</h4>
                <div className="subtitle">We Enable Continuous</div>
                <div className="subtitle">Digital Transformation</div>
                <div className='divBelowsubtitle'/>
                <div className="descriptionDiv">
                    <p className='desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type 
                        and scrambled it to make a type specimen book. It has survived. 

                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digital1