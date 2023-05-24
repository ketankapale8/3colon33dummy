import React , {useState} from 'react';
import './subservicesdesc.scss';
import Line from '../../../../assets/SubservicesBanner/line.png';
import { Link } from 'react-router-dom';



const SubServicesDesc = ({subServicesArray}) => {
  return (
    <div className="subservicesdesc">
        <div className="subservicesContainer">
         
            <div className="subservicesLeft">
              <div className="container">
                {subServicesArray.map(item=>{
                  return (
                    <div className="box" style={{backgroundColor: item.color}}>
                        <div className="boxleft">
                      <img className='icons' alt="servicesIcons" src={item.icon}/>

                    </div>
                    <div className="boxright">
                    
                      
                      <p>{item.title}</p>

                    </div>
                    </div>

                  )
                })}
      
              </div>

            </div>
              
           
          <div className="subservicesRight">
            <div className="container1">
              {subServicesArray.map(item=>{
                return (
              <div className="box">
                  <img alt="divider" className='line' src={item.line}/>
                    <p>{item.content}</p>
                    {/* <p>{item.content1}</p> */}
                    <Link style={{textDecoration:'none'}} to={item.path}>
                        <button className='roleBtn'>Learn More..</button>
                    
                    </Link>
              </div>

                )
              })}
           

            </div>
          </div>
      


              
          
        </div>
    </div>
  )
}

export default SubServicesDesc