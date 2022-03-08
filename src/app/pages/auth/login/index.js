/* eslint-disable jsx-a11y/alt-text */
import React from "react";

const Login = () => {
  return (
    <div>
      <div className="w-[100vw] h-[100vh] bg-cover  flex items-center  justify-center  ">
        <div className="justify-center w-[100vw] h-[100vh] relative  bg-new   opacity-30">
          <img src="https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" />
        </div>
        <div className="w-[25%] p-5  bg-[#ffff] sm:w-[75%] absolute">
          <div className="text-2xl font-light">SIGN IN</div>
          <form>
            <div className="flex flex-wrap ">
             
              
              <input
                className="flex-1 min-w-[40%] mt-5 mr-[10px] pb-0 pl-0 p-[10px] "
                placeholder="username"
              />
            
              <input
                className="flex-1 min-w-[40%] mt-5 mr-[10px] pb-0 pl-0 p-[10px] "
                placeholder="password"
              />
             
             
              <button className="w-[40%] border-none mt-2 pt-[0px] pr-[15px] mb-0 ml-5 bg-send cursor-pointer text-secondaire">
                LOGIN
              </button>
              <div className=" my-3.5 mx-0 text-xs cursor-pointer ">
              DO NOT YOU REMEMBER THE PASSWORD?
              </div>
              <div className=" my-3.5 mx-0 text-xs cursor-pointer ">
              CREATE A NEW ACCOUNT            
                </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
