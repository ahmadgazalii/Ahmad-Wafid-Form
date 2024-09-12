"use client";

import { useState } from "react";
import { Formik } from "./comPonents/Formik";


export default function Home() {
  const [result, setResult] = useState("");

  const onSubmit = async (event:any) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "41ea5fde-53a9-47b6-a684-2861d885b314");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <div className="w-full h-full bg-[#FAF9F6]  text-black">
      {/* <Form /> */}
      <Formik />
      {/* <Footer /> */}
      {/* <div>
        <form onSubmit={onSubmit}>
          <input type="text" name="name" required />
          <input type="email" name="email" required />




          <textarea name="message" ></textarea>

          <button type="submit">Submit Form</button>
        </form>
        <span>{result}</span>
      </div> */}
    </div>
  );
}
