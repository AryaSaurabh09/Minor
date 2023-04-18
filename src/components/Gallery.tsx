import React from 'react'
import GallerySlider from './GallerySlider'
import Heading from './Heading'
import './home.css'

interface images {
  galleryImages:string[]
}
const Gallery:React.FC<images> = ({galleryImages}) => {

  return (
    <div className='gallery'>
      <Heading title='Gallery' subTitle='SHOWCASING SUCCESS'/>
      <GallerySlider galleryImages={galleryImages}/>
    </div>
  )
}

export default Gallery
