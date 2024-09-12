"use client";

import { useState } from "react";
import { Formik } from "./components/Formik";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#FAF9F6]  text-black">
      <Formik />
      <Footer />
    </div>
  );
}
