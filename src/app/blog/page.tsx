import Header from "../header"
import Blogs from "../blog"
import { Search } from "lucide-react"

export default function Blog(){
    return(
        <main>
            <Header/>

            <div className="flex justify-center gap-10 border-b-2 border-t-2 mt-2 border-gray-100 pt-2 pb-2">
                <input
                className="text-sm font-semibold outline-none"
                placeholder="Search here"
                />
                 <Search className="w-4 h-4 mt-1"/>
            </div>
            <Blogs/>
        </main>
    )
}