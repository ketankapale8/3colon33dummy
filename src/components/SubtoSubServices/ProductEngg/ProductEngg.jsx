import React from 'react';
import './productengg.scss';
import SubtoSubServicesCommon from '../../common/SubtoSubServicesCommon/SubtoSubServicesCommon';
import Line from '../../../assets/SubservicesBanner/line.png';
import casestudyBanner from '../../../assets/casestudy/casestudy.png';
import One from '../../../assets/subtosubservices/1.png';
import Two from '../../../assets/subtosubservices/2.png'

// import casestudyBanner from '../../../assets/casestudy/casestudy.png'

const ProductEngg = () => {
  const title = "Product Engineering";
  const pageName = "Application Engineering";
  const descTitle = "TITLE";
  const subtitle = "Drive value and speed of business impact";
  const casestudytitle = "Product Engineering";
  const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";

  const subtosubServicesArray = [
    {
      id:1,
      title : 'New Product Development',
      icon: One,
      color :"#0623D9",
      path : '/product-engineering',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line
  },
  {
      id:2,
      title : 'Product Customization',
      icon: Two,
      color :"#00B47E",
      path : '/legacy-modernization',
      cName: 'dropdown-link',
      ref: 'application',
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      line: Line
  },
  {
      id:3,
      title : 'Product , Software and Services Lifecycle Management',
      color :"#020C4E",
      icon: One,
      path : '/low-code-no-code-architecture',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },

  {
      id:4,
      title : 'Product Quality Compliance',
      icon: Two,
      color :"#00B47E",
      path : '/quality-assurance',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  },
  {
      id:5,
      title : 'Simulation Process and Data Management',
      icon: One,
      color :"#0623D9",
      path : '/mobile-app-development',
      cName: 'dropdown-link',
      ref: 'application',
      content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
      content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
      line: Line 
  }
  ]
  return (
    <div className='productengg'>
        <SubtoSubServicesCommon title={title} pageName={pageName} descTitle={descTitle} subtitle={subtitle} subtosubServicesArray={subtosubServicesArray} casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner} />
    </div>
  )
}

export default ProductEngg