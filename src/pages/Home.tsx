import React, { useEffect, useState } from 'react'
import Gallery from '../components/Gallery'
import HomeSlider from '../components/HomeSlider'
import OurJourney from '../components/OurJourney'
import Loader from '../components/Loader'
import '../../src/components/home.css'

import { getHomeData } from "../api/home";

interface data {
  homeImages: string[];
  galleryImages: string[];
}
const Home:React.FC = () => {
  const [done,setDone]=useState(false);
  const [error,setError]=useState(false)
  const [loading,setLoading]=useState(false)
  const [data,setData]=useState<data[]>([]);
  const homeSliderData:string[] = ['/imageData/slider1.png','/imageData/slider2.png','/imageData/slider3.png','/imageData/slider4.png'];
  const galleryData:string[]=['/imageData/gallery1.png','/imageData/gallery2.png','/imageData/gallery3.png']
  const [height,setHeight] = useState<String>('40vh')
  const [windowSize, setWindowSize] = useState(window.innerWidth);
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
        setHeight('40vh')
      else
        setHeight('100vh')
    })
    
  useEffect(()=>{
    setLoading(true)
    getHomeData()
      .then((res) => {
        if(res[0].homeImages.length < 3 || res[0].galleryImages.length < 3)
          throw Error
        setData(res);
        setDone(true)
        setLoading(false);
      })
      .catch((Error) => {
        setError(true);
        setLoading(false)
        setDone(true)
      });
  },[])


  if(loading){
    return (
      <div style={{backgroundColor:'#F0F2FF', paddingTop:'5vh'}}>
      <Loader heights={height}/>
      <OurJourney/>
      <Loader heights='40vh'/>
      </div>
    );
  }

  if(error){
    return(
      <div style={{backgroundColor:'#F0F2FF', paddingTop:'5vh'}}>
        <HomeSlider homeImages={homeSliderData}/>
        <OurJourney/>
        <Gallery galleryImages={galleryData} />
      </div>
    );
  }

  return (
    <div style={{backgroundColor:'#F0F2FF', paddingTop:'5vh'}}>
      {!done?<Loader heights={height}/>:<HomeSlider homeImages={data[0]?.homeImages}/> }
      <OurJourney/>
      {!done?<Loader heights={'40vh'}/>:<Gallery galleryImages={data[0]?.galleryImages} />}
    </div>
  )
}

export default Home
