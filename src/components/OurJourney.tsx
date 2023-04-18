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
            <strong>2008</strong>
            <br />
            PRAYAAS was founded in 2008 by a group of NITJ students led by Chemistry Professor Dr. Balbir Singh Kaith with the goal of improving the lives of deprived children in the community.
        </div>
        <div className={mobileView?' journey-mobileview':"s journey"}>
            <strong>2014</strong>
            <br />
            Maqsudan - Arya Samaj Mandir centre was opened in 2014 after a survey in the nearby Village named Maqsudan.
        </div>
        <div className={mobileView?' journey-mobileview':"t journey"}>
            <strong>2019</strong>
            <br />
            Amanatpur centre was opened in the year 2019. This was opened as a result of a survey conducted in villages nearby.
        </div>
        <div className={mobileView?' journey-mobileview':"p journey"}>
            <strong>Present</strong>
            <br/>
            Presently we teach around 120 kids inside the campus at the newly constructed Science Block and around 180 kids at Maqsudan Centre and around 60 kids at Amanatpur Centre.
        </div>
      </div>
    </div>
  )
}

export default OurJourney
