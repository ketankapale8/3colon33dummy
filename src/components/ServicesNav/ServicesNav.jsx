import React , {useState , useRef, useEffect} from 'react'
import './servicesnav.scss';
import { Link } from 'react-router-dom';
import DropdownServices from '../common/DropdownMenu/DropdownServices';
import DropdownServices1 from '../common/DropdownMenu/DropdownServices1';


const ServicesDropdown = () => {
  const [dropdown, setDropdown] = useState(true);
  const [click, setClick] = useState(false);
  const [reference , setReference] = useState(false)
  // console.log(reference)
  const [defaultOption , setDefaultOption] = useState([]);

  useEffect(()=>{
    onMouseEnter();
    onMouseLeave();

    // return () =>{
    //   onMouseEnter();
    //   onMouseLeave()
    // }
  },[])

  const onMouseEnter = (ref) => {
    if (window.innerWidth > 960) {
      console.log(ref)
      setDefaultOption(DropdownServices1?.filter(item=>item.ref == ref))
      setDropdown(true);
      setClick(true)
    } else {
      setDropdown(true);
    }
  };

  const onMouseLeave = () => {
    if (window.innerWidth < 960) {
      setDefaultOption(null)
      setDropdown(false);
      setClick(!click)
    } else {
      setDropdown(false);
    }
  };

  // const ref = useRef();
  // console.log(ref)




  const handleClick = () => setClick(!click);

  // console.log(defaultOption)
  return (
    <div >
      <ul 
      onClick={handleClick}
      className={click ? 'dropdown-menu' : 'dropdown-menu'}>
        <div style={{display:'flex', flexDirection:'row',flex:1}}>
          <div style={{display:'flex', flex:0.5 , flexDirection:'column', lineHeight:'3.7px'}}>
            {DropdownServices.map((item, index) => {
              return (
                <li key={index} 
                onMouseEnter={()=>onMouseEnter(item.ref)}
                onMouseLeave={onMouseLeave}
                >
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

          <div style={{display:'flex', flex:0.5 , flexDirection:'column' , lineHeight:'3.7px' , paddingRight:'10px'}}>

            { click && defaultOption?.map((item, index) => {
              return (
                <li key={index}>
                  <Link
                    className={item?.cName}
                    to={item?.path}
                    onClick={() => setClick(false)}

                  >
                    {item?.title}
                  </Link>
                </li>
              );
            })}

          </div>

        </div>

      </ul>


    </div>
  )
}

export default ServicesDropdown