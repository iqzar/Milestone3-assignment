import Image from "next/image";
import dp from './public/blogger.jpg';

export default function About() {
  return (
    <main>
      {/* Section Title */}
      <div className="mt-10 md:mt-16 flex justify-center items-center">
        <div className="border-b-2 border-med w-full mx-8"></div>
        <h2 className="text-[14px] text-sec font-bold sm:text-[16px] mx-3 sm:mx-5 leading-none whitespace-nowrap">
          ABOUT ME
        </h2>
        <div className="border-b-2 border-med w-full mx-8"></div>
      </div>

      {/* About Content */}
      <div className="ml-10 mr-10 md:ml-20 md:mr-20 flex flex-col md:flex-row md:space-x-16 mt-10">
        {/* Responsive Image */}
        <div className="flex-shrink-0">
          <Image
            src={dp}
            width={300}
            height={400}
            alt="blogger"
            className="rounded-lg shadow-md"
            priority
          />
        </div>

        {/* Text Content */}
        <div>
          <p className="text-[14px] md:mt-0 mt-6 leading-6">
            Hi there! Im a travel enthusiast from Pakistan with an insatiable curiosity to explore the wonders of the world. Whether its wandering through vibrant cities, hiking serene mountain trails, or immersing myself in diverse cultures, I find joy in discovering the beauty and uniqueness of every destination.
          </p>
          <p className="text-[14px] md:mt-4 mt-3 leading-6">
            Traveling has not only transformed my life but has also inspired me to share my experiences with others. Through my blog, I aim to ignite the wanderlust in your heart and provide practical tips and insights to make your own adventures more fulfilling. From hidden gems to world-famous spots, my goal is to guide and inspire.
          </p>
          <p className="text-[14px] md:mt-4 mt-3 leading-6">
            I believe that travel is more than just a journey; its a way of connecting with people and understanding the world in a new light. Lets embark on this journey together, discovering incredible destinations and unforgettable experiences. Whether youre a seasoned traveler or just starting out, Im here to inspire and help you along the way!
          </p>
        </div>
      </div>
    </main>
  );
}
