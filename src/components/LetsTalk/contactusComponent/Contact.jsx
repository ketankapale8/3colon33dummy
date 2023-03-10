import React, { useEffect , useState , useMemo} from 'react';
import axios from 'axios';
import Select from 'react-select'
import countryList from 'react-select-country-list'
import './contact.scss';
import a from '../../../assets/letstalk/a.png'
import b from '../../../assets/letstalk/b.png'
import c from '../../../assets/letstalk/c.png'
import line from '../../../assets/letstalk/line.png';
import social1 from '../../../assets/letstalk/social/a.png'
import social2 from '../../../assets/letstalk/social/b.png'
import social3 from '../../../assets/letstalk/social/c.png'
import social4 from '../../../assets/letstalk/social/d.png'


const social = [
  {
    img : social1
  },
  {
    img : social2
  },
  {
    img : social3
  },
  {
    img : social4
  }
]



const contactDetailsArray = [
  {
    title : "+41 799 469 747",
    img: a
  },
  {
    title : "info@3colon33.com",
    img: b
  },
  {
    title : "Erlenmattstrasse 18, 4058 Basel,Switzerland",
    img: c
  }
]

const Contact = () => {
  const [value, setValue] = useState('');
  const [msgValue, setmsgValue] = useState('');
  
  
  const options = useMemo(() => countryList().getData(), [])

  const messageOptions = [
   
    {
      label: "Enquiry",
      value: "Enquiry"
    },
   
    {
      label : "Job Opportunity",
      value: "Job Opportunity"
    },
    {
      label : "Consulting",
      value: "Consulting"
    },
    {
      label : "Others",
      value: "Others"
    },
  ]

 
  const changeHandler = value => {
    setValue(value)
  }

  const selectMsgOption = (e) => {
    setmsgValue(e.target.value)

  }

  console.log(msgValue)

  

  return (
    <div className='contactusContainer'>
      <div className="contactusLeft">
      <div className="subtitle">Let's talk about</div>
      <div className="subtitle">your needs</div>
      <div className="divBelowsubtitle"></div>
      <div className='contactusDetails'>
        {contactDetailsArray.map(item=>{
          return (
            <div style={{display:'flex', flexDirection: 'row', paddingTop: '30px' , }}>
            <div className="imgs">
              <img src={item.img}/>
            </div>
            <div className="details">
                <div>{item.title}</div>
            </div>
            
            </div>
          )
        })}
        
      </div>
      <div className='breaker'>
        <img src={line} alt="line"/>
      </div>
      <div className="subtitle" style={{fontSize:'1.5rem' , paddingTop:'20px'}}>Social Media</div>
      <div className="social">
        {social.map(item=>{
          return (
            <>
              <img alt="socialM" src={item.img} style={{padding:'15px'}}/>
            </>
          )
        })}
      </div>
      <div className='breaker'>
        <img src={line} alt="line"/>
      </div>

      

      </div>
      <div className="contactusRight">
        <div className="rightContainer">
          <div className="formItems">
            <input className='inputFields' placeholder='First Name' />
            <input className='inputFields' placeholder='Last Name' />
          </div>
          <div className="formItems">
            <input className='inputFields' placeholder='Email Address' />
            <input className='inputFields' placeholder='Job Title' />
          </div>
          <div className="formItems">
            <input className='inputFields' placeholder='Company' />
            <Select className='select'  options={options} value={value} onChange={changeHandler} placeholder="Country" />
          </div>

          <div className="helpComp">
            <div>How we can help you?</div>
            <div>
              <Select className='helpSelect' options={messageOptions}/>
            </div>
        
          </div>

          <div className="checkboxComp">
              <div className="terms">
                <input type="checkbox"/>
                <div>Sign Up To Receive The Latest Information</div>
              </div>
              <div className="terms">
                <input type="checkbox"/>
                <div>I Have Read And Agree With <span style={{color:'#0076FF'}}>Privacy Policy </span>(Required)</div>
              </div>
          </div>

          

          
        </div>

      </div>

        
    </div>
  )



}

export default Contact