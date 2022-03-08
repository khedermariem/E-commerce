/* eslint-disable jsx-a11y/alt-text */
import { Add, Remove } from "@mui/icons-material";
import React from "react";
import Footer from "../../shared/footer";
import Header from "../../shared/Header";
import NewSletter from "./../../shared/NewSeletter/index";

const Product = () => {
  return (
    <div>
      <div className="mb-2 ml-2 mr-2 mt-2 ">
        <Header />
      </div>
      <div className=" max-h-8  text-center text-white bg-secondaire font-display	">
        Super Deal Free Shipping On Orders Over $50
      </div>
      <div className="flex  p-12 sm:p-2 flex-col mt-20 sm:flex-row">
        <div className="flex-1">
          <img
            className="w-[100%] h-[90vh]   object-cover sm:h-[40vh] "
            src="https://i.ibb.co/S6qMxwr/jean.jpg"
          />
        </div>
        <div
          className="flex-1 pt-0 pl-0
          pb-12 pr-12 sm:p-2 "
        >
          <div className="  font-extralight  ">Denim Jumpsuit</div>
          <div className="mt-5 ml-5 mb-5 mr-5 ">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            venenatis, dolor in finibus malesuada, lectus ipsum porta nunc, at
            iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget
            tristique tortor pretium ut. Curabitur elit justo, consequat id
            condimentum ac, volutpat ornare.
          </div>
          <div className="  font-thin text-4xl     ">$ 20</div>
          <div className="w-[50%] mt-7 ml-7 mb-0 mr-0 flex justify-between sm:w-[100%] ">
            <div className="flex items-center">
              <div className="text-xl font-extralight mr-2">Color</div>
              <div className="w-[20px] h-[20px]  rounded-full mt-0 ml-0 mb-1 mr-1 cursor-pointer bg-[#000000] "></div>
              <div className="w-[20px] h-[20px]  rounded-full mt-0 ml-0 mb-1 mr-1 cursor-pointer bg-[#00008B] "></div>
              <div className="w-[20px] h-[20px]  rounded-full mt-0 ml-0 mb-1 mr-1 cursor-pointer bg-[#808080] "></div>
            </div>
            <div className="flex items-center mr-8">
              <div className="text-xl font-extralight">Size</div>
              <select className="ml-[10px]  p-1">
                <option>XS</option>
                <option>S</option>
                <option>M</option>
                <option>L</option>
                <option>XL</option>
              </select>
            </div>
          </div>
          <div className="w-[50%] flex items-center justify-between sm:w-[100%]">
            <div className="flex items-center font-bold">
              <Remove />
              <div className="w-[30px] h-[30px] rounded-lg border-[1px]  border-solid">
                1
              </div>
              <Add />
              <div className="p-4 border-[2px] border-solid bg-[#ffff] cursor-pointer font-medium hover:bg-[#f8f4f4] ">
                Add To Cart
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" mt-56 ">
        <NewSletter />
        <Footer />
      </div>
    </div>
  );
};

export default Product;
