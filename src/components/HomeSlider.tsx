import React,{useState,useEffect,useRef} from 'react';
import './home.css'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';


interface images {
  homeImages:string[]
}
const HomeSlider :React.FC<images> = ({homeImages}) => {
  const [index, setIndex] = useState(0);
  const[posReturn,setPosReturn]=useState(1);
  const [textAnimate,setTextAnimate]=useState<Boolean>(false);
  const [loading,setLoading] = useState(true);
  const [height,setHeight] = useState('40vh')
  const delay = 3000;
  let timeoutRef = useRef<number>();

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

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

  useEffect(() => {
    resetTimeout();
    if(index===1)
      setTextAnimate(true);
    else
      setTextAnimate(false)

    if(posReturn===0){
      if(index===1)
        setPosReturn(1);
      timeoutRef.current= window.setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === 0 ?  homeImages.length-1: prevIndex - 1
          ),
        delay
      );
    }
    else{
      if(index===homeImages.length-2)
        setPosReturn(0)
      timeoutRef.current= window.setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === homeImages.length - 1 ?  0: prevIndex + 1
          ),
        delay
      );
    }

    return () => {
      resetTimeout();
    };
  }, [index]);
  return (
    <>
    {loading && (
      <Box display={"flex"} justifyContent={"center"} alignItems={"center"} height={height}>
      <CircularProgress color="secondary" size={50} />
      </Box>
    )}
    <div>
    <div className="homeslider">
      <div className='slideShow'>
        <div className="slideShowSlider" style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}>
          {homeImages.map((image,index)=>{
            return(
              <span key={index}>
              <img className='slide' src={image} alt="" onLoad={() => {
                setLoading(false)
                }} />
              </span>
            )
          })}
        </div>
        <div className={textAnimate?"img_caption animate":"img_caption"}>
          <div className='heading'>
            <div className="highlited">Prof</div>
            <div className="heading2">NITT</div>
          </div>
            <div className={textAnimate?'heading-caption caption-animate':'heading-caption'}>The Finance and Investment club <span>of NIT Trichy</span></div>
        </div>
      </div>
    </div>
    <div className="slideshowDots">
        {homeImages.map((_,idx)=>{
          return(
            <div key={idx} className={`slideshowDot${index === idx ? " active" : ""}`} onClick={() => {
              setIndex(idx);
            }}></div>
          )
        })}
    </div>
    </div>
    </>
  )
}

export default HomeSlider
