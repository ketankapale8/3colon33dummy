import React from 'react';
import './appengg.scss';
import SubServicesCommon from '../common/SubServicesCommon/SubServicesCommon';
import Line from '../../assets/SubservicesBanner/line.png';
import One from '../../assets/SubservicesBanner/icons/1.png';
import Two from '../../assets/SubservicesBanner/icons/2.png';
import Three from '../../assets/SubservicesBanner/icons/3.png';
import casestudyBanner from '../../assets/casestudy/casestudy.png'

const ApplicationEngg = () => {  
  const title = "Application Engineering";
  const pageName = "Services";
  const descTitle = "TITLE";
  const subtitle = "Modernize your enterprise today, for tomorrow";
  const content1 = "We support your business in deriving the maximum digital value and increasing longevity of their complex applications, as well as unifying them. We also help you assess and navigate the application environment suited to your organization’s needs. The result? Your enterprise will get the agility that it needs to gain competitive advantage"
  const casestudytitle = "Application Engineering";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  
  const subServicesArray = [
    {
      id:1,
      title : 'Product Engineering',
      icon: One,
      color :"#0623D9",
      path : '/product-engineering',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "For the always-on and connected customer, experiences matter – for businesses delivering on that promise, it means being hyper-oriented on outcome and intuitiveness. To make this a reality, your business needs a system that enables interactions, exchange and sharing of data across the breadth of the organization. We work with you to build scalable products, with agility, customer experience and performance at its core",
      line: Line
  },
  {
      id:2,
      title : 'Legacy Modernization',
      icon: Two,
      color :"#00B47E",
      path : '/legacy-modernization',
      cName: 'dropdown-link',
      ref: 'application',
      content : "To drive business growth, you need an IT environment that is efficient, agile to change and responsive to the rapidly evolving needs of customers. That is the foundation on which you need your business to thrive, today and tomorrow. With our legacy modernization services - you can give your business better experiences, agility, flexibility, and resilience. ",
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      line: Line
  },
  {
      id:3,
      title : 'Low Code Architecture',
      color :"#020C4E",
      icon: Three,
      path : '/low-code-no-code-architecture',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Democratize innovation - take your ideas to the next level. From automated governance to seamless integration to cloud platforms, the benefits of low code are wide-ranging. We partner in your digital journey by creating fit-for-purpose low code architecture solutions that will enable you to modernize your business and accelerate outcomes. ",
      line: Line 
  },

  {
      id:4,
      title : 'Quality Assurance',
      icon: One,
      color :"#00B47E",
      path : '/quality-assurance',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "When it comes to applications, whether it’s for your organization or for your end customers – it is imperative to maintain their seamless performance, so that they are at their best possible outcomes, over and over again. We take a holistic approach to Quality Assurance rather than looking at it from a standalone perspective, by embedding quality throughout the development cycle. Our focus is to ensure that applications ‘don’t just deliver’, but create differentiated user experience, repeatedly.",
      line: Line 
  },
  {
      id:5,
      title : 'Mobile App Development',
      icon: Two,
      color :"#0623D9",
      path : '/mobile-app-development',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Create thumb-stopping mobile app experiences with us. With our end-to-end mobile app development services, you can take your digital engagement notches up, with customers and your people. From building user-intuitive apps that are easy-to-use, we also equip them with advanced features, efficient tracking and analytics. Start planning the future of mobility of your business with us, today.",
      line: Line 
  }
  ]


  return (
      <div className='app-engg'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} content1={content1}/>
    </div>
  )
}

export default ApplicationEngg