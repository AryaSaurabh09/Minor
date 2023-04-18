import React,{useEffect, useState, useRef} from 'react'
import Carousel from 'react-simply-carousel';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import './home.css'

interface images {
    galleryImages:string[]
  }
const GSlider:React.FC<images> = ({galleryImages}) => {
    const [loading,setLoading] = useState(true);
    const [height,setHeight] = useState('40vh')
    const [prevSlide, setPrevSlide] = useState(0);
    const [activeSlide, setActiveSlide] = useState(1);
    const [nextSlide, setNextSlide] = useState(2);
    const [prevOpacity, setPrevOpacity] = useState(0.6);
    const [prevArrowOpacity, setPrevArrowOpacity] = useState(1);
    const [nextArrowOpacity, setnextArrowOpacity] = useState(1);
    const [nextOpacity, setNextOpacity] = useState(0.6);
    const length = galleryImages.length;

    useEffect(()=>{

        if(activeSlide===0)
            setPrevArrowOpacity(0.6)
        else
            setPrevArrowOpacity(1)
        if(activeSlide===length-1)
            setnextArrowOpacity(0.6)
        else
            setnextArrowOpacity(1)


    })

    useEffect(()=>{
        activeSlide===0?setPrevOpacity(0):setPrevOpacity(0.6)
        activeSlide===length-1?setNextOpacity(0):setNextOpacity(0.6)
        setNextSlide(activeSlide===length-1?activeSlide:activeSlide+1)
        setPrevSlide(activeSlide===0?activeSlide:activeSlide-1)
    },[activeSlide])

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
      if(windowSize<750){
        setHeight('40vh')
      }
      else{
        setHeight('100vh')
      }
    })


    
  return (
    <>
    {loading && (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={height}>
      <CircularProgress color="secondary" size={50} />
      </Box>
    )}
    <div className='gallery-slider'>
      <Carousel
        containerProps={{
            className:'slider-image prev',
            style: {
            flexWrap:'nowrap',
            justifyContent:'center',
            alignItems:'center',
            position:'relative'
            }
          }}
          activeSlideIndex={prevSlide}
          activeSlideProps={{
            style: {
              opacity:`${prevOpacity}`,
            }
          }}
          onRequestChange={setPrevSlide}
          itemsToShow={1}
          itemsToScroll={1}
          speed={400}
          infinite={true}
      >
        {galleryImages.map((image,index)=>(
            <img
            style={{
              maxWidth: '35vw',
              }}
            key={index}
            src={image}
            alt=''
          />
        ))}
      </Carousel>
      <Carousel
        
        containerProps={{
            style: {
            maxWidth:'70vw',
            maxHeight:'60vh',
            flexWrap:'nowrap',
            justifyContent:'center',
            alignItems:'center',
            position:'relative'
            }
          }}
          activeSlideIndex={activeSlide}
          activeSlideProps={{
            style: {
              opacity:1,
            }
          }}
          onRequestChange={setActiveSlide}
          forwardBtnProps={{
            style:{
                height:'100%',
                opacity:nextArrowOpacity
            },
            children: <img className="right-arrow" src='/imageData/leftArrow.png' alt=''/>
          }}
          backwardBtnProps={{
            style:{
                height:'100%',
                opacity:prevArrowOpacity
            },
            children:<img className="left-arrow" src='/imageData/leftArrow.png' alt=''/>
          }}
          itemsToShow={1}
          itemsToScroll={1}
          speed={400}
          infinite={false}
      >
        {galleryImages.map((image,index)=>(
            <img
            style={{
              maxWidth: '55vw',
              }}
            key={index}
            src={image}
            alt=''
            onLoad={() => {
              setLoading(false)}}
          />
        ))}
      </Carousel>
      <Carousel
        containerProps={{
            className:'slider-image next',
            style: {
            maxHeight:'60vh',
            flexWrap:'nowrap',
            justifyContent:'center',
            alignItems:'center',
            position:'relative'
            }
          }}
          activeSlideIndex={nextSlide}
          activeSlideProps={{
            style: {
              opacity:`${nextOpacity}`
            }
          }}
          onRequestChange={setNextSlide}
          itemsToShow={1}
          itemsToScroll={1}
          speed={400}
          infinite={true}
      >
        {galleryImages.map((image,index)=>(
            <img
            style={{
              maxWidth: '35vw',
              }}
            key={index}
            src={image}
            alt=''
          />
        ))}
      </Carousel>
    </div>
    </>
  )
}

export default GSlider