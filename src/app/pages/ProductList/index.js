import React from "react";
import Footer from "../../shared/footer";
import Header from "../../shared/Header";
import NewSletter from "../../shared/NewSeletter";
import Products from "../../shared/products/index";
const ProductList = () => {
  return (
    <div>
      <div className="mb-2 ml-2 mr-2 mt-2 ">
        <Header />
      </div>
      <div className=" max-h-8 text-center text-white bg-secondaire font-display	">
        Super Deal Free Shipping On Orders Over $50
      </div>
      <div className="text-lg font-bold  mt-5 ml-5">Dress</div>
      <div className="flex  justify-between ">
        <div className=" ml-7">
          <div className="text-xl font-semibold mr-5 md:mr-0 ">
            Filter Products:
          </div>
          <select className="p-2   mr-5 md:mt-2 md:mr-8 md:mb-0 md:ml-0">
            <option disabled selected>
              Color
            </option>
            <option>White</option>
            <option>Black</option>
            <option>Red</option>
            <option>Blue</option>
            <option>Yellow</option>
            <option>Green</option>
          </select>
          <select className="p-2   mr-5 md:mt-2 md:mr-8 md:mb-0 md:ml-0">
            <option disabled selected></option>
            <option disabled selected>
              Size
            </option>
            <option>XS</option>
            <option>S</option>
            <option>M</option>
            <option>L</option>
            <option>XL</option>
          </select>
        </div>

        <div className=" mr-7">
          <div className="text-xl font-semibold mr-5 md:mr-0  ">
            Sort Products:
          </div>
          <select className="p-2   mr-5 md:mt-2 md:mr-8 md:mb-0 md:ml-0">
            <option selected>Newest</option>
            <option>Price (asc)</option>
            <option>Price (desc)</option>
          </select>
        </div>
      </div>
     
     
          <Products />
          <NewSletter/>
          <Footer/>
        
    </div>
  );
};

export default ProductList;
