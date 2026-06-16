// import React from 'react'

import { Outlet } from "react-router-dom"
import { Footer,} from "../component/block"

const SigninLayout = () => {
  return (
    <div>
    
        <Outlet/>

        <Footer/>
    </div>
  )
}

export default SigninLayout