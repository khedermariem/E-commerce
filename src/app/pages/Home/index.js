import React from "react";
import Header from "./../../shared/Header/index";
import Slider from "./../../shared/Slider/slider.js";
import Categories from "../../shared/categories";
import Product from "../../shared/products/index";
import NewSeletter from "../../shared/NewSeletter/index";
import Footer from './../../shared/footer/index';
const Home = () => {
  return (
    <div>
      <div className=" max-h-8  text-center text-white bg-secondaire font-display	">
        Super Deal Free Shipping On Orders Over $50
      </div>
      <div className="px-8 mt-4">
        <Header />
      </div>
      <div>
        <Slider />
      </div>
      <div>
        <Categories />
      </div>
      <div>
        <Product />
      </div>
      <div>
        <NewSeletter />
      </div>
      <div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
