import Header from "@/app/header";
import About from "./about";
import Destinations from "./destinations";
import Image from "next/image";
import Section from "./psection";
import Rsection from "./rsection";
import Footer from "./footer";
import backgroundImage from './public/background.jpg'
import banner from './public/banner.jpg'

export default function Home(){
  return(
    <>
  <div
  className="relative inset-0 h-screen transition-transform duration-300 scale-100 group-hover:scale-110"
  style={{
    backgroundImage: `url(${backgroundImage.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
>
    <Header/>
    <div className="absolute inset-0 bg-black bg-opacity-10"></div>
      
      {/* Content */}
      <div className="relative md:mt-36 text-left h-full md:ml-24 ml-5 md:mr-0 mr-3 mt-44 font-roboto">
        <h1 className="text-4xl font-bold text-black drop-shadow-md">
        Roam the Globe<br/> <span>Adventures That Redefine Travel</span>
        </h1>
        <p className="mt-8 text-md text-black drop-shadow-md font-poppins ">
        From serene escapes to daring quests, discover blogs that inspire you to pack your bags and embrace the world.
        </p>
      </div>
   </div>
    <About/>
    <Section/>
    <Image 
  src={banner} 
  alt="banner" 
  width={1920} 
  height={1080} 
  className="w-full h-auto mt-5 object-cover" 
/>

    <Destinations/>
    <Rsection/>
    <Footer/>
    </>
  )
}
