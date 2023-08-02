import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBarsStaggered } from '@fortawesome/free-solid-svg-icons';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import './sidemenu.scss'


const SideMenuComp = () => {
  const [showbar , setShowbar] = React.useState(false)

  const Toggle = () =>{
    if (showbar == true){
      setShowbar(false)
    }else{
      setShowbar(true)
    }
  }
  return (
    <>
    
    <div style={{position: 'absolute' , top: '20px' , left: '95%'}} >
      <FontAwesomeIcon icon={faBars} onClick={()=> Toggle() }/>
   
    </div>
      {showbar && (
      <div className="blurBg">
        <h4>Sidenav Menu Options....</h4>
        <FontAwesomeIcon icon={faClose} onClick={()=> Toggle()}/>


      </div>
      )}

    </>

  )
}

export default SideMenuComp