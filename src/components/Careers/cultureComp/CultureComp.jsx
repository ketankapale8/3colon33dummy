import React from 'react';
import './culture.scss';
import line from '../../../assets/values/line.png'

const cultureArray = [
    {
      id : 1,
      identity : 'LEARNING',
      title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      img : line,
      color : '#00FFB2',
    },
    {
      id : 2,
      identity : 'Opportunity',
      title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      img : line,
      color : '#FFFF'
    },
    {
      id : 3,
      identity : 'Impact',
      title : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since.",
      color : '#FFFF'
    },
    
  ]

const CultureComp = () => {
  return (
    <div className='culture'>
        <div className="cultureContainer">

            <div className="cultureTop">
                <h4 className='title'>TITLE</h4>
                    <div className="subtitle">Our Culture</div>
                        <div className='divBelowsubtitle'/>
                        <div className="descriptionDiv">
                            <p className='desc'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting
                                industry. Lorem Ipsum has been the industry’s standard . 
                            </p>
                        </div>

            </div>

            <div className="cultureBottom">
            {cultureArray.map(item=>{
          return (
            <>
              <div className="bottomContainer">
                <div style={{color: item.color}} className='no'>
                  {item.identity}</div>
                <div style={{color: item.color}} className="desc">{item.title}</div>
              </div>
              <div className="lineContainer">
                  <img src={item?.img} />
              </div>
            
            </>
          )
        })}
                

            </div>
        </div>
    </div>
  )
}

export default CultureComp