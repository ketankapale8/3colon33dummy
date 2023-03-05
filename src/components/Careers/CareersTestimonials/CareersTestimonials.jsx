import React from "react";
import "./careerstestimonials.scss";
import rating from '../../../assets/testimonials/rating.png'
import rating1 from '../../../assets/testimonials/rating1.png';
import one from '../../../assets/careertest/1.png'
import two from '../../../assets/careertest/2.png'
import three from '../../../assets/careertest/3.png'



const CareersTestimonials = () => {
  return (
    <div className="ctest">
      <div className="ctestComponent">
        <div className="boxComp">
          <div className="box1">
            <div className="container1">
              <div className="title">TESTIMONIAL</div>
              <div className="subtitle">We Live Our Core Values</div>
              <div className="divBelowsubtitle"></div>
              <div className="descriptionDiv">
                <p className="description">
                  Satisfaction is just a rating, but loyalty is a brand.
                  Therefore, we treat each customer as if they are the only one.
                </p>
              </div>
            </div>
            <div className="container2">
                <img src={rating1} style={{paddingTop:'10px'}}/>
            <div className="title">Really love the leve of Experience…</div>
            <div className="descriptionDiv">
                <p>
                    Satisfaction is just a rating, but loyalty is a brand.
                    Therefore, we treat each customer as if they are the only one.
                    </p>

            </div>

            <div className="nameCont">
                <div className="imgCont">
                    <img src={one} alt="reviewImg" style={{width:'45px'}}/>
                </div>
                <div className="nameCont">
                    <div className="name">Shelby Cairns</div>
                    <div className="designation">
                        Sr. Developer
                    </div>
                </div>

            </div>

            </div>
          </div>
          <div className="box2">
            <div className="container1">
            <img src={rating1} style={{paddingTop:'10px'}}/>
            <div className="title">Great performance delivered…</div>
            <div className="descriptionDiv">
                <p>
                    Satisfaction is just a rating, but loyalty is a brand.
                    Therefore, we treat each customer as if they are the only one.
                    </p>

            </div>
            <div className="nameCont">
                <div className="imgCont">
                    <img src={two} alt="reviewImg" style={{width:'45px'}}/>
                </div>
                <div className="nameCont">
                    <div className="name">Hanna Webb</div>
                    <div className="designation">
                        Client Support
                    </div>
                </div>

            </div>
              
            </div>
            <div className="container2">
            <img src={rating1} style={{paddingTop:'10px'}}/>
            <div className="title">One of the best COMPANY…</div>
            <div className="descriptionDiv">
                <p>
                    Satisfaction is just a rating, but loyalty is a brand.
                    Therefore, we treat each customer as if they are the only one.
                    </p>

            </div>

            <div className="nameCont">
                <div className="imgCont">
                    <img src={three} alt="reviewImg" style={{width:'45px'}}/>
                </div>
                <div className="nameCont">
                    <div className="name">James Edwards</div>
                    <div className="designation">
                        Content Manager
                    </div>
                </div>

            </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CareersTestimonials;
