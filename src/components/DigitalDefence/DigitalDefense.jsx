import React from 'react';
import './digitaldefense.scss';
import SubServicesCommon from '../common/SubServicesCommon/SubServicesCommon';
import Line from '../../assets/SubservicesBanner/line.png';
import One from '../../assets/SubservicesBanner/icons/1.png';
import Two from '../../assets/SubservicesBanner/icons/2.png';
import Three from '../../assets/SubservicesBanner/icons/3.png';
import casestudyBanner from '../../assets/casestudy/casestudy.png'

const DigitalDefense = () => {  
  const title = "Digital Defense";
  const pageName = "Services";
  const descTitle = "TITLE";
  const content1 = "Safeguarding your business is just as important as driving bottom-line growth. We help you rethink resilience by mitigating risks, and pre-empting cybersecurity threats, thereby securing your business and enabling you to adopt an ‘always-on’ approach when it comes to external vulnerabilities."
  const subtitle = "Drive value and speed of business impact";
  const casestudytitle = "Digital Defense";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  
  const subServicesArray = [
    {
      id:1,
      title : 'IAM',
      icon: One,
      color :"#0623D9",
      path : '/iam',
      cName: 'dropdown-link',
      ref: 'digital-defence',
      content : "Legacy identity systems and processes no longer work with modern threats facing enterprises. To successfully keep your business secure, you need identity solutions that are flexible and scalable. Our digital defense services will help you plan, implement, and manage an IAM environment that is easy to use, agile, and highly secure.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line
  },
  {
      id:2,
      title : 'Governance, Risk & Compliance',
      icon: Two,
      color :"#00B47E",
      path : '/govt-risk',
      cName: 'dropdown-link',
      ref: 'digital-defence',
      content : "Managing risk is far beyond being responsive to change – it is being able to create internal controls within the organization that helps in identifying real-time risks and mitigating threats. And it requires an all-in approach from key stakeholders. Our Governance, Risk and Compliance services address the requirements for risk and compliance management in operations and business processes.",
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      line: Line
  },
  {
      id:3,
      title : 'Application Security',
      color :"#020C4E",
      icon: Three,
      path : '/application-security',
      cName: 'dropdown-link',
      ref: 'digital-defence',
      content : "When you think application, you think speed. And for your applications to thrive, their security should match the pace of development. We help you build application security from the very beginning at speed and scale, resulting in enhanced security throughout the entire application portfolio.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  {
      id:4,
      title : 'Digital Identity',
      icon: One,
      color :"#00B47E",
      path : '/digital-identity',
      cName: 'dropdown-link',
      ref: 'digital-defence',
      content : "Embedding digital identity is essential to your digital transformation journey and critical for your success and reputation. Our portfolio of digital identity services helps you fight cyber threats, protect user credentials, secure outcomes and improve end-user experience.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  ]


  return (
      <div className='app-engg'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} content1={content1}/>
    </div>
  )
}

export default DigitalDefense