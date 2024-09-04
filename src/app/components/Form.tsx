"use client";
import React, { useState } from "react";
import {
  city,
  countries,
  gender,
  position,
  status,
  traveling,
  visatype,
} from "./formdata/Formdata";
import Select from "react-select";
import toast, { Toaster } from "react-hot-toast";

type OptionType = {
  value: string;
  label: string;
};

const Form = () => {
  const [selectedCountry, setSelectedCountry] =
    React.useState<OptionType | null>(null);
  const [selectedcity, setSelectedcity] = React.useState<OptionType | null>(
    null
  );
  const [selectedtravel, setSelectedtravel] = React.useState<OptionType | null>(
    null
  );
  const [selectedstatus, setSelectedstatus] = React.useState<OptionType | null>(
    null
  );
  const [selectedGender, setSelectedGender] = React.useState<OptionType | null>(
    null
  );
  const [selectedvisatype, setSelectedvisatype] =
    React.useState<OptionType | null>(null);
  const [selectedposition, setSelectedposition] =
    React.useState<OptionType | null>(null);
  const [dateofbirthValue, setDateofbirthValue] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [passportno, setpassportno] = useState("");
  const [confirmpassportno, setconfirmpassportno] = useState("");
  const [passportissueplace, setpassportissueplace] = useState("");
  const [email, setemail] = useState("");
  const [phoneno, setphoneno] = useState("");
  const [nationalid, setnationalid] = useState("");
  const [other, setother] = useState("");
  const [dateofissueValue, setDateofissueValue] = useState("");
  const [dateofexpireValue, setDateofexpireValue] = useState("");

  const handleCountry = (selectedOption: any) => {
    setSelectedCountry(selectedOption);
  };

  const handlecity = (selectedOption: any) => {
    setSelectedcity(selectedOption);
  };

  const handletravel = (selectedOption: any) => {
    setSelectedtravel(selectedOption);
  };

  const handlegender = (selectedOption: any) => {
    setSelectedGender(selectedOption);
  };

  const handleposition = (selectedOption: any) => {
    setSelectedposition(selectedOption);
  };

  const handlestatus = (selectedOption: any) => {
    setSelectedstatus(selectedOption);
  };

  const handlevisatype = (selectedOption: any) => {
    setSelectedvisatype(selectedOption);
  };

  const FormSubmit = async (event: any) => {
    try {
      event.preventDefault();
      if (selectedCountry) {
        const res = await fetch(
          "https://form-data-storing.vercel.app/api/form",
          {
            method: "POST",
            body: JSON.stringify({
              country: selectedCountry?.label,
              city: selectedcity?.label,
              countrytravelto: selectedtravel?.label,
              firstname: firstname,
              lastname: lastname,
              dateofbirth: dateofbirthValue,
              gender: selectedGender?.label,
              martialstatus: selectedstatus?.label,
              passportno: passportno,
              confirmpassportno: confirmpassportno,
              passportissuedate: dateofissueValue,
              passportissueplace: passportissueplace,
              passportexpirydate: dateofexpireValue,
              visatype: selectedvisatype?.label,
              email: email,
              phoneno: phoneno,
              nationalid: nationalid,
              postionappliedfor: selectedposition?.label,
              other: other,
            }),
          }
        );
        console.log(res.ok);
        toast.success("Form Submit Successfully"),
          {
            position: "top-right",
          };
      }
      setSelectedcity(null);
      setSelectedCountry(null);
      setSelectedtravel(null);
      setSelectedGender(null);
      setSelectedstatus(null);
      setSelectedvisatype(null);
      setSelectedposition(null);
      setFirstname("");
      setLastname("");
      setDateofbirthValue("");
      setpassportno("");
      setconfirmpassportno("");
      setpassportissueplace("");
      setDateofissueValue("");
      setDateofexpireValue("");
      setemail("");
      setphoneno("");
      setnationalid("");
      setother("");
    } catch (error) {
      console.log("error");
    }
  };

  return (
    <>
      <Toaster position="top-right" />
      <div className="h-full w-full py-32 px-6">
        <div className="max-w-[1100px] justify-items-end   border p-6 sm:p-10 rounded-xl shadow-md shadow-black border-gray-300 items-center flex flex-col mx-auto text-black   bg-[#ffff]  ">
          <div className="flex flex-col w-full space-y-10 ">
            {/* medical examination */}
            <p className="text-xl sm:text-4xl font-bold ">
              Book a medical examination appointment
            </p>
            <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
              {/* country */}
              <div className="  flex-col w-full  place-self-end ">
                <div className="space-y-4">
                  <p className="text-xl font-bold">Location</p>
                  <p className="text-sm font-bold text-gray-500 ">Country</p>
                  <Select
                    className="  rounded-xl "
                    value={selectedCountry}
                    onChange={handleCountry}
                    options={countries}
                    placeholder="Select a country"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "#e6e5e5fd",
                        borderColor: "gray",
                        fontSize: "14px",
                        color: "gray",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "white", // Background color for the menu
                        color: "white", // Text color in the menu
                        fontSize: "10px",
                      }),
                      option: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "black", // Text color for the selected value
                      }),
                    }}
                  />
                </div>
              </div>
              {/* city */}
              <div className="flex flex-col w-full  justify-end ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">City</p>
                  <Select
                    className="  rounded-xl "
                    value={selectedcity}
                    onChange={handlecity}
                    options={city}
                    placeholder="Select your city
"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "#e6e5e5fd",
                        borderColor: "gray",
                        fontSize: "14px",
                        color: "gray",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "white", // Background color for the menu
                        color: "white", // Text color in the menu
                        fontSize: "10px",
                      }),
                      option: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "black", // Text color for the selected value
                      }),
                    }}
                  />
                </div>
              </div>
              {/* country traveling to */}
              <div className="flex flex-col w-full  justify-end ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    Country Traveling To
                  </p>
                  <Select
                    className="  rounded-xl "
                    value={selectedtravel}
                    onChange={handletravel}
                    options={traveling}
                    placeholder="Select GCC country 
"
                    styles={{
                      control: (provided) => ({
                        ...provided,
                        backgroundColor: "#e6e5e5fd",
                        borderColor: "gray",
                        fontSize: "14px",
                        color: "gray",
                      }),
                      menu: (provided) => ({
                        ...provided,
                        backgroundColor: "white", // Background color for the menu
                        color: "white", // Text color in the menu
                        fontSize: "10px",
                      }),
                      option: (provided) => ({
                        ...provided,
                        color: "black",
                      }),
                      singleValue: (provided) => ({
                        ...provided,
                        color: "black", // Text color for the selected value
                      }),
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Candidate's information*/}

            <div className="grid w-full  grid-cols-1 sm:grid-cols-2 md:grid-cols-3   gap-10 pt-20">
              {/* first name */}
              <div className="  flex-col w-full  justify-end ">
                <div className="space-y-4">
                  <p className="text-xl font-bold">Candidate's information</p>
                  <p className="text-sm font-bold text-gray-500 ">First Name</p>
                  <input
                    value={firstname}
                    onChange={(e) => setFirstname(e.target.value)}
                    type="text"
                    placeholder=" First Name  "
                    className="w-full placeholder:text-[#616369]  rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd] border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* last name */}
              <div className="   w-full  place-self-end ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">Last Name</p>
                  <input
                    value={lastname}
                    onChange={(e) => setLastname(e.target.value)}
                    type="text"
                    placeholder=" Last Name  "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* date of birth */}
              <div className="   w-full  place-self-end ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    Date of Birth
                  </p>
                  <input
                    type="date"
                    value={dateofbirthValue}
                    onChange={(e) => setDateofbirthValue(e.target.value)}
                    className={`date-input w-full text-sm h-[37px] bg-[#e6e5e5fd] border border-gray-500   hover:border-gray-400 rounded-[4px] px-2 ${
                      dateofbirthValue ? "text-black" : "text-[#616369]"
                    }`}
                    placeholder="MM/DD/YY"
                  />
                </div>
              </div>
              {/* gender */}
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-500 ">Gender</p>
                <Select
                  className="  rounded-xl "
                  value={selectedGender}
                  onChange={handlegender}
                  options={gender}
                  placeholder="-------
"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",
                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* status */}
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-500 ">
                  Marital status
                </p>
                <Select
                  className="  rounded-xl "
                  value={selectedstatus}
                  onChange={handlestatus}
                  options={status}
                  placeholder="-------
"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",
                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* password number */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    Passport number №
                  </p>
                  <input
                    value={passportno}
                    onChange={(e) => setpassportno(e.target.value)}
                    type="text"
                    placeholder=" Passport number no*"
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/*Confirm password number */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    Confirm Passport №
                  </p>
                  <input
                    value={confirmpassportno}
                    onChange={(e) => setconfirmpassportno(e.target.value)}
                    type="text"
                    placeholder=" Confirm Passport no* "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* password issue date */}
              <div className="   w-full  place-self-end">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    Passport Issue Date
                  </p>
                  <input
                    type="date"
                    value={dateofissueValue}
                    onChange={(e) => setDateofissueValue(e.target.value)}
                    className={`date-input w-full text-sm h-[37px] bg-[#e6e5e5fd] border border-gray-500 hover:border-gray-400 rounded-[4px] px-2 ${
                      dateofissueValue ? "text-black" : "text-[#616369]"
                    }`}
                    placeholder="MM/DD/YY"
                  />
                </div>
              </div>
              {/* password issue place */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    Passport Issue Place
                  </p>
                  <input
                    value={passportissueplace}
                    onChange={(e) => setpassportissueplace(e.target.value)}
                    type="text"
                    placeholder=" Passport Issue Place  "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* password expiry date */}
              <div className="   w-full  place-self-end ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    Passport Expiry Date
                  </p>
                  <input
                    type="date"
                    value={dateofexpireValue}
                    onChange={(e) => setDateofexpireValue(e.target.value)}
                    className={`date-input w-full text-sm h-[37px] bg-[#e6e5e5fd] border border-gray-500 hover:border-gray-400 rounded-[4px] px-2 ${
                      dateofexpireValue ? "text-black" : "text-[#616369]"
                    }`}
                    placeholder="MM/DD/YY"
                  />
                </div>
              </div>
              {/* visa type */}
              <div className="space-y-4">
                <p className="text-sm font-bold text-gray-500 ">Visa Type</p>
                <Select
                  className="  rounded-xl "
                  value={selectedvisatype}
                  onChange={handlevisatype}
                  options={visatype}
                  placeholder="Select Visa Type

"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",
                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* email */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">Email ID</p>
                  <input
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                    type="text"
                    placeholder=" your@gmail.com  "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* phone no */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">Phone no</p>
                  <input
                    value={phoneno}
                    onChange={(e) => setphoneno(e.target.value)}
                    type="text"
                    placeholder=" Phone no "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* notion id */}
              <div className="   w-full   ">
                <div className="space-y-4">
                  <p className="text-sm font-bold text-gray-500 ">
                    National ID
                  </p>
                  <input
                    value={nationalid}
                    onChange={(e) => setnationalid(e.target.value)}
                    type="text"
                    placeholder=" National ID
 "
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
              {/* position applied for*/}
              <div className="space-y-4   ">
                <p className="text-sm font-bold text-gray-500 ">
                  Position applied for
                </p>
                <Select
                  className="  rounded-xl "
                  value={selectedposition}
                  onChange={handleposition}
                  options={position}
                  placeholder="-------
"
                  styles={{
                    control: (provided) => ({
                      ...provided,
                      backgroundColor: "#e6e5e5fd",

                      borderColor: "gray",
                      fontSize: "14px",
                      color: "gray",
                    }),
                    menu: (provided) => ({
                      ...provided,
                      backgroundColor: "white", // Background color for the menu
                      color: "white", // Text color in the menu
                      fontSize: "10px",
                    }),
                    option: (provided) => ({
                      ...provided,
                      color: "black",
                    }),
                    singleValue: (provided) => ({
                      ...provided,
                      color: "black", // Text color for the selected value
                    }),
                  }}
                />
              </div>
              {/* Other */}
              <div className="space-y-4  md:w-[400px] ">
                <p className="text-sm font-bold text-gray-500 ">Other</p>
                <div className="flex space-x-2">
                  {/* <input type="checkbox"></input> */}

                  <input
                    value={other}
                    onChange={(e) => setother(e.target.value)}
                    type="text"
                    name=""
                    id=""
                    className="w-full placeholder:text-[#616369] rounded-[4px] px-2 text-sm h-[37px] bg-[#e6e5e5fd]  border-gray-500
                  hover:border-gray-400
                  
                  border"
                  />
                </div>
              </div>
            </div>

            <div className="flex justify-end">
              <div className=" w-[60%]  md:w-[25%] text-center text-white py-3 bg-gray-600 rounded-lg">
                <button
                  onClick={FormSubmit}
                  className="md:text-lg font-semibold  "
                >
                  Save and Coutinue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;
