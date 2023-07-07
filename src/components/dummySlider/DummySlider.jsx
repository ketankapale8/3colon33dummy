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
import styles from './dummys.scss'

// const AutoplaySlider = withCaption(AwesomeSlider);
const DummySlider = () => {
    const AutoplaySlider = withAutoplay(AwesomeSlider);
    const Comp = () =>{
        return (
        <AutoplaySlider cssModule={styles}
        organicArrows={true}
        bullets={false}
        play={false}
        cancelOnInteraction={false}
        interval={1000}
        >
    <div data-src={one} style={{position:"absolute" , height: '962px'}}>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'110px' , paddingLeft:'75px', lineHeight: '105px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}}> 
        Harnessing insights
                      </div>
                      <div className='title'style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}} >
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
    <div data-src={two} style={{position:"absolute" , height: '962px'}}>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'120px' , paddingLeft:'75px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'925px'}}> 
                      Digital Quality
                      </div>
                      <div className='title'style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'925px'}} >
                      Assurance
                      </div>
                      {/* < div className='title' style={{fontWeight:'bold', fontSize:'65px', color:"#FFFF" , paddingRight:'835px'}}>
                      world
                      </div> */}
        <div>
        <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  Lorem Ipsum is simply dummy text of the printing and 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  typesetting industry. Lorem Ipsum has been the industry’s 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  standard dummy text ever since the 1500s.
                  </p>
        </div>
        </div>
      {/* <p style={{color:'red' , paddingTop:'150px' , position:"relative"}}>I want to see what you got.</p> */}
    </div>
    <div data-src={three} style={{position:"absolute" , height: '962px'}}>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'120px' , paddingLeft:'75px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'895px'}}> 
                      A Brigde to a
                      </div>
                      <div className='title'style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'895px'}} >
                      Brighter future.
                      </div>
                      {/* < div className='title' style={{fontWeight:'bold', fontSize:'65px', color:"#FFFF" , paddingRight:'835px'}}>
                      world
                      </div> */}
        <div>
        <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  Lorem Ipsum is simply dummy text of the printing and 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  typesetting industry. Lorem Ipsum has been the industry’s 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  standard dummy text ever since the 1500s.
                  </p>
        </div>
        </div>
      {/* <p style={{color:'red' , paddingTop:'150px' , position:"relative"}}>I want to see what you got.</p> */}
    </div>
    <div data-src={four} style={{position:"absolute" ,  height: '962px'}}>
        <div style={{display: 'flex', flexDirection:'column', alignItems:'flex-start' , position:'relative', paddingTop:'120px' , paddingLeft:'75px'}}>
        
        <div className='title' style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}}> 
                      A key towards
                      </div>
                      <div className='title'style={{fontWeight:'bold', fontSize:'80px', color:"#FFFF" , paddingRight:'835px'}} >
                      a better tomorrow.
                      </div>
                      {/* < div className='title' style={{fontWeight:'bold', fontSize:'65px', color:"#FFFF" , paddingRight:'835px'}}>
                      world
                      </div> */}
        <div>
        <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  Lorem Ipsum is simply dummy text of the printing and 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  typesetting industry. Lorem Ipsum has been the industry’s 
                  </p>
                  <p style={{fontSize:'1.5rem', color:"#FFFF"}}>
                  standard dummy text ever since the 1500s.
                  </p>
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