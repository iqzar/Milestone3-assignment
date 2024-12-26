import Image from "next/image";
import logo from './public/logoo.png'

export default function Footer(){
    return(
        <div className="bg-c2 h-auto w-full mt-10 bg-cyan-500">
        <div className="flex flex-col lg:flex-row lg:space-x-32 pt-6 pb-10 font-custom text-white">
          <div className="mb-8 lg:mb-0 lg:mt-14 ml-5">
            <Image src={logo} alt="logo" width={80} height={50} />
           <p className="text-[14px] mt-4">
           Created by Iqra.<br/>
           Copyright 2024 · All rights reserved
           </p>
          </div>
      
          <div className="flex flex-col lg:flex-row lg:space-x-16 pt-12 ml-5 font-custom text-white leading-loose">
            <ul className="text-md mb-6 lg:mb-0">
              <li className="font-semibold">DESTINATIONS</li>
              <li className="text-sm leading-loose">Asia</li>
              <li className="text-sm leading-loose">Africa</li>
              <li className="text-sm leading-loose">Europe</li>
             
            </ul>
            <ul className="text-md mb-6 lg:mb-0">
              <li className="font-semibold">FEATURES</li>
              <li className="text-sm leading-loose">About</li>
              <li className="text-sm leading-loose">Contact</li>
              <li className="text-sm leading-loose">News</li>
              <li className="text-sm leading-loose">Blog</li>
            </ul>
            <div className="text-md">
              <p className="font-semibold">NEWSLETTER</p>
              <p className="text-sm leading-4">
              Make sure to subscribe to our newsletter<br/> and be the first to know the news.
              </p>
              <div className="items-center mt-3 w-full max-w-xs h-8 pl-3">
                <input
                  className="text-xs w-full h-full pl-2 bg-cyan-500 border rounded border-cyan-600"
                  placeholder="Your email address"
                />
                <button className="text-cyan-600 text-xs w-full bg-cyan-400 mt-3 rounded pt-1.5 pb-1.5 pl-2 pr-2" type="button">
                  SUBMIT
                </button>
              </div>
            </div>
          </div>
        </div>
      
        {/* Footer bottom section */}
        <div className="flex lg:flex-row flex-col justify-center space-x-5 mt-8">
          <div className="border-b border-c1 w-full lg:w-2/3 mb-8"></div>
          <ul className="flex space-x-6 font-custom text-white font-xs mb-6">
            <li>Terms</li>
            <li>Privacy</li>
            <li>Cookies</li>
          </ul>
        </div>
      </div>
      
      
    )
}