import React from 'react'
import Navbar from "../navbar/Navbar";
import Slidebar from "../slidebar/Slidebar";
import {Outlet} from 'react-router-dom'
function Dashboard({sidebartoggle,setsidebartoggle}) {
  return (
    <div>
     <Slidebar sidebartoggle={sidebartoggle} setsidebartoggle={setsidebartoggle}/> 
     <Navbar sidebartoggle={sidebartoggle} setsidebartoggle={setsidebartoggle}/>
     <div className="bg-red h-[100vh]">
            <Outlet/>
        </div>
    </div>
  )
}

export default Dashboard;