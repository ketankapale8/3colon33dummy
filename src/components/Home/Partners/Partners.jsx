import React , {useState} from "react";
import "./partners.scss";
import rect1 from '../../../assets/partners/rect1.png';
import rect2 from '../../../assets/partners/rect2.png';
import rect3 from '../../../assets/partners/rect3.png';
import one from '../../../assets/partners/1.png'
import two from '../../../assets/partners/2.png'
import three from '../../../assets/partners/gcloud.png';
import five from '../../../assets/partners/5.png';
import four from '../../../assets/partners/4.png';
import six from '../../../assets/partners/6.png';
import seven from '../../../assets/partners/7.png';
import colonasset0 from '../../../assets/partners/colonasset0.jpeg'
import colonasset1 from '../../../assets/partners/colonasset1.jpeg'



const sliderArray = [
    {
        title : "MICROSOFT",
        logo : one,
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        img : colonasset0,
        id : 1,
        batch : 0,
    },
    {
        title : "AWS",
        logo : two,
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        img : colonasset1,
        id : 2,
        batch : 0
    },
    // {
    //     title : "AWS",
    //     logo : two,
    //     desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
    //     img : seven,
    //     id : 2,
    //     batch : 0
    // },
    {
        title : "GOOGLE CLOUD",
        logo : three,
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        img : six,
        id : 3,
        batch : 1
    },
    {
        title : "IBM",
        logo : five,
        desc : 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        img : seven,
        id : 4,
        batch : 1
    }
]

const Partners = () => {
    const [count ,setCount] = useState(0);
    const current = sliderArray.filter(item=>item.batch == count)
    const onRight = (batch) =>{
        if(batch>=0 && count<1){
            setCount(count+1)
        }else if(count==1){
            setCount(0)
        }
    }
  return (
    <div className="partners">
      <div className="partnersContainer">
            <div className="partnersLeft">
            {/* <h4 className='title'>PARTNERS</h4> */}
              <div className="subtitle">Our service partners</div>
                <div className='divBelowsubtitle'/>
                <div className="descriptionDiv1">
                    <p className='desc'>
                    We work with the world’s leading technology partners to bring in the right balance of strategy, expertise and technology for your business, at the right time. 
                    </p>
                </div>
              
            </div>

            <div className="partnersRight">
              {current.map(item=>{
                  return (
                    <>
                      <img src={four} className="arrow" onClick={()=>onRight(item.batch)}/>
              <div className="containerOne" key={item.id}>
                  <div className="box1">
                      <img src={item.img} className="boxImg"/>
                      {/*   <img src={item?.logo} style={{width:'140px', height:'60px', position:'absolute', paddingLeft:'23%'}}/> */}
                      
                  </div>
                  <div className="box2">
                      <h4>{item.title}</h4>
                      {/* <p style={{fontWeight:'0.7rem' , padding:'10px' , textAlign:'start'}}>{item.desc}</p> */}
                  </div>

              </div>
                    </>

                  )
              })}
              

            </div>

      </div>
    </div>
  );
};

export default Partners;
