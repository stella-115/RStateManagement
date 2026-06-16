// import React from 'react'

import { Outlet } from "react-router-dom"
import { Header } from "../component/block"
import Sidebar from "../component/static/Sidebar"

const HomeLayout = () => {
  return (
    <div className="w-full">
      <div>
           <Header/>
      </div>

      <div className="flex gap-5">
        <div className="hidden lg:block">
          <Sidebar/>

        </div>

        <div>
             <Outlet/>
        </div>
      </div>
       

       

    </div>
  )
}

export default HomeLayout