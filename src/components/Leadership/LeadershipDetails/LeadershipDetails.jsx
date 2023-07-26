import React, {useState , useEffect , useRef} from "react";
import "./leadershipDetails.scss";
import one from "../../../assets/leadershipImgs/1.png";
import bar from "../../../assets/leadershipImgs/bar1.png";
// import LeadershipCarousal from "../LeadershipCarousal/LeadershipCarousal";
import leader1 from '../../../assets/leadership/Img1.jpg'
import leader2 from '../../../assets/leadership/Img2.png'
import leader3 from '../../../assets/leadership/Img3.png'
import leader4 from '../../../assets/leadership/Img4.png'
import leader5 from '../../../assets/leadership/Img5.png'





import left from '../../../assets/leadership/Left.png'
import right from '../../../assets/leadership/right.png'




const leadershipArray = [
  {
    title: "Shaju Kurup",
    titledesc: "Founder and Managing Director",
    desc1:
      "Experienced Professional in IT Technology and Infrastructure Management covering multiple senior roles in IT Sales, Business Development, Consulting and Service Delivery.",
    desc2:
      "Experienced working with client CXO Organization and support sourcing, IT strategy creation and operations management.IT Transformation Management covering large program management and organizational change management",
    img: leader1,
    id : 0
  },
  {
      title: "Soumitro Mukherjee",
      titledesc: "Senior Partner and Head - Global Sales and Delivery ",
      desc1:
        "Strategizing for smarter consumption of IT Commoditizing standard business processes Tactically approaching technology adoption",
      desc2:
        "Taking a few small steps towards the startup ecosystem",
      img: leader2,
      id : 1,
    },

    {
      title: "Sudheesh Babu",
      titledesc: "Senior Partner",
      desc1:
        "13 Years of Architecting and Implementing IT Solutions.",
      desc2:
        "6 Years of Program/Project Management",
      img: leader3,
      id : 2
    },
    {
      title: "Mufaddal Kothari",
      titledesc: "CFO",
      desc1:
        "A seasoned professional with over 18+ years’ experience in managing large program departments in the USA, India, Middle East and Central Asia. Possess essential skills to manage a culturally diverse staff to successfully deliver on organizational goals. Effectively & successfully managed Human Resources, Administration and Operations Management of IT Companies, Chemical Processing Plants, Food-Grain Industries, Logistics and Ground Transportation in the USA, India, Kuwait & Afghanistan.",
      desc2:
        "Process Oriented Professional who has successfully integrated program policies and procedures to deliver organizational goals. A very strong analyst who is able to effectively adapt to critical systems engineering, project analysis methods and business process management methodology to develop essential program critiques and evaluate & implement quality control and best practice processes.",
      img: leader4,
      id : 3
    },
    {
      title: "Sonam Singh",
      titledesc: "Human Resources Manager",
      desc1:
        "I have more than 3 years of experience in the human resources in both recruitment and generalist roles. Currently, I am associated with a Switzerland based company as Manager - HR. I am hiring for IT roles.",
      desc2:
        "",
      img: leader5,
      id : 4
    },
];


const LeadershipDetails = () => {
  const [defaultItem , setDefaultItem ] = useState(leadershipArray.filter(item=>item.id == 0))
  const [selected , setSelected] = useState([]);

  useEffect(()=>{
    handleClick()
    handleClick()
  },[])
  
  const handleClick = (id) =>{
    setSelected(leadershipArray.filter(item=>item.id === id))
  }

  
  return (
    <div className="leadershipDetails">
      <div className="leadershipDetailsContainer">
        <div className="leadershipDetailsTop">
          <div className="headlines">
            <div className="title">LEADERSHIP</div>
            <div className="subtitle">KEY EXECUTIVES</div>
            <div className="divBelowsubtitle"></div>
          </div>
          <div className="desc">
            {selected.length == 0 ? (
              <>
                {defaultItem.map(item=>{
                   return (
                    <>
                    <div className="descImg">
                      <img src={item.img} alt="leadershipImg" className="leader"/>
                    </div>
                    <div className="descList">

                      <div className="title">{item.title}</div>
                      <div className="desc">{item.titledesc}</div>
                      <div className="paragraph">{item.desc1}</div>
                      <div className="paragraph">{item.desc2}</div>



                    </div>
                    
                    </>
                  )
                })}
              </>
            ) : (
              <>
                {selected?.map(item=>{
                  return (
                    <>
                    <div className="descImg">
                      <img src={item.img} alt="leadershipImg" className="leader"/>
                    </div>
                    <div className="descList">

                      <div className="title">{item?.title}</div>
                      <div className="desc">{item?.titledesc}</div>
                      <div className="paragraph">{item?.desc1}</div>
                      <div className="paragraph">{item?.desc2}</div>
                    </div>
                    
                    </>
                  )
                })}
              </>
            )
            }
          </div>
        </div>
        <div className="leadershipDetailsMiddle">
          <img src={bar} alt="bar" className="barImg"/>
        </div>
        <div className="leadershipBottom">
        <div className='carousalContainer'>
       
        <div className="carousal">
            <div className="carousal__images">
                {leadershipArray.map(item=>{
                    return (
                        <>
                            <div className="carousalItems" key={item.id} onClick={() =>handleClick(item.id)}>
                              <img className='carousal__image' src={item.img}/>
                              <h5>{item.title}</h5>
                              {/* <div className="imagedesc">{item.titledesc}</div> */}
                            </div>
                        </>
                    )
                })}

                {/* <button> */}
                <div className="carousal_buttons">
                  <img src={left} alt="left" className="carousel__button-left" />
                    <img src={right} alt="right" className="carousel__button-right" />

                </div>

                {/* </button> */}
                {/* <button> */}

                {/* </button> */}
            </div>
        </div>
    </div>
        </div>
      </div>
    </div>
  );
};

export default LeadershipDetails;
