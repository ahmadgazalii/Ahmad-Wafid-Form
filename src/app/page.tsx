import Form from "./components/Form";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <div className="w-full h-full bg-[#FAF9F6] ">
      <Navbar />
      <Form />
      <Footer />
      {/* <FormStoreData /> */}
    </div>
  );
}
