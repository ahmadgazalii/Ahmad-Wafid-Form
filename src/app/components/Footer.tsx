import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full bg-gray-600 ">
      <div className="max-w-[1200px] mx-auto flex flex-col justify-center  items-center py-8 space-y-4 ">
        <div className="flex items-center justify-center">
          <div>
            <Image src={"/wafid2.svg"} alt="/" width={200} height={200} />
          </div>
        </div>

        <div
          className="w-full flex justify-center items-center
           px-2"
        >
          <div className="space-y-2  text-center">
            <p className="text-white text-lg">Contact number</p>
            <p className="text-white text-sm">+92 318 0414119 </p>
            <p className="text-white text-sm">+92 318 0414119 </p>
          </div>
        </div>
      </div>
      <div className="text-center text-xs text-white pb-3">
        <p>@ 2024 Wafid Appoinment . All rights reserved</p>
      </div>
    </div>
  );
};

export default Footer;
