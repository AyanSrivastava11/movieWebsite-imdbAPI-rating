import React from 'react'

function Pagination({handleNext, handlePrev, pageNo}) {
    return (
        <div className='bg-gray-600 p-4 mt-8 flex   justify-center'>
            <div onClick={handlePrev} className='px-8 hover:cursor-pointer text-white'><i class="fa-solid fa-arrow-left"></i></div>
            <div className='font-bold text-white'>{pageNo}</div>
            <div onClick={handleNext} className='px-8 hover:cursor-pointer text-white'><i class="fa-solid fa-arrow-right"></i></div>
        </div>
    )
}

export default Pagination