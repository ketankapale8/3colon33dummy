import React from 'react';
import './boxcomponent.scss';
import one from '../../../assets/boxComponentHome/1.png'
import two from '../../../assets/boxComponentHome/2.png'
import three from '../../../assets/boxComponentHome/3.png'

export default function BoxComponent() {
  return (
    <div className='ctest1'>
        <div className="ctestComponent1">
            <div className="boxComp1">
            <div className="box1">
            <div className="container2">
                <img src={one} className='containerImg' />
            </div>
            <div className="container1">
                <div style={{paddingLeft:'90px'}}>
              <div className="title">CATCHI TITLE</div>
              <div className="subtitle">Lorem Ipsum is simply </div>
              <div className="divBelowsubtitle"></div>
              <div className="descriptionDiv">
                <p className="description">
                Lorem Ipsum is simply dummy text of the 
printing and typesetting industry. Lorem 
Ipsum has been the industry’s standard 
dummy text ever since the 1500s.
                </p>
              </div>
              </div>
            </div>
            
            </div>
            <div className='box2'>
                <div className='container1'>
                <img src={two} className='containerImg' />
                </div>
                <div className='container2'>

                <img src={three} className='containerImg' />
                </div>


            </div>
            
            
                
                

            </div>
        </div>

    </div>
  )
}
