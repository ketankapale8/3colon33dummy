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
        desc : "Modernize your enterprise today, for tomorrow. We support your business in deriving the maximum digital value and increasing longevity of their complex applications, as well as unifying them. The result? Your enterprise will get the agility that it needs to gain competitive advantage. ",
        img : one,
        id : 1,
        more:"Learn More..",
        path : '/application-engg',
    },
    {
        title : "Cloud Engineering",
        desc : "Harness the power of cloud to create compelling customer experiences and ease of business. We come with proven cross-sector experience and deep understanding of critical platforms, enabling your business to create end-to-end cloud strategies and harness change. ",
        img : two,
        id : 2,
        more:"Learn More..",
        path : '/cloud-engg',
    },
    {
        title : "Digital Innovation",
        desc : "Make smarter decisions on your technology investments. We help you assess and implement your technology readiness and strategic adoption and scaling of key technologies suited to your business needs. So that you can simply focus on growth and profitability. ",
        img : three,
        id : 3,
        more:"Learn More..",
        path : '/digital-innovation',
    },
  
]

const sliderArray2 = [
    {
        title : "Data & Analytics",
        desc : "Your business needs insights-driven intelligence. We help you unlock new value from your data, so that you can accelerate better decision-making, improve business processes and enhance your customer experience. ",
        img : four,
        id : 1,
        more:"Learn More..",
        path : '/data-analytics',
    },
    {
        title : "Infrastructure Services",
        desc : "Make your infrastructure as good as your business aspirations. We enable you to give your IT infrastructure the agility it needs for rapid business transformation at scale - so that your enterprise is nimble, efficient, and intelligent, all the time. ",
        img : one,
        id : 2,
        more:"Learn More..",
        path : '/infra',
    },

    {
        title : "Enterprise Applications",
        desc : "Value, agility, and speed – that is what your enterprise needs. Through our suite of enterprise application services range from modernization, maintenance, and management we can help you make the right choices for technology adoption, while supporting you throughout the implementation process. ",
        img : four,
        id : 3,
        more:"Learn More..",
        path : '/enterprise-applications',
    },
   
]

const sliderArray3 = [
    {
        title : "Digital Defense",
        desc : "Safeguarding your business is just as important as driving bottom-line growth. We help you mitigate risks, pre-empt cybersecurity threats, thereby securing your business and enabling you to adopt an ‘always-on’ approach when it comes to external vulnerabilities. ",
        img : four,
        id : 1,
        more:"Learn More..",
        path : '/digital-security',
    },
   
   
  
]


const ServicesDesc = () => {
  return (
    <div className='servicesdesc'>
    <div className="servicesdescContainer">
        <div className="top">
        <div className="subtitle">Our Services</div>
        <div className="divBelowsubtitle"></div>
        <p className='description'>Embracing change has a different meaning for each industry and organization. At 3:33, we understand that – that is why we offer you customized services that best fits your organization and its goals. Take a look at our suite of services.</p>
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
                                <p style={{fontSize:'0.7rem' , textAlign:'start'}}>{item.desc}</p>
                                <Link to={item.path} style={{textDecoration:'none'}}>
                                    <p style={{fontSize:'0.8rem' , textAlign:'start' , textTransform:'uppercase', color:"#D1299B" , cursor:'pointer'}}>{item.more}</p>
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
                                <p style={{fontSize:'0.7rem' , textAlign:'start'}}>{item.desc}</p>
                                <Link to={item.path} style={{textDecoration:'none'}}>
                                    <p style={{fontSize:'0.8rem' , textAlign:'start' , textTransform:'uppercase', color:"#D1299B" , cursor:'pointer'}}>{item.more}</p>

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
                                <p style={{fontSize:'0.7rem' , textAlign:'start'}}>{item.desc}</p>
                                <Link to={item.path} style={{textDecoration:'none'}}>
                                    <p style={{fontSize:'0.8rem' , textAlign:'start' , textTransform:'uppercase', color:"#D1299B" , cursor:'pointer'}}>{item.more}</p>
                                </Link>
                            </div>

                        </div>
                        
                        </>
                    )
                })}

            </div>

        </div>
    </div>

    <div className="connectwithusBox">
                <div className="subtitle">Lets connect to start a conversation</div>
                <Link to="/aboutus" style={{textDecoration:'none'}}>
              <button className='roleBtn'>
                Connect with us
              </button>
            
            </Link>
                </div>

    </div>
  )
}

export default ServicesDesc