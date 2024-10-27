import Image from "next/image";
import Link from "next/link";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Footer from "./Components/Footer";



export default function Home() {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Footer/>
    </div>
  
  );
}
