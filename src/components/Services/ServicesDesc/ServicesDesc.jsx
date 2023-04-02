import React from 'react';
import './servicesdesc.scss';
import one from '../../../assets/MainServices/one.png';
import two from '../../../assets/MainServices/two.png';
import three from '../../../assets/MainServices/three.png';
import four from '../../../assets/MainServices/four.png';
import { Link } from 'react-router-dom';


const sliderArray1 = [
    {
        title : "Application Engineering",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!",
        img : one,
        id : 1,
        more:"Learn More..",
        path : '/application-engg',
    },
    {
        title : "Cloud Engineering",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!",
        img : two,
        id : 2,
        more:"Learn More..",
        path : '/cloud-engg',
    },
    {
        title : "Digital Innovation",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!",
        img : three,
        id : 3,
        more:"Learn More..",
        path : '/digital-innovation',
    },
  
]

const sliderArray2 = [
    {
        title : "Data & Analytics",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!",
        img : four,
        id : 1,
        more:"Learn More..",
        path : '/data-analytics',
    },
    {
        title : "Infrastructure Services",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!",
        img : one,
        id : 2,
        more:"Learn More..",
        path : '/infra',
    },

    {
        title : "Enterprise Applications",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!",
        img : four,
        id : 3,
        more:"Learn More..",
        path : '/enterprise-applications',
    },
   
  
]

const sliderArray3 = [
    {
        title : "Digital Defense",
        desc : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, odio!",
        img : four,
        id : 1,
        more:"Learn More..",
        path : '/digital-security',
    },
   
   
  
]


const Location = () => {
  return (
    <div className='servicesdesc'>
    <div className="servicesdescContainer">
        <div className="top">
        <div className="subtitle">Our Services</div>
        <div className="divBelowsubtitle"></div>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deserunt, dolorum a? Illum, quo magnam? Nam quas fugiat consectetur repellendus labore, corporis, iure quis ut perspiciatis, et tempore recusandae veritatis nostrum!</p>
        </div>
        <div className="bottom">
            
            <div className="servicesdescOne">
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
                                <Link to={item.path} style={{textDecoration:'none'}}>
                                    <p style={{fontSize:'0.6rem' , textAlign:'start' , textTransform:'uppercase', color:"#D1299B" , cursor:'pointer'}}>{item.more}</p>
                                </Link>

                            </div>

                        </div>
                        
                        </>
                    )
                })}

            </div>

            <div className="servicesdescTwo">
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
                                <Link to={item.path} style={{textDecoration:'none'}}>
                                    <p style={{fontSize:'0.6rem' , textAlign:'start' , textTransform:'uppercase', color:"#D1299B" , cursor:'pointer'}}>{item.more}</p>

                                </Link>
                            </div>

                        </div>
                        
                        </>
                    )
                })}

            </div>

            <div className="servicesdescTwo">
                {sliderArray3.map(item=>{
                    return (
                        <>
                    <div className="containerOne" key={item.id}>
                            <div className="box1">
                                <img src={item.img} className="boxImg"/>
                                
                            </div>
                            <div className="box2">
                                <h4 >{item.title}</h4>
                                <p style={{fontSize:'0.6rem' , textAlign:'start'}}>{item.desc}</p>
                                <Link to={item.path} style={{textDecoration:'none'}}>
                                    <p style={{fontSize:'0.6rem' , textAlign:'start' , textTransform:'uppercase', color:"#D1299B" , cursor:'pointer'}}>{item.more}</p>
                                </Link>
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