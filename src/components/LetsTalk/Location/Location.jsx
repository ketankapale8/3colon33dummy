import React from 'react';
import './location.scss';
import one from '../../../assets/contactus/one.png'
import two from '../../../assets/contactus/two.png'
import three from '../../../assets/contactus/three.png'
import four from '../../../assets/contactus/four.png'
import five from '../../../assets/contactus/five.png'


const sliderArray1 = [
    {
        title : "United Arab Emirates",
        desc : 'Office 903, level 9, Building No 6,​  Sultan International Tower Corniche Road, Abu Dhabi Phone: +971 2 6213322',
        img : one,
        id : 1,
    },
    {
        title : "India",
        desc : '10th Floor,Aurora Waterfront,Plot No. 34/1, Block GN, Sector V,Salt Lake, Kolkata – 700091 West Bengal​ Phone:+91 98313 15035',
        img : two,
        id : 2,
    },
    {
        title : "Poland",
        desc : '1731-581 Krakow, Poland',
        img : three,
        id : 3,
    },
  
]

const sliderArray2 = [
    {
        title : "Switzerland",
        desc : ' Erlenmattstrasse 18,4058 Basel,  ​Switzerland Phone: +41 799 469 747 ',
        img : four,
        id : 1,
    },
    {
        title : "Germany",
        desc : 'Hebelstr. 24, 79618 Rheinfelden Germany Phone: +49 7623 717 898 ',
        img : five,
        id : 2,
    },
   
  
]


const Location = () => {
  return (
    <div className='location'>
    <div className="locationContainer">
        <div className="top">
        <div className="subtitle">Our Locations</div>
        <div className="divBelowsubtitle"></div>
        </div>
        <div className="bottom">
            <div className="locationOne">
                {sliderArray1.map(item=>{
                    return (
                        <>
                    <div className="containerOne" key={item.id}>
                            <div className="box1">
                                <img src={item.img} className="boxImg"/>
                                
                            </div>
                            <div className="box2">
                                <h4>{item.title}</h4>
                                <p style={{fontSize:'0.6rem' , textAlign:'start'}}>{item.desc}</p>
                            </div>

                        </div>
                        
                        </>
                    )
                })}

            </div>

            <div className="locationTwo">
                {sliderArray2.map(item=>{
                    return (
                        <>
                    <div className="containerOne" key={item.id}>
                            <div className="box1">
                                <img src={item.img} className="boxImg"/>
                                
                            </div>
                            <div className="box2">
                                <h4 >{item.title}</h4>
                                <p style={{fontSize:'0.6rem' , textAlign:'start'}}>{item.desc}</p>
                            </div>

                        </div>
                        
                        </>
                    )
                })}

            </div>

        </div>
    </div>

    </div>
  )
}

export default Location