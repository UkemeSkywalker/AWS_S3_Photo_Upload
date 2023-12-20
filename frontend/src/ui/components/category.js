import { FaCamera, FaPlusCircle } from 'react-icons/fa';
import { FaVideo } from "react-icons/fa6";
import { IoDocumentTextSharp } from "react-icons/io5";
import { AiFillAudio } from "react-icons/ai";


const Category = () => {
    return(
        <div className="pt-5"> 
        <h2 className="font-black text-blue-800">Categories</h2>
        <div className="flex flex-row gap-2 pt-7">
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
    )
}
export default Category