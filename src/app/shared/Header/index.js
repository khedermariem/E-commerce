import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';



 const Header = () => {
  return (
    <div className='flex   flex-col md:flex-row justify-between h-[60px] sm:h-[50px]'>
        <div className=' font-logo sm:font-medium text-3xl  text-primaire  font-bold cursor-pointer'>
            MKshop
        </div>
        <div className="  flex items-center ml-6 p-1 w-[200px] border-[0.5px] border-solid ">
    <div 	className='border-none  sm:w-[50px] '>
      <input
						
							
            type="text"
            placeholder="search for something"
          />
     </div>
     
       
          <div className="  ml-[108px]   text-base cursor-pointer bg-primaire ">
           <Search/>
           </div>
         </div>
        
        <div  className='flex flex-row  space-x-6 justify-items-center cursor-pointer'>
          <div>
         REGISTER
         </div>
         <div>
          SIGN IN 
          </div>
          <div>
         <Badge badgeContent={4} color="primary">
           <ShoppingCartOutlined/>

         </Badge>
         </div>

        </div>
    </div>
  )
}
export default Header