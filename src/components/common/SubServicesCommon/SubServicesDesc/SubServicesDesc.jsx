import React , {useState} from 'react';
import './subservicesdesc.scss';
import Line from '../../../../assets/SubservicesBanner/line.png';
import { Link } from 'react-router-dom';

// const subServicesArray = [
//   {
//     id:1,
//     title : 'Product Engineering',
//     icon: One,
//     color :"#0623D9",
//     path : '/product-engineering',
//     cName: 'dropdown-link',
//     ref: 'application',
//     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
//     line: Line
// },
// {
//     id:2,
//     title : 'Legacy Modernization',
//     icon: Two,
//     color :"#00B47E",
//     path : '/legacy-modernization',
//     cName: 'dropdown-link',
//     ref: 'application',
//     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
//     line: Line
// },
// {
//     id:3,
//     title : 'Low Code Architecture',
//     color :"#020C4E",
//     icon: Three,
//     path : '/low-code-no-code-architecture',
//     cName: 'dropdown-link',
//     ref: 'application',
//     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
//     line: Line 
// },

// {
//     id:4,
//     title : 'Quality Assurance',
//     icon: One,
//     color :"#00B47E",
//     path : '/quality-assurance',
//     cName: 'dropdown-link',
//     ref: 'application',
//     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet."
// },
// {
//     id:5,
//     title : 'Mobile App Development',
//     icon: Two,
//     color :"#0623D9",
//     path : '/mobile-app-development',
//     cName: 'dropdown-link',
//     ref: 'application',
//     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
//     line: Line 
// }
// ]


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
                    <p>{item.content1}</p>
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