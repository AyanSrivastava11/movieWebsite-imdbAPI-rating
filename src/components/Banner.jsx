import React from 'react'
import banner_pic from '../banner_pic.jpg'
import banner_pic2 from '../banner_pic2.jpg'
import banner_pic3 from '../banner_pic3.jpg'


function Banner() {
  return (
    <div className='h-[20vh] md:h-[90vh] bg-cover bg-center flex items-end' style={{backgroundImage: `url(${banner_pic3})`}}>

        <div className='text-white text-3xl text-center w-full bg-gray-900/60 p-4 '>Starlight Studios.</div>

    </div>
  )
}

export default Banner