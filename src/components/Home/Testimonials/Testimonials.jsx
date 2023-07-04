import React , {useState} from 'react';
import './testimonials.scss';
import review1 from '../../../assets/testimonials/review1.png';
import leader2 from '../../../assets/leadership/leader1.png';
import leader3 from '../../../assets/leadership/leader3.png';

import rating from '../../../assets/testimonials/rating.png';
import right from '../../../assets/testimonials/right.png';
import left from '../../../assets/testimonials/left.png';
import {Link} from 'react-router-dom';



const reviewArray = [
  {
    id : 0,
    title : "James Edwards",
    position : "CTO , WebEx",
    ratingImg : rating,
    titleImg : review1,
    reviewTitle : "Great performance delivered…",
    reviewDesc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."

  },
  {
    id : 1,
    title : "Fiona Smith",
    position : "President, Swiss Re",
    ratingImg : rating,
    titleImg : leader2,
    reviewTitle : "Digital Transformation at its best",
    reviewDesc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."

  },
  {
    id : 2,
    title : "Andrew Watts",
    position : "CTO , Expedia",
    ratingImg : rating,
    titleImg : leader3,
    reviewTitle : "Needed a service like this",
    reviewDesc : "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived."

  }
]

const Testimonials = () => {
  const [count , setCount ] = useState(0)
  let current = reviewArray.filter(item=>item.id == count);
  const onRight = (id) =>{
    if(count>=0 && count<2){
      setCount(count+1)

    }else if(count == 2){
      setCount(0)
    }
  }
  const onLeft = () =>{
    if(count<0){
      setCount(reviewArray.length)
    }else if(count>0 && count<2){
      setCount(count-1)
    }
  }

  return (
    <div className='testimonials'>
      <div className="testimonialContainer">
      <h4 className='title'>TESTIMONIALS</h4>
              <div className="subtitle">What Our Clients Say?</div>
                <div className='divBelowsubtitle'/>
                <div className="descriptionDiv">
                    <p className='desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry’s standard . 
                    </p>
                </div>
                <div className="testimonialBox">
              {current.map(item=>{
                return (
                  <>
                  <img src={left} alt="leftarrow" style={{width: '50px' , height:'50px', marginLeft:'-20px' , position:'absolute', paddingTop:'180px' , cursor:'pointer'}}  onClick={()=>onLeft(item.id)}/>
                  <img src={right} style={{width: '50px' , height:'50px', paddingLeft:'1280px' , position:'absolute' ,paddingTop:'180px' , cursor:'pointer'}} onClick={()=>onRight(item.id)} alt="rightArrow"/>
                  <div className="boxContainer" key={item.id}>
                    <div className="photoContainer">
                      <img src={item.titleImg} alt="reviewerImg" className='reviewerImg'/>

                    </div>
                    <div className="reviewContainer">
                      <h4>{item.reviewTitle}</h4>
                      <p>{item.reviewDesc}</p>
                      <h4>{item.title}</h4>
                      <div>{item.position}</div>
                      <img src={item.ratingImg}/>
                    </div>
                  </div>
                  </>
                )
              })}
                </div>
                <div className="connectwithusBox">
                <div className="subtitle">Lets connect to start a conversation</div>
                <Link to="/aboutus" style={{textDecoration:'none'}}>
              <button className='roleBtn'>
                Connect with us
              </button>
            
            </Link>
                </div>

      </div>
    </div>
  )
}

export default Testimonials