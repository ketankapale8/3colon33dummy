import React, {useState , useEffect , useRef} from "react";
import "./leadershipDetails.scss";
import one from "../../../assets/leadershipImgs/1.png";
import bar from "../../../assets/leadershipImgs/bar.png";
import LeadershipCarousal from "../LeadershipCarousal/LeadershipCarousal";
import leader1 from '../../../assets/leadership/leader1.png'
import leader2 from '../../../assets/leadership/leader2.png'
import leader3 from '../../../assets/leadership/leader3.png'
import left from '../../../assets/leadership/Left.png'
import right from '../../../assets/leadership/right.png'




const leadershipArray = [
  {
    title: "Fiona Smith",
    titledesc: "President",
    desc1:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
    desc2:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
    img: leader1,
    id : 0
  },
  {
      title: "Flora Daniels",
      titledesc: "Asst Vice President",
      desc1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
      desc2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      img: leader2,
      id : 1,
    },

    {
      title: "Andrew Watts",
      titledesc: "Chief Financial Officer (CFO)",
      desc1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
      desc2:
        "",
      img: leader3,
      id : 2
    },
];


const LeadershipDetails = () => {
  const [defaultItem , setDefaultItem ] = useState(leadershipArray.filter(item=>item.id == 0))
  const [selected , setSelected] = useState([]);

  useEffect(()=>{
    // handleClick()
    // handleClick()
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
                      <div className="paragraph">{item.desc1}</div>



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
                              <div className="imagedesc">{item.titledesc}</div>
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
