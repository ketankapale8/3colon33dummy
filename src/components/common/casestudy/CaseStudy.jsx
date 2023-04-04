import React from 'react';
import './casestudy.scss';

const CaseStudy = ({caseStudySituation1 , caseStudySituation2 , casestudytitle , casestudyBanner}) => {
  return (
    <div className="casestudy">
        <div className="casestudycommonContainer">
            <div className="descLeft">
                <div className="title">Case Study</div>
                <div className="subtitle">{casestudytitle}</div>
                {/* <div className="divBelowsubtitle"></div> */}
                <div className="descriptionDiv">
                    <div className="casestudyTitle">SITUATION</div>
                    <div className="desc">{caseStudySituation1}</div>
                    <div className="desc">{caseStudySituation2}</div>
                </div>
            </div>
            <div className="descRight">
            <img className="descbannerImg" src={casestudyBanner} alt="descBanner" />
            </div>
        </div>
    </div>
  )
}

export default CaseStudy