import { FaBoxArchive } from "react-icons/fa6";
import { IoPersonSharp, IoSchool } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";

import Searchbar from "./search-bar";
import Category from './category';
import RecentFiles from "./recent-files";

const Feeds = () => {
    return(
        <div className='flex-auto px-10 w-2/3 feeds'>
            < Searchbar />         
            < Category />

            <div className="pt-5"> 
              <h2 className="font-black text-blue-800 mb-10 ">Files</h2>
              <div className="flex flex-row gap-4">
                <div className="p-5 rounded-lg bg-white">
                  < MdOutlineWork />
                  <h3> Work</h3>
                  <p>800 files</p>
                  </div>
                <div className="p-5 rounded-lg bg-white">
                  < IoPersonSharp />
                  <h3>Personal</h3>
                  <p>315 files</p>
                  </div>
                <div className="p-5 rounded-lg bg-white">
                  <IoSchool />
                  <h3>School</h3>
                  <p>70 files</p>
                  </div>
                <div className="p-5 rounded-lg bg-white">
                  < FaBoxArchive />
                  <h3>Archive</h3>
                  <p>20 files</p>
                  </div>
              </div>
            </div>
            
            
            < RecentFiles />
            
          </div>
    )
}

export default Feeds