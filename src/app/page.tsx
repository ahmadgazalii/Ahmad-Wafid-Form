"use client";

import { useState } from "react";
import { Formik } from "./components/Formik";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full  text-black">
      <div className="w-full h-full my-20 sm:my-32">
      <Formik />
      </div>
        
      <Footer />
    </div>
  );
}
