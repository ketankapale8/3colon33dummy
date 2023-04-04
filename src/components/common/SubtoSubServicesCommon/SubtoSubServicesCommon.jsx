import React from 'react';
import './subtosubservices.scss';
import Footer from '../Footer/Footer';
import img from '../../../assets/SubservicesBanner/Banner1.png';
import icon from '../../../assets/banner/icon.png';
import BannerComponent from '../BannerComponent/BannerComponent';
import servicesRightImg from '../../../assets/SubservicesBanner/servicesleft.png';
// import Line from '../../../assets/SubservicesBanner/line.png';
import DescriptionCommon from '../DescriptionCommon/DescriptionCommon';
// import SubServicesDesc from './SubtoSubServicesDesc/SubtoSubServicesDesc';
import CaseStudy from '../casestudy/CaseStudy';
import Connectwithus from '../connectwithus/Connectwithus';
import casestudyBanner from '../../../assets/casestudy/casestudy.png';
import SubtosubServicesDesc from './SubtoSubServicesDesc/SubtoSubServicesDesc';
// import ServicesDesc from './ServicesDesc/ServicesDesc'

const SubtoSubServicesCommon = ({ title , pageName , descTitle , subtitle  , caseStudySituation1 , caseStudySituation2 , casestudytitle , casestudyBanner ,subtosubServicesArray}) => {
  const commonImg = servicesRightImg;
  // const title = "Application Engineering";
  // const pageName = "Services";
  // const descTitle = "TITLE";
  // const subtitle = "Drive value and speed of business impact";
  // const casestudytitle = "Application Engineering";
  // const caseStudySituation1 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
  // const caseStudySituation2 = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam hic deserunt culpa reprehenderit, similique porro voluptates expedita eveniet voluptas voluptatum.";
 const content1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."

  // const subtosubServicesArray = [
  //   {
  //     id:1,
  //     title : 'Product Engineering',
  //     icon: One,
  //     color :"#0623D9",
  //     path : '/product-engineering',
  //     cName: 'dropdown-link',
  //     ref: 'application',
  //     content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
  //     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
  //     line: Line
  // },
  // {
  //     id:2,
  //     title : 'Legacy Modernization',
  //     icon: Two,
  //     color :"#00B47E",
  //     path : '/legacy-modernization',
  //     cName: 'dropdown-link',
  //     ref: 'application',
  //     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
  //     content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
  //     line: Line
  // },
  // {
  //     id:3,
  //     title : 'Low Code Architecture',
  //     color :"#020C4E",
  //     icon: Three,
  //     path : '/low-code-no-code-architecture',
  //     cName: 'dropdown-link',
  //     ref: 'application',
  //     content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
  //     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
  //     line: Line 
  // },

  // {
  //     id:4,
  //     title : 'Quality Assurance',
  //     icon: One,
  //     color :"#00B47E",
  //     path : '/quality-assurance',
  //     cName: 'dropdown-link',
  //     ref: 'application',
  //     content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
  //     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
  //     line: Line 
  // },
  // {
  //     id:5,
  //     title : 'Mobile App Development',
  //     icon: Two,
  //     color :"#0623D9",
  //     path : '/mobile-app-development',
  //     cName: 'dropdown-link',
  //     ref: 'application',
  //     content1 : "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem ullam possimus id corporis odio soluta adipisci officia voluptas, ipsum earum",
  //     content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cupiditate, dolorum. Omnis in error facilis quisquam. Animi sequi magnam perferendis eveniet.",
  //     line: Line 
  // }
  // ]
  return (
    <div className='subtosubservicesCommon'>
    <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
    <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1} commonImg={commonImg} showBtn={false} />
    <SubtosubServicesDesc subtosubServicesArray={subtosubServicesArray}/>
    <CaseStudy casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner}/>
    <Connectwithus/>
    <Footer/>
</div>
  )
}

export default SubtoSubServicesCommon