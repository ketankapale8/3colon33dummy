import React from 'react';
import './infra.scss';
import SubServicesCommon from '../common/SubServicesCommon/SubServicesCommon';
import Line from '../../assets/SubservicesBanner/line.png';
import One from '../../assets/SubservicesBanner/icons/1.png';
import Two from '../../assets/SubservicesBanner/icons/2.png';
import Three from '../../assets/SubservicesBanner/icons/3.png';
import casestudyBanner from '../../assets/casestudy/casestudy.png'

const InfrastructureServices = () => {  
  const title = "Infrastructure Services";
  const pageName = "Services";
  const descTitle = "TITLE";
  const content1 = "Make your infrastructure as good as your business aspirations. We enable you to give your IT infrastructure the agility it needs for rapid business transformation at scale - so that your enterprise is nimble, efficient, and intelligent, all the time."
  const subtitle = "Drive value and speed of business impact";
  const casestudytitle = "Infrastructure Services";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  
  const subServicesArray = [
    {
      id:1,
      title : 'Workplace Services',
      icon: One,
      color :"#0623D9",
      path : '/workplace-services',
      cName: 'dropdown-link',
      ref: 'infra',
      content : "The future of work demands workforces to remain healthy and productive and workplaces to be resilient, efficient, and secure. With the rapid change to hybrid workplaces, only cloud implementation is not enough. You need to give your business the power of the cloud’s full potential while adapting to new ways of working. We can help you rethink the way your workplace and workspace operate.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line
  },
  {
      id:2,
      title : 'DC & Network Services',
      icon: Two,
      color :"#00B47E",
      path : '/dc-network-services',
      cName: 'dropdown-link',
      ref: 'infra',
      content : "As workloads make the move to the cloud, most enterprise networks still operate under legacy conditions. It is time for you to reimagine your enterprise networks so that you can reap the full value of the cloud. From concept to implementation, we will help you create an efficient network responding to greater connectivity and higher bandwidth needs, while ensuring business security.",
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      line: Line
  },
  {
      id:3,
      title : 'Next-Gen Support Services',
      color :"#020C4E",
      icon: Three,
      path : '/next-gen-support-services',
      cName: 'dropdown-link',
      ref: 'infra',
      content : "As organizations make the transition to becoming digital-led, it is time to ask the right questions about their IT infrastructure. Does it catalyze and complement the pace of digital transformation? What are the right boundaries between infrastructure, applications, and security that need to be taken into account? We bring the best service management approach to help you strike a balance between cost, reliability, and speed.",
      content1 : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  
  ]


  return (
      <div className='infra'>
         <SubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subServicesArray={subServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} content1={content1}/>
    </div>
  )
}

export default InfrastructureServices