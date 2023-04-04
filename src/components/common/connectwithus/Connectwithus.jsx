import React from 'react';
import './connectwithus.scss';
import { Link } from 'react-router-dom';

const Connectwithus = () => {
  return (
    <div className='connectwithusBox'>
        <div className="subtitle">Lets connect to start a conversation</div>
                <Link to="/aboutus" style={{textDecoration:'none'}}>
              <button className='roleBtn'>
                Connect with us
              </button>
            </Link>
    </div>
  )
}

export default Connectwithus