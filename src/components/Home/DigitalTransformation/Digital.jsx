import React from 'react';
import './digital.scss';
import Digital1 from '../../../assets/digital/digital.png';

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

const Digital = () => {
  return (
    <div className='digitalScreen'>
        <div className="alignmentLeft">
            <div className="digitalLeft">
                <img src={Digital1} alt="leftdigitalImg" className='leftImg'/>
            </div>

        </div>
        <div className='alignmentRight'>
            <div className="digitalRight">
                <h4 className='title'>TITLE</h4>
                <div className='subtitleDiv'>
                    <h2 className='subtitle'>
                    We Enable Continuous 
                    </h2>
                    <h2 className='subtitle'>
                    Digital Transformation
                    </h2>
                <div className='divBelowsubtitle'/>

                </div>


                <div className='descriptionDiv'>
                    <p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                    industry. Lorem Ipsum has been the industry’s standard dummy text
                    ever since the 1500s, when an unknown printer took a galley of type 
                    and scrambled it to make a type specimen book. It has survived.    
                    </p>

                </div>

                {/* <div className='descriptionImg'>
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
                </div> */}


                

            </div>

        </div>
    </div>
  )
}

export default Digital