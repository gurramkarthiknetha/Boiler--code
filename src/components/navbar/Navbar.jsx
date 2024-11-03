import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Navbar({sidebartoggle,setsidebartoggle}) {
  return (
    <div className='bg-gradient-to-r from-gray-700 to-black  fixed  justify-between !w-full flex flex-row px-4 py-3 '>

      <div className="flex flex-row space-x-3">
        <div>
            <img src="https://pngimg.com/d/google_PNG19644.png" className='bg-transparent my-2 w-[50px]' alt="" />
        </div>
        <div className='py-3'>
        <FaBarsStaggered onClick={()=>setsidebartoggle(!sidebartoggle)}
            className="cursor-pointer text-white" />
        </div>

      </div>

        <div>
            <ul className={`flex items-center justify-center mt-2 space-x-3 hover:cursor-pointer ${sidebartoggle ? "" : ""}`} >
                <li className='text-white'>search</li>
                <li className='text-white'><Link to='profile'> profile</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar