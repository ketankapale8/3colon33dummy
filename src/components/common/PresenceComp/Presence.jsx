import React from 'react';
import './presence.scss';
import img from '../../../assets/presence/bar.png'

const presenseArray = [
    {
        title : "100+",
        desc : "Employees",
        img : img
    },
    {
        title : "09",
        desc : "Cities Served",
        img: img
    },
    {
        title : "05",
        desc : "Countries Served"
    }
]

const Presence = () => {
  return (
    <div className='presence'>
            <div className="presenceContainer">
                {presenseArray.map(item=>{
                    return (
                        <>
                            <div className='list'>
                                <div className='no'>
                                    {item.title}
                                </div>
                                <div className="desc">
                                    {item.desc}
                                </div>
                            </div>
                            <div className="lineContainer">
                                <img src={item?.img}/>
                                
                            </div>
                        
                        </>
                    )
                })}

            </div>

    </div>
  )
}

export default Presence