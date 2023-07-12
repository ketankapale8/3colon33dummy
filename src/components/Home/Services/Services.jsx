import React from "react";
import "./services.scss";
import servicesImg from "../../../assets/services/servicesImg.png";
import img1 from "../../../assets/services/img1.png"
import img2 from "../../../assets/services/Image2.png"
import img3 from "../../../assets/services/Image3.png"
import img4 from "../../../assets/services/Image4.png"


const container1 = {
  item1 : {
    title : "Digital Services",
    img : img1,
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry"

  },
   
  item2 : {
    title : "Data center and network ",
    img : img2,
    desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'

  }
  
};

const container2 = {
  item1 : {
    title : "Artificial Intelligence",
    img : img3,
    desc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry"

  },
   
  item2 : {
    title : "Customer Experience",
    img : img4,
    desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry'

  }
  
};

const Services = () => {
  return (
    <div className="services">

        <div className="servicesContainer">
              <div className="servicesLeft">
        {/* <img
          src={servicesImg}
          alt="servicesImg"
          className="servicesbannerImg"
          // style={{ width: "694px", height: "955px", zIndex: 0 }}
        /> */}
              {/* <h4 className='title'>TITLE</h4> */}
              <div className="subtitle">What We do?</div>
                <div className='divBelowsubtitle'/>
                <div className="descriptionDiv">
                    <p className='desc'>
                    We bring together our industry expertise and proven global experience to partner with you, so that you can operate in a continuously changing world, pre-empt disruption and act on it. Connect with us to reinvent your business, uncover new value drivers, and embrace the future.
                    </p>
                </div>

                
              </div>

              <div className="servicesRight">
                <div className="containerOne">              
                  <div className="box1">
                    <img alt="box1Img" src={container1.item1.img} className="logo"/>
                    <div className="items" style={{lineHeight: '28px'}}>
                      <h3 className="title">{container1.item1.title}</h3>
                      <p className="desc">{container1.item1.desc}</p>

                    </div>
                  </div>
                  <div className="box2">
                  <img alt="box2Img" src={container1.item2.img} className="logo"/>
                  <div className="items" style={{lineHeight: '28px'}}>

                    <h3 className="title">{container1.item2.title}</h3>
                    <p className="desc">{container1.item2.desc}</p>

                  </div>


                  </div>

                </div>
                <div className="containerTwo">
                <div className="box3">
                <img alt="box2Img" src={container2.item1.img} className="logo"/>
                <div className="items" style={{lineHeight: '28px'}}>
                    <h3 className="title">{container2.item1.title}</h3>
                    <p className="desc">{container2.item1.desc}</p>

                </div>
                

                </div>
                  <div className="box4">
                  <img alt="box2Img" src={container2.item2.img} className="logo"/>
                  <div className="items" style={{lineHeight: '28px'}}>

                    <h3 className="title">{container2.item2.title}</h3>
                    <p className="desc">{container2.item2.desc}</p>
                    </div>



                  </div>


                </div>

              </div>

        </div>
    </div>
  );
};

export default Services;
