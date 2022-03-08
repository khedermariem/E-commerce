/* eslint-disable jsx-a11y/alt-text */
import React from 'react'


const CategoryItems = ({item}) => {
  return (
    <div className='flex-1 mt-1  h-4/6 relative'>
     
         <img className='w-full h-full object-cover'  src={item.img} />
         <div className=' flex flex-col items-center justify-center mt-80 ml-20 absolute top-0 left-0 w-full h-full ' > 
           <div className='  text-white font-medium '>
               {item.title}
               </div> 
               <div className='border-none pt-2.5 bg-white cursor-pointer font-bold '>
                        SHOW NOW
               </div>

         </div>

       
        </div>
       
  )
}
export default CategoryItems;