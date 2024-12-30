
import image1 from './public/africa.jpg'
import image2 from './public/food.jpg'
import image3 from './public/paris.jpg'

export default function Destinations(){
    return(
        <main className="mb-10">
             <div className="mt-10 md:mt-16 flex justify-center items-center">
  <div className="border-b-2 border-med w-full mx-8"></div>
  <h2 className="text-[14px] text-sec font-bold sm:text-[16px] mx-3 sm:mx-5 leading-none whitespace-nowrap">TOP DESTINATIONS</h2>
  <div className="border-b-2 border-med w-full mx-8"></div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-10 md:ml-14 ml-10">
    {/* Card Component 1*/}
    <div className="relative group w-72 h-96 rounded shadow-md overflow-hidden md:mb-0 mb-5 ml-5">
      {/* Zoomable Image */}
      <div
  className="absolute inset-0 bg-cover bg-center rounded transition-transform duration-300 scale-100 group-hover:scale-110"
   style={{
    backgroundImage: `url(${image1.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  }}
></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

      {/* Text */}
      <div className="absolute bottom-4 left-4 z-10 text-white">
        <h1 className="text-2xl font-bold">Africa</h1>
        <p className="text-sm mt-2">
         6 articles
        </p>
      </div>
    </div>

    {/* Card Component 2*/}
    <div className="relative group w-72 h-96 rounded shadow-md overflow-hidden md:mb-0 mb-5 ml-5">
      {/* Zoomable Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image2.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

      {/* Text */}
      <div className="absolute bottom-4 left-4 z-10 text-white">
        <h1 className="text-2xl font-bold">Asia</h1>
        <p className="text-sm mt-2">
         3 articles
        </p>
      </div>
    </div>

     {/* Card Component 3*/}
     <div className="relative group w-72 h-96 rounded shadow-md overflow-hidden md:mb-0 mb-5 ml-5">
      {/* Zoomable Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-transform duration-300 scale-100 group-hover:scale-110"
        style={{
          backgroundImage: `url(${image3.src})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-5 group-hover:bg-opacity-20 transition duration-300"></div>

      {/* Text */}
      <div className="absolute bottom-4 left-4 z-10 text-white">
        <h1 className="text-2xl font-bold">Europe</h1>
        <p className="text-sm mt-2">
         2 articles
        </p>
      </div>
    </div>
  </div>
        </main>
    )
}