import React from 'react'
import { FaBarsStaggered } from "react-icons/fa6";
import { Link } from 'react-router-dom';
function Navbar({sidebartoggle,setsidebartoggle}) {
  return (
    <div className={`bg-gradient-to-r from-gray-700 to-black  fixed flex w-full flex-row px-4 py-3 justify-between ${sidebartoggle ? 'ml-0' : 'ml-[218px]'}`}>
        <div className='py-3'>
        <FaBarsStaggered onClick={()=>setsidebartoggle(!sidebartoggle)}
            className="cursor-pointer text-white" />
        </div>
        <div className=''>
            <ul className={`flex items-center justify-center mt-2 space-x-3 hover:cursor-pointer ${sidebartoggle ? "" : "mr-64"}`} >
                <li className='text-white'>search</li>
                <li className='text-white'><Link to='profile'> profile</Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar