import React from 'react';
import './leadership.scss';

const LeadershipDetails = () => {

    const leadershipArray = [{
        title : "James Smith",
        desc : ""
    }]
  return (
    <div className='leadershipDetails'>
        <div className="leadershipDetailsContainer">
            <div className="leadershipDetailsTop">
                <div className="headlines"></div>
                <div className="desc">
                    <div className="descList"></div>
                </div>
            </div>
            <div className="leadershipDetailsMiddle">
                <img/>
            </div>
            <div className="leadershipBottom">

            </div>

        </div>
    </div>
  )
}

export default LeadershipDetails