// import React from 'react'

import { useSelector } from "react-redux"
import type { RootState } from "../../global/store"

const Hero = () => {

const user = useSelector((state: RootState) => state.auth.user)

console.log("redux-gotten-user", user)

  return (
    <div className="text-[15px] p-5">

    
      Welcome <b> {user.email.toUpperCase()}</b>
      </div>
  )
}

export default Hero