import React from 'react'

interface style{
  heights:String
}
const Loader:React.FC<style> = ({heights}) => {
  return (
    <div className='loader-wrapper' style={{height:`${heights}`}}>
      <div className="loader">

      </div>
    </div>
  )
}

export default Loader