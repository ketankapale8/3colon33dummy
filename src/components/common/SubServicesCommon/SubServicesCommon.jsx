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

const SubServicesCommon = ({title , pageName , descTitle , subtitle , subServicesArray , caseStudySituation1 , caseStudySituation2 , casestudytitle , casestudyBanner}) => {
  const commonImg = servicesRightImg;
  const content1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
  return (
    <div className='subservicescommon'>
    <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
    <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1}  commonImg={commonImg} showBtn={false} />
    <SubServicesDesc subServicesArray={subServicesArray}/>
    <CaseStudy casestudytitle={casestudytitle} caseStudySituation1={caseStudySituation1} caseStudySituation2={caseStudySituation2} casestudyBanner={casestudyBanner}/>
    <Connectwithus/>
    <Footer/>
</div>
  )
}

export default SubServicesCommon