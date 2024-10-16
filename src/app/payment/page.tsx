"use client";
import Image from "next/image";
import React from "react";
import { FaCopy } from "react-icons/fa";

const payments = () => {
  const copyToClipboard = (text: any) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text successfully copied!");
      })
      .catch((error) => {
        console.error("Failed to copy text: ", error);
      });
  };
  return (
    <div className="w-full h-full">
      <div className="flex mx-auto flex-col items-center justify-center p-4 max-w-[1000px] pt-10 ">
        <div className="border w-full sm:w-[80%] md:w-[60%] lg:w-[50%] py-6 flex items-center justify-center rounded-3xl border-slate-600">
          <div className="flex flex-col space-y-3 sm:space-y-6">
            <div className="flex flex-col md:flex-row space-x-4 items-center">
              <div className="w-[100px] flex justify-center py-4 sm:py-0">
                <Image src={"/meezan.png"} alt="/" height={80} width={80} />
              </div>
              <div className="space-y-5">
                <p>
                  Iban No :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    02190105315550
                    <FaCopy
                      className="inline ml-2 cursor-pointer"
                      onClick={() => copyToClipboard("02190105315550")}
                    />
                  </span>
                </p>
                <p>
                  Account name :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    {" "}
                    Ahmad Ghazali
                  </span>
                </p>
              </div>
            </div>

            <div className="h-[2px] w-full bg-slate-300 rounded-full" />

            <div className="flex flex-col md:flex-row space-x-4 items-center">
              <div className="w-[100px] flex justify-center py-6 sm:py-0">
                <Image src={"/bop.png"} alt="/" height={100} width={100} />
              </div>
              <div className="space-y-5">
                <p>
                  Iban No :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    {" "}
                    5010316611000019
                    <FaCopy
                      className="inline ml-2 cursor-pointer"
                      onClick={() => copyToClipboard("5010316611000019")}
                    />
                  </span>
                </p>
                <p>
                  Account name :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    {" "}
                    Ahmad Ghazali
                  </span>
                </p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-slate-300 rounded-full" />

            <div className="flex flex-col md:flex-row space-x-4 items-center">
              <div className="w-[100px] flex justify-center py-6 sm:py-0">
                <Image src={"/easypasa.png"} alt="/" height={70} width={70} />
              </div>
              <div className="space-y-5">
                <p>
                  Iban No :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    {" "}
                    03180414119
                    <FaCopy
                      className="inline ml-2 cursor-pointer"
                      onClick={() => copyToClipboard("03180414119")}
                    />
                  </span>
                </p>
                <p>
                  Account name :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    {" "}
                    Ahmad Ghazali
                  </span>
                </p>
              </div>
            </div>
            <div className="h-[2px] w-full bg-slate-300 rounded-full" />

            {/* <div className="flex flex-col md:flex-row space-x-4 items-center">
              <div className="w-[100px] flex justify-center">
                <Image src={"/jazzcash.png"} alt="/" height={80} width={80} />
              </div>
              <div className="space-y-5">
                <p>
                  Iban No :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    {" "}
                    57834573495083409567345657
                    <FaCopy
                      className="inline ml-2 cursor-pointer"
                      onClick={() =>
                        copyToClipboard("57834573495083409567345657")
                      }
                    />
                  </span>
                </p>
                <p>
                  Account name :{" "}
                  <span className="border-gray-600 rounded-full px-3 py-1 text-xs sm:text-sm font-bold border-[0.5px] bg-lime-200">
                    {" "}
                    Ahmad Ghazali
                  </span>
                </p>
              </div>
            </div> */}
          </div>
        </div>

        <div className="w-full mt-6">
          <div className="space-y-3">
            <p className="text-xl   text-red-700 font-bold ">
              Important Announcement:
            </p>

            <ul className="list-disc pl-5">
              <li>Please transfer 4000 to the following account details</li>
              <li>After payment send the screenshot on 03180414119</li>
              <li>
                Please wait 1 hour. The token will be sent to your email and
                your WhatsApp number.
              </li>
            </ul>

            <ul className="list-disc pl-5 pt-6 text-end">
              <li>
                براہ کرم 4000 کی رقم درج ذیل اکاؤنٹ کی تفصیلات پر منتقل کریں۔
              </li>
              <li>ادائیگی کے بعد اسکرین شاٹ 03180414119 پر بھیجیں۔</li>
              <li>
                براہ کرم 1 گھنٹہ انتظار کریں۔ ٹوکن آپ کے ای میل اور WhatsApp
                نمبر پر بھیجا جائے گا۔
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default payments;
