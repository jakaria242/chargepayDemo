import React from 'react'
import bannerSvg from '../../../assets/homeBanner.svg'

const Banner = () => {
  return (
    <div className="w-full h-[1000px] bg-black bg-cover bg-center bg-no-repeat"
    style={{ backgroundImage: `url(${bannerSvg})` }}>

    </div>
  )
}

export default Banner