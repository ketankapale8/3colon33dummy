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
  const content1 = "Value, agility, and speed – that is what your enterprise needs. Through our suite of enterprise application services ranging from modernization, maintenance, and management we can help you make the right choices for technology adoption while supporting you throughout the implementation process. We bring the power of our combined strengths to serve you in market-leading ways, enabling you to build a strong digital core."
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
      content : "ServiceNow offerings have the potential to open new vistas for your business. To make the most of their portfolio – you need a strategic focus on modernization. Through our domain expertise and strong ecosystem partnership with ServiceNow, we enable your digital transformation journey at great speed and agility.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
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
      content : "Our comprehensive suite of Salesforce services includes consulting, design, implementation, and support, enabling you to drive powerful experiences that span sales, marketing, opportunities, and more. Our global presence, focus on innovation and data-driven approach help your business become future-forward.",
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
      content : "We bring the best of Oracle’s industry-leading solutions to enable your business transformation. With our services, you can gain access to our subject-matter expertise and experience across Oracle’s solutions. We enable your business to make the shift that today’s digital economy demands.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
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
      content : "Embedding intelligence in your enterprise will give you the path to accelerated value and enhanced experiences. Give your enterprise the power of increased speed and strength, with our end-to-end SAP solutions.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  ]


  return (
      <div className='enterprise'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} content1={content1}/>
    </div>
  )
}

export default Enterprise