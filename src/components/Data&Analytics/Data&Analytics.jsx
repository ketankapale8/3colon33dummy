import React from 'react';
import './data&analytics.scss';
import SubServicesCommon from '../common/SubServicesCommon/SubServicesCommon';
import Line from '../../assets/SubservicesBanner/line.png';
import One from '../../assets/SubservicesBanner/icons/1.png';
import Two from '../../assets/SubservicesBanner/icons/2.png';
import Three from '../../assets/SubservicesBanner/icons/3.png';
import casestudyBanner from '../../assets/casestudy/casestudy.png'

const DataAnalytics = () => {  
  const title = "Data & Analytics";
  const pageName = "Services";
  const descTitle = "TITLE";
  const subtitle = "Drive value and speed of business impact";
  const casestudytitle = "Data & Analytics";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  
  const subServicesArray = [
    {
      id:1,
      title : 'Data Modelling',
      icon: One,
      color :"#0623D9",
      path : '/data-modelling',
      cName: 'dropdown-link',
      ref: 'data',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line
  },
  {
      id:2,
      title : 'Data Visualization',
      icon: Two,
      color :"#00B47E",
      path : '/data-visualization',
      cName: 'dropdown-link',
      ref: 'data',
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      line: Line
  },
  {
      id:3,
      title : 'Machine Learning',
      color :"#020C4E",
      icon: Three,
      path : '/Machine Learning',
      cName: 'dropdown-link',
      ref: 'data',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  {
      id:4,
      title : 'Data Analytics',
      icon: One,
      color :"#00B47E",
      path : '/dataanalytics',
      cName: 'dropdown-link',
      ref: 'data',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  ]


  return (
      <div className='data-analytics'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner}/>
    </div>
  )
}

export default DataAnalytics