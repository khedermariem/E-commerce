import React from 'react';
import {popularProducts} from "../../../data";
import Product from "../products/product"

const Products = () => {
  return (
    <div className='pt-5 flex flex-wrap justify-between space-x-1'>
{popularProducts.map((item) => (
    <Product item={item} key={item.id}/>
))}
    </div>
  )
}

export default Products ;