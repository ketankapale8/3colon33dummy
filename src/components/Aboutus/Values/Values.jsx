import React from "react";
import "./values.scss";
import values from "../../../assets/values/values.png";
import arrow from "../../../assets/values/arrow.png";
import line from "../../../assets/values/line.png"

const valuesArray = [
  {
    id : 1,
    identity : '01',
    title : "Commit to Excellence",
    img : line,
    color : '#00FFB2'
  },
  {
    id : 2,
    identity : '02',
    title : "Serve with Humanity and Compassion",
    img : line,
    color : '#FFFF'
  },
  {
    id : 3,
    identity : '03',
    title : "Learn & Grow Everyday",
    img : line,
    color : '#FFFF'
  },
  {
    id : 4,
    identity : '04',
    title : "Creatively Solve Problems",
    img : line,
    color : '#FFFF'
  },
  {
    id : 5,
    identity : '05',
    title : "Lead Courageously ",
    color : '#FFFF'
  }
]

const Values = () => {


  return (
    <div className="values">
      <img className="backgroundImg" src={values}/>

      <div className="servicesTop">
        <div className="valuesDesc">
          <div className="title">CORE VALUES</div>
          <div className="subtitle">Our promise is a commitment to excellence</div>
          <div className="divBelowsubtitle" />
          <div className="descriptionDiv">
            <p>
            We are committed to delivering excellence at every customer touchpoint, and always focused on enhancing business value for them. Along with service delivery, we enable culture change for them, enabling them to internalize their transformation, and reap long-term benefits.
            </p>
          </div>
        <img className="arrows" src={arrow} alt="navigator"/>
        </div>
      </div>
      <div className="servicesBottom">
        {valuesArray.map(item=>{
          return (
            <>
              <div className="valuesContainer">
                <div style={{color: item.color}} className='no'>
                  {item.identity}</div>
                <div style={{color: item.color}} className="desc">{item.title}</div>
              </div>
              <div className="lineContainer">
                  <img src={item?.img} />
              </div>
            
            </>
          )
        })}

      </div>
    </div>
  );
};

export default Values;
