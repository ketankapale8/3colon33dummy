import React , {useState , useEffect , useRef } from 'react';
import './carousal.scss';
import leader1 from '../../../assets/leadership/leader1.png'
import leader2 from '../../../assets/leadership/leader2.png'
import leader3 from '../../../assets/leadership/leader3.png'



const LeadershipCarousal = () => {
    const leadershipArray = [
        {
          title: "Fiona Smith",
          titledesc: "President",
          desc1:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
          desc2:
            "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
          img: leader1,
        },
        {
            title: "Flora Daniels",
            titledesc: "Asst Vice President",
            desc1:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
            desc2:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            img: leader2,
          },

          {
            title: "Andrew Watts",
            titledesc: "CFO",
            desc1:
              "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived.",
            desc2:
              "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using‘Content here, content here’, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for ‘lorem ipsum’ will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).",
            img: leader3,
          },
      ];
  return (
    <div className='carousalContainer'>
        {/* <div className="selectedItem">

        </div> */}
        <div className="carousal">
            <div className="carousal__images">
                {leadershipArray.map(item=>{
                    return (
                        <>
                            <img className='carousal__image' src={item.img}/>
                        </>
                    )
                })}
            </div>
        </div>
    </div>
  )
}

export default LeadershipCarousal