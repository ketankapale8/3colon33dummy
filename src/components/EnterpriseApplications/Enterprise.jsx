import React from 'react';
import './enterprise.scss';
import SubServicesCommon from '../common/SubServicesCommon/SubServicesCommon';
import Line from '../../assets/SubservicesBanner/line.png';
import One from '../../assets/SubservicesBanner/icons/1.png';
import Two from '../../assets/SubservicesBanner/icons/2.png';
import Three from '../../assets/SubservicesBanner/icons/3.png';
import casestudyBanner from '../../assets/casestudy/casestudy.png'

const Enterprise = () => {  
  const title = "Enterprise Applications";
  const pageName = "Services";
  const descTitle = "TITLE";
  const subtitle = "Drive value and speed of business impact";
  const casestudytitle = "Enterprise Applications";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  
  const subServicesArray = [
    {
      id:1,
      title : 'ServiceNow',
      icon: One,
      color :"#0623D9",
      path : '/servicenow',
      cName: 'dropdown-link',
      ref: 'enterprise',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line
  },
  {
      id:2,
      title : 'SalesForce',
      icon: Two,
      color :"#00B47E",
      path : '/salesforce',
      cName: 'dropdown-link',
      ref: 'enterprise',
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      line: Line
  },
  {
      id:3,
      title : 'Oracle',
      color :"#020C4E",
      icon: Three,
      path : '/oracle',
      cName: 'dropdown-link',
      ref: 'enterprise',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  {
      id:4,
      title : 'SAP',
      icon: One,
      color :"#00B47E",
      path : '/sap',
      cName: 'dropdown-link',
      ref: 'enterprise',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  ]


  return (
      <div className='enterprise'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner}/>
    </div>
  )
}

export default Enterprise