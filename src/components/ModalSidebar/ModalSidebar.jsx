import React, { useState } from 'react';
import { FaBars, FaHome, FaLock, FaMoneyBill, FaUser } from "react-icons/fa";
import './modalsidebar.scss'


const ModalSidebar = () => {
    const [showSidebar , setShowSidebar] = useState(false)
    console.log('[aljdlajdajdajlda')
  return (
    <>
        <div className="modalsidebarContainer">
         <button className='modalsidebar' onClick={()=>setShowSidebar(true)}>Click Me</button>
         {showSidebar && (
            <h4 style={{color:"black" , fontSize: '100px'}}>Sidebar</h4>
         )}
            </div>
    
    </>
  )
}

export default ModalSidebar