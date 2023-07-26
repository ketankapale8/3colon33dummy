import React from "react";
import "./current.scss";
import Select from "react-select";

const messageOptions = [
  {
    label: "Location",
    value: "Location",
  },

  {
    label: "Open Positions",
    value: "Open Positions",
  },
  {
    label: "Part-time/Contractor",
    value: "Part-time/Contractor",
  },
  {
    label: "Fulltime/Consultant",
    value: "Fulltime/Consultant",
  },
];

const openings = [
    {
        title : "ERP Consultant (Implementation)",
        experience : "Experience : 1-2 years",
        location : " Location - Noida",
        position : "Full Time"

    },
    {
        title : "Presales – AWS/Azure",
        experience : "Experience : 5-6 years",
        location : " Location - Kolkata",
        position : "Full Time"

    },
    {
        title : "FullStack Developer",
        experience : "Experience : 5-6 years",
        location : " Location - Kolkata",
        position : "Full Time"

    },
    {
        title : "DevOps Engineer",
        experience : "Experience : 3-5 years",
        location : " Location - Bangalore",
        position : "Full Time"

    },
    {
        title : "Sales - Next Gen",
        experience : "Experience : 8-10 years",
        location : " Location - Kolkata",
        position : "Full Time"

    },
    {
        title : "HTML Developer/Designer – Ionic + Angular",
        experience : "Experience : 2-3 years",
        location : " Location - Noida",
        position : "Part-time"

    },
    {
        title : "ERP Engineer",
        experience : "Experience : 2-3 years",
        location : " Location - Noida",
        position : "Full Time"

    }
]

const CurrentOpenings = () => {
  return (
    <div className="currentOpenings">
      <div className="currentOpeningsContainer">
        <div className="top">
          <div className="subtitle">Job Openings</div>
          <div className="divBelowsubtitle"></div>
          <div className="searchComp">
            <div className="formItems">
              <input
                className="inputFields"
                placeholder="Search by Role or Domain"
              />
              <Select className="helpSelect" options={messageOptions} />
              <button className="roleBtn">Find Job</button>
            </div>
          </div>
        </div>
        <div className="bottom">
        <div className="subtitle">{openings.length} jobs found</div>

        {openings.map(item=>{
            return(
                <>
            <div className="boxComp">
                <div className="left">
                    <div className="title">{item.title}</div>
                    <div className="desc">
                        <div className="items">{item.experience}</div>
                        <div  className="items">{item.location}</div>
                        <div  className="items" style={{color: '#317FFF'}}>{item.position}</div>

                    </div>

                </div>
                    

                <div className="right">
                <button className="applyBtn">APPLY NOW</button>
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

export default CurrentOpenings;
