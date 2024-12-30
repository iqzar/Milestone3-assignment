import Header from "@/app/header";
import About from "./about";
import Destinations from "./destinations";
import Image from "next/image";
import Section from "./psection";
import Rsection from "./rsection";
import Footer from "./footer";
import backgroundImage from './public/bg.jpg';
import banner from './public/banner.jpg';

export default function Home() {
  return (
    <>
      <div
        className="font-poppins bg-pri relative inset-0 w-full h-screen transition-transform duration-300 scale-100 group-hover:scale-110"
        style={{
          backgroundImage: `url(${backgroundImage.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <Header />
        <div className="absolute inset-0 bg-black bg-opacity-10"></div>

        {/* Content */}
        <div className="relative text-left h-full md:ml-24 ml-5 md:mr-0 mr-3 mt-44 md:mt-36">
          <h1 className="text-3xl md:text-4xl font-bold text-pri drop-shadow-md">
            Roam the Globe<br /> <span>Adventures That Redefine Travel</span>
          </h1>
          <p className="mt-4 md:mt-8 text-sm md:text-md text-pri drop-shadow-md">
            From serene escapes to daring quests, discover blogs that inspire you to pack your bags and embrace the world.
          </p>
        </div>
      </div>
      <About />
      {/* Section Title */}
      <div className="mt-8 md:mt-16 flex justify-center items-center mb-10">
        <div className="border-b-2 border-med w-full mx-4 md:mx-8"></div>
        <h2 className="text-[12px] font-bold text-sec md:text-[14px] sm:text-[16px] mx-2 sm:mx-5 leading-none whitespace-nowrap">
          EDITORS PICK
        </h2>
        <div className="border-b-2 border-med w-full mx-4 md:mx-8"></div>
      </div>
      <Section />
      <Image
        src={banner}
        alt="banner"
        width={1920}
        height={1080}
        className="w-full h-auto mt-5 object-cover"
      />
      <Destinations />
      <Rsection />
      <Footer />
    </>
  );
}
