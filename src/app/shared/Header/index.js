import React from 'react'
import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';



 const Header = () => {
  return (
    <div className='flex   flex-col md:flex-row justify-between'>
        <div className=' font-logo  text-3xl  text-cyan-400 font-bold cursor-pointer'>
            MKshop
        </div>
        <div className=" flex flex-row  transition-all duration-200 ease-in-out border-solid border-2 border-zinc-800 w-46 cursor-text">
        <input
						
							
							type="text"
							placeholder="search for something"
						/>
          <div className="pl-0 cursor-pointer bg-cyan-400">
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