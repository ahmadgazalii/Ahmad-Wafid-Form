"use client";
import Image from "next/image";
import React from "react";

const Navbar = () => {
  const phoneNumber = "+9203180414119"; // Apna WhatsApp number yahan daalein
  const message = "Hello, I would like to contact you"; // Default message jo user bhejega

  const handleClick = () => {
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(
      message
    )}`;
    window.open(url, "_blank");
  };
  return (
    <div className="w-full  shadow-sm shadow-black">
      <div className="  items-center flex max-w-[1400px] px-4 md:mx-auto md:px-8 justify-between ">
        <div className="flex items-center ">
          <div className=" w-16 flex items-center sm:w-[130px] sm:h-[90px]">
            <Image
              src={"/wafid-logo.svg"}
              alt="/logo"
              width={150}
              height={150}
            />
          </div>
        </div>

        <button
          onClick={handleClick}
          className=""
        >
          <Image src={"/whatsapp.png"} alt="/logo" width={60} height={60} />{" "}
        </button>
      </div>
    </div>
  );
};

export default Navbar;
