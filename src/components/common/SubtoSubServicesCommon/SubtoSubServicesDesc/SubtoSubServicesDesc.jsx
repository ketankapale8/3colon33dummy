import React , {useState} from 'react';
import './subtosubservicesdesc.scss';
import Line from '../../../../assets/SubservicesBanner/line.png';
import { Link } from 'react-router-dom';



const SubtosubServicesDesc = ({subtosubServicesArray}) => {
  return (
    <div className="subservicesdesc">
          <div className="titleContent">
        <div className="subtitle">Key Focus Areas</div>
          <div className="divBelowsubtitle"></div>

          </div>
        <div className="subservicesContainer">
         
            <div className="subservicesLeft">
              <div className="subcontainer1">
                {subtosubServicesArray.map(item=>{
                  return (
                    <>
                    <img alt="dividers" className='lines' src={item.line}/>
                    <div className="box" >
                        <div className="boxleft">
                      <img className='icons' alt="servicesIcons" src={item.icon}/>

                    </div>
                    <div className="boxright1">
                    
                      
                      <p>{item.title}</p>

                    </div>
                    </div>
                    
                    </>

                  )
                })}
      
              </div>

            </div>
              
           
          <div className="subservicesRight">
            <div className="container2">
              {subtosubServicesArray.map(item=>{
                return (
              <div className="box">
                  <img alt="divider" className='line' src={item.line}/>
                    <p>{item.content}</p>
                    <p>{item.content1}</p>
                    {/* <Link style={{textDecoration:'none'}} to={item.path}>
                        <button className='roleBtn'>Learn More..</button>
                    
                    </Link> */}
              </div>

                )
              })}
           

            </div>
          </div>
        </div>
    </div>
  )
}

export default SubtosubServicesDesc