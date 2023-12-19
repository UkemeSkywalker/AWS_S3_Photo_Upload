import { FaBeer } from 'react-icons/fa';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-row">
          <div className='flex-auto w-1/6 sidebar pt-10 px-4 flex-col'>
            <div className=" avatar justify-center items-center">
            </div>
            <div className="pt-10"> My Cloud</div>
            <div className="pt-10"> Settings</div>
            <div className="pt-2"> Logout </div>
          </div>

          <div className='flex-auto px-10 w-1/2 feeds'>
            <div class="search pt-5 ">
              <input className="h-10 w-full rounded-full px-5" type="text" id="search-input"  placeholder="Search..." />
            </div>
            <div className="pt-5"> 
              <h2 className="font-black text-blue-800">Categories</h2>
              <div className="flex flex-row justify-between pt-7">
                <div className="p-5 rounded-lg text-white bg-cyan-500 ">
                  <h3>All</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-fuchsia-500 ">
                  <h3>Document</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-yellow-500 ">
                  <h3>Image</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-red-500 ">
                  <h3>Music</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-lime-500 ">
                  <h3>Video</h3>
                  <p>20 files</p>
                  </div>
                <div className="p-5 rounded-lg text-white bg-violet-500 ">
                  <h3>Other</h3>
                  <p>20 files</p>
                  </div>
              </div>
            </div>

            <div className="pt-5"> 
              <h2 className="font-black text-blue-800 mb-10 ">Files</h2>
              <div className="flex flex-row gap-4">
                <div className="p-5 rounded-lg bg-white">
                  <h3><FaBeer/> Work</h3>
                  <p>800 files</p>
                  </div>
                <div className="p-5 rounded-lg bg-white">
                  <h3>Personal</h3>
                  <p>315 files</p>
                  </div>
                <div className="p-5 rounded-lg bg-white">
                  <h3>School</h3>
                  <p>70 files</p>
                  </div>
                <div className="p-5 rounded-lg bg-white">
                  <h3>Archive</h3>
                  <p>20 files</p>
                  </div>
              </div>
            </div>
            
            <div className="pt-5">
              <h2 className="font-black text-blue-800 mb-10 ">Recent Files</h2>

              <div className="flex flex-col mt-2 p-4 rounded-md recent-files-list bg-white">
                <div className="flex flex-row justify-between">
    	            <h3>File Name</h3>
    	            <h3>File Type</h3>
    	            <h3>File Size</h3>
    	            <h3>Download</h3>
                </div>
              </div>
              <div className="flex flex-col mt-2 p-4 rounded-md recent-files-list bg-white">
                <div className="flex flex-row justify-between">
    	            <h3>File Name</h3>
    	            <h3>File Type</h3>
    	            <h3>File Size</h3>
    	            <h3>Download</h3>
                </div>
              </div>
              
            </div>

          </div>
          <div className='flex-auto w-1/4'>Upload</div>
    </main>
  )
}
