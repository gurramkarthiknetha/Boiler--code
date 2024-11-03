import { useState } from "react";
import Dashboard from "../Dashboard/Dashboard";
import {createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from "../Home/Home";
import Login from "../login/Login";
import Register from "../register/Register";
import About from "../About/About";
import Settings from "../Settings/Settings";
import Profile from "../profile/Profile";
function Entry() {
  const [sidebartoggle,setsidebartoggle]=useState(false)
  const Browserrouterobj=createBrowserRouter([
    {
      path:'',
      element:<Dashboard sidebartoggle={sidebartoggle} setsidebartoggle={setsidebartoggle} />,
      children:[
        {
          path:'/home',
          element:<Home/>
        },
        {
          path:'login',
          element:<Login/>
        },
        {
          path:'register',
          element:<Register/>
        },
        {
          path:'about',
          element:<About/>
        },
        {
          path:'Settings',
          element:<Settings/>
        },
        {
          path:'profile',
          element:<Profile/> 
        }
      ]
    }
  ])
  return (
    <div>
        <RouterProvider router={Browserrouterobj}/>
    </div>
  )
}

export default Entry;