import React from 'react'
import './digital1.scss';
import Digital from '../../../assets/digital/digital.png';

const descImgData = [
    {
        title : "Customers",
        number : "100+"
    },
    {
        title : "Employees",
        number : "100+"
    },
    {
        title : "Locations",
        number : "05"
    }
]

const Digital1 = () => {
  return (
    <div className="digital">
        <div className="digitalContainer">
            <div className="digitalLeft">
            <img src={Digital} alt="leftdigitalImg" className='leftImg'/>
            </div>

            <div className="digitalRight">
                {/* <h4 className='title'>TITLE</h4> */}
                <div className="subtitle">Creating continuous value  at the intersection of change</div>
                {/* <div className="subtitle"> at the intersection of change</div> */}
                <div className='divBelowsubtitle'/>
                <div className="descriptionDiv">
                    <p className='desc'>
                    The world is changing at a breakneck speed – disruption is everywhere and in everything we do.  Businesses looking to thrive must keep up with the pace so that they can offer new sources of value to customers, while ensuring profitability. We help businesses navigate this dynamic and complex environment through deep insights and technology-led approach.

                    </p>
                </div>
                <div className='descriptionImg'>
                    {descImgData.map(item=>{
                        return (
                            <div key={item.title} style={{flexDirection: 'column', padding: '15px'}}>
                                <h2 className='descNo'>
                                    {item.number}
                                </h2>
                                <h4 className='descTitle'>
                                    {item.title}
                                </h4>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    </div>
  )
}

export default Digital1