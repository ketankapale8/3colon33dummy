import React from 'react';
import './cloudengg.scss';
import SubServicesCommon from '../common/SubServicesCommon/SubServicesCommon';
import Line from '../../assets/SubservicesBanner/line.png';
import One from '../../assets/SubservicesBanner/icons/1.png';
import Two from '../../assets/SubservicesBanner/icons/2.png';
import Three from '../../assets/SubservicesBanner/icons/3.png';
import casestudyBanner from '../../assets/casestudy/casestudy.png'

const CloudEngg = () => {
  const title = "Cloud Engineering";
  const pageName = "Services";
  const descTitle = "TITLE";
  const subtitle = "Harness the power of the cloud. ";
  const content1 = "Create compelling customer experiences and ease of business, while driving your operations seamlessly. We come with proven cross-sector experience and a deep understanding of critical platforms, enabling your business to create end-to-end cloud strategies and harness change. "
  const casestudytitle = "Cloud Engineering";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  
  const subServicesArray = [
    {
      id:1,
      title : 'Cloud Migration',
      icon: One,
      color :"#0623D9",
      path : '/cloud-migration',
      cName: 'dropdown-link',
      ref: 'cloud',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "We support your business in deriving the maximum digital value and increasing longevity of their complex applications, as well as unifying them. We also help you assess and navigate the application environment suited to your organization’s needs. The result? Your enterprise will get the agility that it needs to gain competitive advantage",
      line: Line
  },
  {
      id:2,
      title : 'DevOps',
      icon: Two,
      color :"#00B47E",
      path : '/devops',
      cName: 'dropdown-link',
      ref: 'cloud',
      content : "For your organization to deliver on the promise of accelerated time to market, excellent customer experience, and responsiveness to change – you need the company’s engine to run smoothly and efficiently at all times. DevOps is the catalyst that can help you stay true to that promise. We enable your DevOps journey by speeding up development and delivery processes, bridging the gap between IT operations and development teams.",
      content1 : " ",
      line: Line
  },
  {
      id:3,
      title : 'Cloud Optimization',
      color :"#020C4E",
      icon: Three,
      path : '/cloud-optimization',
      cName: 'dropdown-link',
      ref: 'cloud',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "You can only make the most of your journey to the cloud when you manage it well. Effective cloud optimization can make your operating models more responsive, dynamic, and powerful. To do this, your organization needs to break away from traditional approaches and embrace the continuous optimization and management of performance, cost, capacity, and consumption. We help you through the process to keep your cloud environment nimble while continuously monitoring progress.",
      line: Line 
  },

  {
      id:4,
      title : 'Hybrid Cloud',
      icon: One,
      color :"#00B47E",
      path : '/hybrid-cloud',
      cName: 'dropdown-link',
      ref: 'cloud',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Hybrid cloud deployment brings the best of both – the speed and innovation of the public cloud and the security, and regulatory compliance of the private cloud. We help in developing your hybrid cloud strategy and partner with you to stay the course on deployment.",
      line: Line 
  },

  ]
  return (
    <div className='cloud-engg'>
        <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} content1={content1}/>
    </div>
  )
}

export default CloudEngg