import { FaCamera, FaDownload } from 'react-icons/fa';
import { IoDocumentTextSharp } from "react-icons/io5";

const RecentFiles = () => {
    return(

        <div className="pt-5">
              <h2 className="font-black text-blue-800 mb-10 ">Recent Files</h2>

              <div className="flex flex-col mt-2 p-2 rounded-md recent-files-list bg-white">
                <div className="flex flex-row justify-between">
                  <div className='flex flex-row items-center gap-2'>
                    <FaCamera className='text-yellow-600' />
                    <h3> IMG_12340</h3>
                  	</div>
    	            <h3>png</h3>
    	            <h3>3 MB</h3>
    	            < FaDownload />
                </div>
              </div>

              <div className="flex flex-col mt-2 p-2 rounded-md recent-files-list bg-white">
                <div className="flex flex-row justify-between">
                  <div className='flex flex-row gap-2 items-center'>
                    <IoDocumentTextSharp className='text-fuchsia-900' />
                    <h3> IMG_12340</h3>
                  	</div>
    	            <h3>pdf</h3>
    	            <h3>5 MB</h3>
    	            < FaDownload />
                </div>
              </div>

              
            </div>
    )
}

export default RecentFiles