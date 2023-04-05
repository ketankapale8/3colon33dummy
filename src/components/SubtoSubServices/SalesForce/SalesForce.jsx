import React from 'react';
import './salesforce.scss';
import SubtoSubServicesCommon from '../../common/SubtoSubServicesCommon/SubtoSubServicesCommon';
import Line from '../../../assets/SubservicesBanner/line.png';
import casestudyBanner from '../../../assets/casestudy/casestudy.png';
import One from '../../../assets/subtosubservices/1.png';
import Two from '../../../assets/subtosubservices/2.png'

// import casestudyBanner from '../../../assets/casestudy/casestudy.png'

const SalesForce = () => {
  const title = "SalesForce";
  const pageName = "Enterprise Applications";
  const descTitle = "TITLE";
  const subtitle = "Drive value and speed of business impact";
  const casestudytitle = "SalesForce";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";

  const subtosubServicesArray = [
    {
      id:1,
      title : 'Content & CasePrep to be taken from Management' ,       
      icon: One,
      color :"#0623D9",
      path : '/product-engineering',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line
  },
 
  ]
  return (
    <div className='salesforce'>
        <SubtoSubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subtosubServicesArray={subtosubServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} />
    </div>
  )
}

export default SalesForce