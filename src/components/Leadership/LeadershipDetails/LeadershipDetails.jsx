import React from "react";
import "./leadershipDetails.scss";
import one from "../../../assets/leadershipImgs/1.png";
import bar from "../../../assets/leadershipImgs/bar.png";


const LeadershipDetails = () => {
  const leadershipArray = [
    {
      title: "James Smith",
      titledesc: "President",
      desc1:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
      desc2:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
      img: one,
    },
  ];
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
            {leadershipArray.map(item=>{
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
          </div>
        </div>
        <div className="leadershipDetailsMiddle">
          <img src={bar} alt="bar" className="barImg"/>
        </div>
        <div className="leadershipBottom">
        </div>
      </div>
    </div>
  );
};

export default LeadershipDetails;
