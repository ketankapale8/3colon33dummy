import React from "react";
import "./descommon.scss";
import { Link } from "react-router-dom";


const DescriptionCommon = ({
  descTitle,
  subtitle,
  pageName,
  content1,
  content2,
  commonImg,
  showBtn,
  btnTitle,
  to
}) => {
  // const [btn , showBtns] = useState(false)
  return (
    <div className="desccommon">
      <div className="desccommonContainer">
        <div className="descLeft">
          {/* <div className="title">{descTitle}</div> */}
          <div className="subtitle11">{subtitle}</div>
          <div className="divBelowsubtitle"></div>
          <div className="descriptionDiv">
            <p className="desc">{content1}</p>
            <p  className="desc">{content2} </p>
          </div>
          <Link style={{textDecoration : 'none'}} to={to}>
            <div style={{paddingBottom:'30px'}}>
              {showBtn === true && <button className="roleBtn">{btnTitle}</button>}
            </div>
          
          </Link>
        </div>
        <div className="descRight">
          <img className="descbannerImg" src={commonImg} alt="descBanner" />
        </div>
      </div>
    </div>
  );
};

export default DescriptionCommon;
