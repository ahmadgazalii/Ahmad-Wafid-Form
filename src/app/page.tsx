import Image from "next/image";
import Form from "./components/Form";
import Navbar from "./components/Navbar";
import FormStoreData from "./components/FormStoreData";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full bg-white ">
      <Navbar />
      <Form />
      <Footer />
      {/* <FormStoreData /> */}
    </div>
  );
}
