import { FaCamera, FaPlusCircle, FaDownload, FaUpload } from 'react-icons/fa';
import { AiFillAudio } from "react-icons/ai";
import { FaVideo, FaBoxArchive, FaHouseLock  } from "react-icons/fa6";
import { IoLogOut , IoDocumentTextSharp, IoPersonSharp, IoSchool, IoSettingsSharp } from "react-icons/io5";
import { MdOutlineWork } from "react-icons/md";
import { IoIosPerson } from "react-icons/io";



export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
          <div className='flex-auto w-1/8 sidebar pt-10 flex-col text-white '>
            < IoIosPerson  className=' text-8xl bg-white text-gray-300 justify-center items-center rounded-full m-6 '/>
            <div className="bg-blue-900 p-3 gap-2 flex flex-row justify-left items-center"> 
              < FaHouseLock />
              <a href='#'>My Cloud </a>
            </div>
            <div className="p-3 gap-2 flex flex-row justify-left items-center"> 
              < IoSettingsSharp /> 
              <a href = "#">Settings</a>
            </div>
            <div className="p-3 gap-2 flex flex-row justify-left items-center"> 
            < IoLogOut />
            <a href="#">Logout </a> 
            </div>
          </div>

          <div className='flex-auto px-10 w-2/3 feeds'>
            <div class="search pt-5 ">
              <input className="h-10 w-full rounded-full px-5" type="text" id="search-input"  placeholder="Search..." />
            </div>
            <div className="pt-5"> 
              <h2 className="font-black text-blue-800">Categories</h2>
              <div className="flex flex-row gap-4 pt-7">
                <div className="p-5 rounded-lg text-white bg-fuchsia-500 ">
                  < IoDocumentTextSharp />
                  <h3>Document</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-yellow-500 ">
                  <FaCamera />
                  <h3>Image</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-red-500 ">
                  <AiFillAudio />
                  <h3>Audio</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-lime-500 ">
                  <FaVideo />
                  <h3>Video</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-violet-500 ">
                  <FaPlusCircle />
                  <h3>Other</h3>
                  <p>20 files</p>
                  </div>
              </div>
            </div>

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
            
            <div className="pt-5">
              <h2 className="font-black text-blue-800 mb-10 ">Recent Files</h2>

              <div className="flex flex-col mt-2 p-2 rounded-md recent-files-list bg-white">
                <div className="flex flex-row justify-between">
                  <div className='flex flex-row gap-2 justify-left items-center'>
                    <FaCamera className='  text-yellow-500' />
                    <h3> IMG_12340</h3>
                  	</div>
    	            <h3>png</h3>
    	            <h3>3 MB</h3>
    	            < FaDownload />
                </div>
              </div>

              <div className="flex flex-col mt-2 p-2 rounded-md recent-files-list bg-white">
                <div className="flex flex-row justify-between">
                  <div className='flex flex-row gap-2 justify-left items-center'>
                    <IoDocumentTextSharp className='text-fuchsia-600' />
                    <h3> IMG_12340</h3>
                  	</div>
    	            <h3>pdf</h3>
    	            <h3>5 MB</h3>
    	            < FaDownload />
                </div>
              </div>

              
            </div>

          </div>
          <div className='upload-box flex-auto w-1/4 bg-white p-10 flex flex-col items-center'>

            <div className='upload w-full flex flex-col p-20 rounded-lg justify-center  items-center bg-gray-100'>
              <FaUpload className='text-4xl  text-blue-500' />
              <p className='font-black text-blue-500'>add new files</p>
            </div>

            <div className='w-full flex flex-col mt-10 rounded-lg px-4 bg-gray-100 p-4'>
              <div className='flex flex-col'>
                <div className='flex flex-row gap-2 justify-between'>            
                    <p className='font-bold text-blue-500'>your storage</p>
                    <p className='font-semibold text-cyan-500'>25% left</p>
                </div>
                <div className='pt-2'>
                  <p>75GB of 100GB are used</p> 
                </div>
                
                <div className='pt-2' >
                  <div class="w-full bg-gray-200 rounded-full h-2.5 bg-gray-100">
                    <div class="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
                  </div>
                </div>

              </div>
            </div>
          </div>
    </main>
  )
}