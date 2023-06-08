import React from 'react';
import './network.scss';
import PresenceComp from '../../common/PresenceComp/Presence'

const Network = () => {
  return (
    <div className='network'>
        <div className="networkContainer">
        <div className="networkTop">
                {/* <h4 className='title'>TITLE</h4> */}
                    <div className="subtitle">Global Network</div>
                        <div className='divBelowsubtitle'/>
                        <div className="descriptionDiv">
                            <p className='desc'>
                            Harness the collective strength of a talented and energetic global community of professionals – join us.
                            </p>
                        </div>

            </div>
            <div className="networkBottom">
                <PresenceComp/>

            </div>

        </div>
    </div>
  )
}

export default Network