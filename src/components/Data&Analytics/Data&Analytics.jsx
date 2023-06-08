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
  const content1 = "Your business needs insights-driven intelligence. Just embedding AI, data, and analytics capabilities is not enough – you need a robust visualization mechanism, along with the ability to drive adoption and a mindset change. We help you unlock new value from your data so that you can accelerate better decision-making, improve business processes, and enhance your customer experience"
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
      content : "Organizations that harness data to derive value and efficient decision-making are differentiating themselves in the market. Maximize the value of your data by modernizing your data foundation, turning it into actionable insight",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
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
      content : "Take business intelligence to the next level. Data-driven organizations don’t stop at capturing data, they walk the last mile by delivering the right insights from the data into the hands of stakeholders and users. With effective data visualization, your business can gain a better and more intuitive way to contextualize data, beyond just numbers. Our services enable you to build and embed better data visualization capabilities, making your data analysis faster, easier, more visual, and more impactful",
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
      content1 : "Our expertise across machine learning, AI, data, and analytics will give you more value from your data, and enable you to accelerate your transition to a modern and digital business. No matter what your digital maturity is, we identify sources of value and employ techniques suited to your needs.",
      conten1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
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
      content : "Our data analytics services and solutions are curated to enable your growth and differentiation. We identify the data analytics needs of your business and create cutting-edge analytics solutions designed to raise your business performance, resilience, and long-term efficienc",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  ]


  return (
      <div className='data-analytics'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} content1={content1}/>
    </div>
  )
}

export default DataAnalytics