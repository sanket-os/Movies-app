import React from 'react'

function Pagination({ pageNumber, nextFn, previousFn }) {
    return (
        <div className='bg-gray-400 h-[50px] w-full mt-8 flex justify-center gap-2'>

            <div className='px-8'>
                <button onClick={previousFn}>

                    <i class="fa-solid fa-arrow-left"></i>

                </button>
            </div>
            
            <div>{pageNumber}</div>

            <div className='px-8'>
                <button onClick={nextFn}>

                    <i class="fa-solid fa-arrow-right"></i>
                </button>

            </div>


        </div>
    )
}

export default Pagination;