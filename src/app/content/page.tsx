import Head from "next/head"
import Header from "../header"

export default function Content(){
    return(
        <main>
        <Header/>
        <div className="flex justify-between mt-14 md:ml-20 md:mr-20">
            <div id="left" className="w-60%">
                <p className="text-xs text-white bg-green-600 border rounded-full px-1 py-1 w-16">Continent</p>
                <h1 className="text-3xl mt-4 font-bold mb-2">Title</h1>
                <div className="flex space-x-2 text-[10px]">
                    <p>Written by</p>
                    <p>|</p>
                    <p>Add a comment</p>
                </div>
                <p className="text-md mt-8">content</p>

                <h2></h2>

             
            </div>

            <div id='right' className="">
                <div className="w-72 h-auto px-5 py-4">
                    <h2 className="mb-2 text-lg font-semibold">DESTINATIONS</h2>
                    
                    <div className="flex justify-between text-sm mb-1">
                        <p>Africa</p>
                        <p className="border rounded-full px-3 bg-red-500">3</p>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                        <p>Europe</p>
                        <p className="border rounded-full px-3 bg-green-500">6</p>
                        </div>
                        <div className="flex justify-between text-sm mb-1">
                        <p>Asia</p>
                        <p className="border rounded-full px-3 bg-yellow-300">8</p>
                        </div>
                        <div className="flex justify-between text-sm">
                        <p>North America</p>
                        <p className="border rounded-full px-3 bg-blue-500">6</p>
                        </div>
                    </div>    
                </div>

            </div>
        
        </main>
    )
}