import React from 'react';
import './culture.scss';
import line from '../../../assets/values/line.png'

const cultureArray = [
    {
      id : 1,
      identity : 'LEARNING',
      title : "Whether it is learning on the job or learning to upskill, you will get the opportunity to gain market-relevant skills you need to solve real-world problems and complex client issue",
      img : line,
      color : '#00FFB2',
    },
    {
      id : 2,
      identity : 'Opportunity',
      title : "You will get countless opportunities to be part of future-ready solutions, to deliver on our mission – to create perceivable value in every client interaction and enable them to embrace change through powerful insights.",
      img : line,
      color : '#FFFF'
    },
    {
      id : 3,
      identity : 'Impact',
      title : "When you join us, you will find your ideas and insights turning into real solutions that make a lasting impact on our clients’ businesses. You will also get to work with many talented people who, like you are continuously innovating to redefine business.",
      color : '#FFFF'
    },
    
  ]

const CultureComp = () => {
  return (
    <div className='culture'>
        <div className="cultureContainer">

            <div className="cultureTop">
                <h4 className='title'>TITLE</h4>
                    <div className="subtitle">Our Culture</div>
                        <div className='divBelowsubtitle'/>
                        <div className="descriptionDiv">
                            <p className='desc'>
                            At 3:33, we have a diverse community of people who believe in the work we do. Our collective aspiration is to offer game-changing digital services and solutions for our clients all over the world. We are continuously focused on making each career here fulfilling and successful, and continuously looking for ways to equip our people with the tools they need today to solve for tomorrow.
                            </p>
                            <p className='desc'>
                            An entrepreneurial environment, immense learning opportunities, and meaningful work that makes a difference – you will get what it takes to build your career and take it to the next frontier
                            </p>
                        </div>

            </div>

            <div className="cultureBottom">
            {cultureArray.map(item=>{
          return (
            <>
              <div className="bottomContainer">
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
    </div>
  )
}

export default CultureComp