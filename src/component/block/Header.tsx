// import React from 'react'

import { useDispatch } from "react-redux"
import {useNavigate } from "react-router-dom"
import { logout } from "../../global/reduxSlice";
import { toast } from "react-toastify";

const Header = () => {

      const dispatch = useDispatch();
      const navigate = useNavigate();

      const handleLogout = () => {
        dispatch(logout())

        toast.success("Logout Successfull")
        navigate("/")
      }

  return (
    <div className="w-full h-20 shadow-2xl shadow-gray-300 flex justify-center">
      <div className="w-[90%] flex items-center justify-between">
        <button className="text-black w-22 h-11 rounded-[7px] bg-gray-400 font-medium">
          Home
        </button>
        

         <button className="text-black w-22 h-11 rounded-[7px] bg-gray-400 font-medium" onClick={handleLogout}>
          Login Out
        </button>     

      </div>

    </div>
  )
}

export default Header