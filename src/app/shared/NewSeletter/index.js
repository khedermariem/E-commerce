import { Send } from '@mui/icons-material';
import React from 'react'

const NewSletter = () => {
  return (
    <div className='flex flex-col justify-center items-center bg-new h-[60vh] w-full max-w-full sm:w-[100%] sm:m-0 sm:p-0  '> 
        <div className='text-6xl mb-5 '>  
        Newsletter
        </div>
        <div className='text-2xl font-light mb-5' >
        Get timely updates from your favorite products.

        </div>
        <div className='w-1/2 h-10 bg-white flex justify-between border-gray-300 border-solid border'>
            <input className='border-none flex pl-5'
                   placeholder='Your email'    />
                   <button className='flex-1 border-none bg-send text-white'>
                       <Send/>

                   </button>

        </div>
        </div>
  )
}

export default NewSletter;