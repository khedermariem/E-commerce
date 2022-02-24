import React from 'react'
import { categories } from './../../../data';
import CategoryItems from './categoryItems';

 const Categories = () => {
  return (
    <div className='flex pt-5 justify-between space-x-1'>
        {categories.map((item) => (
            <CategoryItems item={item} key={item.id}/>
        ))}
    
    
        </div>
  );
};
export default Categories;