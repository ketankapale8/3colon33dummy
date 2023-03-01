import React from "react";
import "./partners.scss";
import rect1 from '../../../assets/partners/rect1.png';
import rect2 from '../../../assets/partners/rect2.png';
import rect3 from '../../../assets/partners/rect3.png';
import one from '../../../assets/partners/1.png'
import two from '../../../assets/partners/2.png'
import three from '../../../assets/partners/gcloud.png';
import four from '../../../assets/partners/4.png';


const sliderArray = [
    {
        title : "MICROSOFT",
        logo : one,
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        img : rect1,
        id : 1
    },
    {
        title : "AWS",
        logo : two,
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        img : rect2,
        id : 2
    },
    {
        title : "GOOGLE CLOUD",
        logo : three,
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        img : rect3,
        id : 3
    }
]

const Partners = () => {
  return (
    <div className="partners">
      <div className="partnersleft">
        <div className="partnersDesc">
          <div className="title">PARTNERS</div>
          <div className="subtitle">Our Partners</div>
          <div className="divBelowsubtitle" />
          <div className="descriptionDiv">
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry’s standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived.
            </p>
          </div>
        </div>
      </div>

      <div className="partnersRight">
        <img src={four} style={{width:'55px', height:"25px", paddingTop:'470px'}}/>
        {sliderArray.map(item=>{
            return (
         <div className="containerOne" key={item.id}>
            <div className="box1">
                <img src={item.img} className="boxImg"/>
                <img src={item?.logo} style={{width:'140px', height:'60px', position:'absolute', paddingLeft:'23%'}}/>
                
            </div>
            <div className="box2">
                <h4>{item.title}</h4>
                <p style={{fontWeight:'0.7rem' , padding:'10px'}}>{item.desc}</p>
            </div>

        </div>

            )
        })}
        

      </div>
    </div>
  );
};

export default Partners;
