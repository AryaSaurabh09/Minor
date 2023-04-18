import React,{useState,useEffect} from 'react'
import Heading from './Heading';
import './home.css'

const OurJourney:React.FC = () => {
  const [windowSize, setWindowSize] = useState(window.innerWidth);
  const [mobileView,setMobileView] = useState(false)
    useEffect(() => {
      const handleWindowResize = () => {
        setWindowSize(window.innerWidth);
      };
  
      window.addEventListener('resize', handleWindowResize);
  
      return () => {
        window.removeEventListener('resize', handleWindowResize);
      };
    });
    useEffect(()=>{
      if(windowSize<750)
        setMobileView(true);
      else
        setMobileView(false)
    })
  return (
    <div className='our-journey'>
      <div className="dashed-line" ><img src='/imageData/hLine.png' alt='' style={{width:mobileView?'30%':'auto'}}/></div>
      <Heading title='Our Journey' subTitle='A BRIEF REPORT'/>
      <img src='/imageData/risingArrow.png' alt='' className='rising_arrow'/>
      <div className={mobileView?'journeys-mobileview':'journeys'}>
        <div className={mobileView?' journey-mobileview':"f journey"}>
            <strong>2018, July</strong>
            <br />
            First month into college a bunch of first years who wanted to learn about finance through a club, thought of starting one on their own. 
        </div>
        <div className={mobileView?' journey-mobileview':"s journey"}>
            <strong>2018, November</strong>
            <br />
            The Whatsapp series was launched with more than 500 initial joiners and an unprecedented success.
        </div>
        <div className={mobileView?' journey-mobileview':"t journey"}>
            <strong>2019, January</strong>
            <br />
            First inductions were announced.
        </div>
        <div className={mobileView?' journey-mobileview':"p journey"}>
            <strong>Present</strong>
            <br/>
            Now, an official club of NITT with an enthusiastic group of students that actively conduct panel discussions, guest lectures, finance events etc.
        </div>
      </div>
    </div>
  )
}

export default OurJourney
