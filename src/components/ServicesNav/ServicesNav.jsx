import React , {useState} from 'react'
import './servicesnav.scss';
import { Link } from 'react-router-dom';
import DropdownServices from '../common/DropdownMenu/DropdownServices';
import DropdownServices1 from '../common/DropdownMenu/DropdownServices1';


const ServicesDropdown = () => {

  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <ul 
      onClick={handleClick}
      className={click ? 'dropdown-menu-clicked' : 'dropdown-menu'}>
        <div style={{display:'flex', flexDirection:'row',flex:1}}>
          <div style={{display:'flex', flex:0.5 , flexDirection:'column', lineHeight:'3.7px'}}>
            {DropdownServices.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.path}
                    onClick={() => setClick(false)}

                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}
          </div>

          <div style={{display:'flex', flex:0.5 , flexDirection:'column' , lineHeight:'3.7px'}}>
            {DropdownServices1.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item.cName}
                    to={item.path}
                    onClick={() => setClick(false)}

                  >
                    {item.title}
                  </Link>
                </li>
              );
            })}

          </div>

        </div>

      </ul>


    </>
  )
}

export default ServicesDropdown