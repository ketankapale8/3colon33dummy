import React from 'react';
import './digital-innovation.scss';
import SubServicesCommon from '../common/SubServicesCommon/SubServicesCommon';
import Line from '../../assets/SubservicesBanner/line.png';
import One from '../../assets/SubservicesBanner/icons/1.png';
import Two from '../../assets/SubservicesBanner/icons/2.png';
import Three from '../../assets/SubservicesBanner/icons/3.png';
import casestudyBanner from '../../assets/casestudy/casestudy.png'

const DigitalInnovation = () => {  
  const title = "Digital Innovation";
  const pageName = "Services";
  const descTitle = "TITLE";
  const content1 = "Make smarter decisions on your technology investments. We help you assess and implement your technology readiness and strategic adoption and scaling of key technologies like AI, data, AR, VR, and XR suited to your business needs. So that you can simply focus on growth and profitability."
  const subtitle = "Drive value and speed of business impact";
  const casestudytitle = "Digital Innovation";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  
  const subServicesArray = [
    {
      id:1,
      title : 'IoT',
      icon: One,
      color :"#0623D9",
      path : '/iot',
      cName: 'dropdown-link',
      ref: 'digital',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line
  },
  {
      id:2,
      title : 'Conversational AI',
      icon: Two,
      color :"#00B47E",
      path : '/conversational-ai',
      cName: 'dropdown-link',
      ref: 'digital',
      content : "If you need to capture the attention of today’s always-on customer and sustain it for the long haul, you need to give them the service they want – when they want it. Conversational AI can enable you to offer hyper-personalization and enhanced engagement and services at the click of a button. We help you in taking your customer experience levels up by leveraging technology and assets to support your conversational AI lifecycle, end to end.",
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      line: Line
  },
  {
      id:3,
      title : 'AR/VR/XR',
      color :"#020C4E",
      icon: Three,
      path : '/ar-vr',
      cName: 'dropdown-link',
      ref: 'digital',
      content : "Get beyond the frontier of reality, to welcome reality+. Extended Reality (XR) helps your business optimize costs, increase productivity, and vastly enhance customer experience. Immersive technology can be a game-changer if it achieves its full potential, as long as it can operate in a secure and conducive environment. We combine immersive technologies like Augmented Reality, Virtual Reality, and Mixed Reality, best suited to your needs, and apply them to deliver breakthrough outcomes.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  {
      id:4,
      title : 'Digital Twin',
      icon: One,
      color :"#00B47E",
      path : '/digital-twin',
      cName: 'dropdown-link',
      ref: 'digital',
      content : "Digital twins are virtual replicas of systems, products, or processes. Fed with real-time data, they can be an excellent indicator of how best to manage and optimize outcomes for an organization, be it operations, offering, or supply chain management. We help you evaluate and apply digital twin technology, so you are able to predict, simulate, maintain, and monitor your business processes and products effectively.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },
  {
      id:5,
      title : 'IPA',
      icon: Two,
      color :"#0623D9",
      path : '/ipa',
      cName: 'dropdown-link',
      ref: 'digital',
      content : "Cloud, data and AI, when combined in the right way can power intelligence in IT and business systems and processes, so that they can become more pre-emptive, adaptable and resilient. This also enables better human and digital collaboration, while empowering people to free up their time from repetitive tasks to focus on complex and innovative work. With our help, you can drive not only efficiencies through IPA, but also catalyze your enterprise reinvention.",
      conten1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  }
  ]


  return (
      <div className='digital-innovation'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} content1={content1}/>
    </div>
  )
}

export default DigitalInnovation