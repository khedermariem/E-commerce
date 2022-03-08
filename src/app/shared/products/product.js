/* eslint-disable jsx-a11y/alt-text */
import {
  FavoriteBorderOutlined,
  SearchOutlined,
  ShoppingCartOutlined,
} from "@mui/icons-material";
import React from "react";

const Product = ({ item }) => {
  return (
    <div className=" flex  flex-1 justify-items-center justify-center mt-1.5 h-[350px]  min-w-[280px] hover:opacity-100  relative ">
      <div className=" w-[200px] h-[200px] rounded-3xl bg-white absolute mt-16">
      <img src={item.img} className=" h-3/4 z-[2]  " />

      </div>
        <div className="flex items-center justify-center opacity-0 hover:opacity-75 h-[350px]  min-w-[280px] absolute  bg-[#e2e2e2]  transition-all ease-out duration-500 cursor-pointer z-[3]  ">
          <div className=" flex items-center justify-between w-20 h-20 rounded-3xl bg-white hover:bg-bleu   mt-2.5 bg-bleu  ease-out duration-500 hover:scale-125 mr-12">
            <ShoppingCartOutlined />
            </div>
            <div className=" flex items-center justify-between w-20 h-20 rounded-3xl bg-white hover:bg-bleu  mt-2.5  bg-bleu ease-out duration-500 hover:scale-125 mr-10 ">

            <SearchOutlined />
            </div>
            <div className=" flex items-center justify-between  w-20 h-20 rounded-3xl bg-white hover:bg-bleu   mt-2.5 bg-bleu ease-out duration-500 hover:scale-125  mr-8">

            <FavoriteBorderOutlined />
          </div>
        </div>
    </div>
   
  );
};

export default Product;
