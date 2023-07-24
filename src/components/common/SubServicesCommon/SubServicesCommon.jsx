import React from 'react';
import './subservicescommon.scss';
import Footer from '../Footer/Footer';
import img from '../../../assets/SubservicesBanner/Banner1.png';
import icon from '../../../assets/banner/icon.png';
import BannerComponent from '../BannerComponent/BannerComponent';
import servicesRightImg from '../../../assets/SubservicesBanner/servicesleft.png';
// import Line from '../../../assets/SubservicesBanner/line.png';
import DescriptionCommon from '../DescriptionCommon/DescriptionCommon';
import SubServicesDesc from './SubServicesDesc/SubServicesDesc';
import CaseStudy from '../casestudy/CaseStudy';
import Connectwithus from '../connectwithus/Connectwithus';
// import ServicesDesc from './ServicesDesc/ServicesDesc'

const SubServicesCommon = ({title , pageName , descTitle , subtitle , subServicesArray , caseStudySituation1 , caseStudySituation2 , casestudytitle , casestudyBanner , content1}) => {
  const commonImg = servicesRightImg;
  // const content1 = "We support your business in deriving the maximum digital value and increasing longevity of their complex applications, as well as unifying them. We also help you assess and navigate the application environment suited to your organization’s needs. The result? Your enterprise will get the agility that it needs to gain competitive advantage"
  return (
    <div className='subservicescommon'>
    <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
    <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1}  commonImg={commonImg} showBtn={false} />
    <SubServicesDesc subServicesArray={subServicesArray}/>
    {/* <CaseStudy casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner}/> */}
    <Connectwithus/>
    <Footer/>
</div>
  )
}

export default SubServicesCommon