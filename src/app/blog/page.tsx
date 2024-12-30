import Header from "../header";
import Footer from "../footer"; 
import Section from "../psection";
import { Search } from "lucide-react";

export default function BlogList(){
    return(
        <main>
            <Header/>
            <div className="flex justify-between md:mt-10 ml-10 mr-10">
        <h2 className="text-3xl font-semibold">
            Discover Stories
        </h2>
        {/* Search input */}
        <div className="flex items-end border rounded-full w-72 border-black bg-white px-2 py-1">
          <Search className="text-gray-500 mr-3 cursor-pointer" size={20}  />
          <input
            type="text"
            placeholder="Search..."
            className="flex-grow outline-none text-gray-700"
          />
        </div>

    
            </div>
            <Section/>
            <Footer/>
        </main>
    )
}