import React from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoplay from 'react-awesome-slider/dist/autoplay';
import AwsSliderStyles from 'react-awesome-slider/src/components/react-awesome-frame/styles.scss'
import 'react-awesome-slider/dist/styles.css';
import 'react-awesome-slider/dist/captioned.css';
import one from '../../assets/sliderbanner/1.png'
import two from '../../assets/sliderbanner/2.png'
import three from '../../assets/sliderbanner/3.png'
import four from '../../assets/sliderbanner/4.png';
import './dummys.scss'

// const AutoplaySlider = withCaption(AwesomeSlider);
const DummySlider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const Comp = () =>{
        return (
        <AutoplaySlider 
        organicArrows={true}
        bullets={false}
        play={false}
        cancelOnInteraction={false}
        interval={1000}
        >
    <div data-src={one} style={{position:"absolute" , }} className='bannerImgs'>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'110px' , paddingLeft:'75px', lineHeight: '105px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}}> 
        Harnessing insights
                      </div>
                      <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}} >
                       Catalyzing change
                      </div>
                 
        <div>
          <div style={{lineHeight: '20px', paddingTop: '5px'}}>
            <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
            Accelerating business growth through digital transformation, 
                      </p>
                      <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                      optimizing operations and unlocking innovation. 
                      </p>

          </div>
                  {/* <p style={{fontSize:'1rem', color:"#FFFF"}}>
                  standard dummy text ever since the 1500s.
                  </p> */}
        </div>
        </div>
      {/* <p style={{color:'red' , paddingTop:'150px' , position:"relative"}}>I want to see what you got.</p> */}
    </div>
    <div data-src={two} style={{position:"absolute" , }} className='bannerImgs'>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'120px' , paddingLeft:'75px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}}> 
                      Digital Quality
                      </div>
                      <div className='title'style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}} >
                      Assurance
                      </div>
                      {/* < div className='title' style={{fontWeight:'bold', fontSize:'65px', color:"#FFFF" , paddingRight:'835px'}}>
                      world
                      </div> */}
        <div>
        <div style={{lineHeight: '20px', paddingTop: '5px'}}>
        <p style={{fontSize:'1.5rem',  color:"#FFFF"}}>
        Unlocking Excellence in the Digital Realm: 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  Elevate Your Quality Assurance!
                  </p>
                  {/* <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  standard dummy text ever since the 1500s.
                  </p> */}

        </div>
        </div>
        </div>
      {/* <p style={{color:'red' , paddingTop:'150px' , position:"relative"}}>I want to see what you got.</p> */}
    </div>
    <div data-src={three} style={{position:"absolute" , }} className='bannerImgs'>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'120px' , paddingLeft:'75px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}}> 
                      A Brigde to a 
                      </div>
                      <div className='title'style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}} >
                      Brighter future.
                      </div>
                      {/* < div className='title' style={{fontWeight:'bold', fontSize:'65px', color:"#FFFF" , paddingRight:'835px'}}>
                      world
                      </div> */}
        <div>
        <div style={{lineHeight: '20px', paddingTop: '5px'}}>
        <p style={{fontSize:'1.5rem',  color:"#FFFF"}}>
        Bridging Dreams, Building Futures
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  Connecting for a Brighter Tomorrow
                  </p>
                  {/* <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  standard dummy text ever since the 1500s.
                  </p> */}

        </div>
        </div>
        </div>
      {/* <p style={{color:'red' , paddingTop:'150px' , position:"relative"}}>I want to see what you got.</p> */}
    </div>
    <div data-src={four} style={{position:"absolute" ,  }} className='bannerImgs'>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'120px' , paddingLeft:'75px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}}> 
        Innovation Unleashed: Transforming  
                      </div>
                      <div className='title'style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}} >
                      Possibilities into Reality!
                      </div>
                      {/* < div className='title' style={{fontWeight:'bold', fontSize:'65px', color:"#FFFF" , paddingRight:'835px'}}>
                      world
                      </div> */}
        <div>
        <div style={{lineHeight: '20px', paddingTop: '5px'}}>
        <p style={{fontSize:'1.5rem',  color:"#FFFF"}}>
        Driving Forward, 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  Embracing Change : Unleashing Continuous Progress!
                  </p>
                  {/* <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  standard dummy text ever since the 1500s.
                  </p> */}

        </div>
        </div>
        </div>
      {/* <p style={{color:'red' , paddingTop:'150px' , position:"relative"}}>I want to see what you got.</p> */}
    </div>
  </AutoplaySlider>

        )

    }
  return (
    <>
        {Comp()}
    </>
  )
}

export default DummySlider