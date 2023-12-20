import { IoIosPerson } from "react-icons/io";
import { IoSettings, IoLogOut } from "react-icons/io5";
import { RiAccountPinCircleFill } from "react-icons/ri";



const SideBar = () => {


    return(
        <div className='flex-auto w-1/8 sidebar pt-10 flex-col bg-blue-800 text-white '>
            <div className=" flex justify-center items-center p-6 m-6 text-5xl bg-white rounded-full ">
              < IoIosPerson className='text-blue-300 '  />
            </div>
            <div className=" flex flex-row items-center gap-2 bg-blue-900 h-10 mt-4 p-3"> 
              <RiAccountPinCircleFill />
              <h3><a href="#">My Cloud</a></h3>
            </div>

            <div className=' '>
              <div className="pt-10 flex flex-row items-center gap-2 p-3"> 
                < IoSettings />
                <h3><a href=""> Settings</a></h3>
              </div>
              <div className="pt-2 flex flex-row items-center gap-2 p-3"> 
                < IoLogOut />
                <h3><a href=""> Logout</a></h3>
              </div>
            </div>

          </div>
    )
}

export default SideBar