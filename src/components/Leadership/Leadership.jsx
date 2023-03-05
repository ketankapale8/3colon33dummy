import React from 'react';
import './leadership.scss';
import img from '../../assets/leadership/lbanner.png';
import leadership from '../../assets/leadership/1.png';
import BannerComponent from '../common/BannerComponent/BannerComponent';
import DescriptionCommon from '../common/DescriptionCommon/DescriptionCommon';
import icon from '../../assets/banner/icon.png'


const Leadership = () => {
    const title = "LEADERSHIP";
    const pageName = "Influencial Leadership "
    // const pageName1 = "Meaningful Life";
    const descTitle = "TITLE";
  const subtitle = "People that fuel us everyday";
  const commonImg = leadership;
  const content1 = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."
//   const btnTitle = "View Open Positions"
  return (
    <div className='leadership'>
        <BannerComponent img={img} title={title} pageName={pageName} icon={icon}/>
      <DescriptionCommon descTitle={descTitle} subtitle={subtitle} content1={content1}  commonImg={commonImg} showBtn={false} />
    </div>
  )
}

export default Leadership