/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import {
  FacebookOutlined,
  Instagram,
  MailOutline,
  Phone,
  Pinterest,
  Room,
  Twitter,
} from "@mui/icons-material";

const Footer = () => {
  return (
    <div className="flex ">
      <div className=" flex flex-1   flex-col p-5 ">
        <div className="  text-3xl    ">MKshop</div>
        <div className=" mt-5 ml-5 mb-0 mr-0">
          There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.
        </div>
        <div className="flex flex-row">
          <div className="   w-10 h-10  rounded-full flex items-center justify-center mr-5 bg-fb">
            <FacebookOutlined />
          </div>
          <div className=" flex-row w-10 h-10  rounded-full flex items-center justify-center mr-5 bg-insta  ">
            <Instagram />
          </div>
          <div className="w-10 h-10  rounded-full flex items-center justify-center mr-5 bg-tt  ">
            <Twitter />
          </div>
          <div className="w-10 h-10  rounded-full flex items-center justify-center mr-5 bg-pin  ">
            <Pinterest />
          </div>
        </div>
      </div>

    <div className="flex-1 p-5  ">
        <div className="mb-8 text-lg  ">Useful Links</div>
        <div className="  flex flex-wrap   p-0 m-0  ">
          <div className=" mb-3 w-6/12   ">Home</div>
          <div className=" mb-3  w-6/12   ">Cart</div>
          <div className=" mb-3 w-6/12   ">Man Fashion</div>
          <div className=" mb-3 w-6/12   ">Woman Fashion</div>
          <div className=" mb-3 w-6/12   ">Accessories</div>
          <div className=" mb-3 w-6/12   ">My Account</div>
          <div className=" mb-3 w-6/12   ">Order Tracking</div>
          <div className=" mb-3 w-6/12   ">Wishlist</div>
          <div className=" mb-3 w-6/12   ">Terms</div>
        </div>
        
          
   </div>
      <div className="flex-1 p-5 ">
        <div className="mb-8 text-lg ">Contact</div>
        <div className="mb-5 flex items-center mr-3">
          <Room />
          622 Dixie Path , South Tobinchester 98336
        </div>
        <div className="mb-5 flex items-center mr-3">
          <Phone />
          +1 234 56 78
        </div>
        <div className="mb-5 flex items-center mr-3">
          <MailOutline />
          contact@MKshop.com
        </div>
        <img className="w-6/12 " src="https://i.ibb.co/Qfvn4z6/payment.png" />
      </div>
    </div>
  );
};

export default Footer;
