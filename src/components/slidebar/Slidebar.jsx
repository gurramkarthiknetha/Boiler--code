import React from 'react'
import { Link } from 'react-router-dom'
import {FaHome} from 'react-icons/fa'
import { FcAbout } from "react-icons/fc";
import { TbLogin2 } from "react-icons/tb";
import { FaRegistered } from "react-icons/fa6";
import { IoSettings } from "react-icons/io5";
function Slidebar({sidebartoggle,setsidebartoggle}) {
  return (
    <div className={`${sidebartoggle ? "w-[64px] mt-[62px]" : "block mt-[62px] w-[164px]"} bg-gradient-to-b from-gray-700 to-black  fixed h-full`}> 
        
        <ul className='mt-3 text-white font-bold flex flex-col space-y-8' >
            <li onClick={()=>setsidebartoggle(!sidebartoggle)}  className={`${sidebartoggle ? "hover:shadow mx-auto focus:text-blue-800 hover:text-red-400" : "pt-4 inline-block w-5 h-5 -mt-2 mr-2 ml-6 "} `}>
                <Link to='/home' >
                    <span className='flex'>
                        <span>
                        <FaHome className={`${sidebartoggle ? "inline-block w-5 h-5 -mt-2 " : "inline-block w-5 h-5 -mt-2 mr-2 ml-6"}`}></FaHome>
                        </span>
                        <span className={`${sidebartoggle ? "hidden" : ""}`}>home</span>
                    </span>
                </Link>
            </li>


            <li onClick={()=>setsidebartoggle(!sidebartoggle)} className={`${sidebartoggle ? "hover:shadow mx-auto focus:text-blue-800 hover:text-red-400" : "pt-3 inline-block w-5 h-5 -mt-2 mr-2 ml-6 "} `}>
                <Link to='about' >
                    <span className='flex'>
                        <span>
                        <FcAbout className={`${sidebartoggle ? "inline-block w-5 h-5 -mt-2 " : "inline-block w-5 h-5 -mt-2 mr-2 ml-6"}`}></FcAbout>
                        </span>
                        <span className={`${sidebartoggle ? "hidden" : ""}`}>about </span>
                    </span>
                </Link>
            </li>

            <li onClick={()=>setsidebartoggle(!sidebartoggle)} className={`${sidebartoggle ? "hover:shadow mx-auto focus:text-blue-800 hover:text-red-400" : "inline-block w-5 h-5 -mt-2 mr-2 ml-6 "} `}>
                <Link to='login' >
                    <span className='flex'>
                        <span>
                        <TbLogin2 className={`${sidebartoggle ? "inline-block w-5 h-5 -mt-2 " : "inline-block w-5 h-5 -mt-2 mr-2 ml-6"}`}></TbLogin2>
                        </span>
                        <span className={`${sidebartoggle ? "hidden" : ""}`}>login </span>
                    </span>
                </Link>
            </li>

            
            <li onClick={()=>setsidebartoggle(!sidebartoggle)} className={`${sidebartoggle ? "hover:shadow mx-auto focus:text-blue-800 hover:text-red-400" : "inline-block w-5 h-5 -mt-2 mr-2 ml-6 "} `}>
                <Link to='register' >
                    <span className='flex'>
                        <span>
                        <FaRegistered className={`${sidebartoggle ? "inline-block w-5 h-5 -mt-2 " : "inline-block w-5 h-5 -mt-2 mr-2 ml-6"}`} ></FaRegistered>
                        </span>
                        <span className={`${sidebartoggle ? "hidden" : ""}`}>register </span>
                    </span>
                </Link>
            </li>
            <li onClick={()=>setsidebartoggle(!sidebartoggle)} className={`${sidebartoggle ? "hover:shadow mx-auto focus:text-blue-800 hover:text-red-400" : "inline-block w-5 h-5 -mt-2 mr-2 ml-6 "} `}>
                <Link to='settings' >
                    <span className='flex'>
                        <span>
                        <IoSettings className={`${sidebartoggle ? "inline-block w-5 h-5 -mt-2 " : "inline-block w-5 h-5 -mt-2 mr-2 ml-6"}`}></IoSettings>
                        </span>
                        <span className={`${sidebartoggle ? "hidden" : ""}`}>Settings </span>
                    </span>
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default Slidebar