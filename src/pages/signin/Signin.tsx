// import React from 'react'

import { useNavigate } from "react-router-dom"
import { loginUser } from "../../utils/api"
import { toast } from "react-toastify"
import { useState } from "react"
import { useDispatch } from "react-redux"
import { login } from "../../global/reduxSlice"


const Signin = () => {

    const navigate = useNavigate ()

    const dispatch = useDispatch ()
    
    const [email, setEmail] = useState("")

    const [password, setPassword] = useState("")

    const [loading, setLoading] = useState(false)

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        
        try{
            setLoading(true)

            const data = await loginUser( email, password);

            dispatch(
                login({
                    user: data.user,
                    accessToken: data.accessToken,
                })
            )

            console.log("Dispatching data:", {
                user: data.user,
                accessToken: data.acessToken
            })
            toast.success ("Sign in successful")

            console.log("data", data)

            navigate("/home")
        }
        catch (error: any) {
            console.error(error)
            toast.error("Login Failed")
        }
        finally {
            setLoading (false)
        }
    }
    

  return (
    <div className="w-full min-h-screen flex justify-center items-center bg-black text-white">
        <form onSubmit={handleSubmit} className="w-[80%] md:w-[50%] lg:w-[40%] min-h-100 rounded-[15px] border-2 border-gray-500 md:p-10 p-5 text-white">
            <h1 className="text-white md:text-[30px] text-[20px] flex justify-center font-medium">
                Sign in to your account
            </h1>
            <h1 className="text-white md:text-[20px] text-[16px] mt-5">
                Email:
            </h1>
            <div>
                 <input 
                 type="text" 
                 placeholder="you@mail.com" 
                 value={email}
                 onChange={(e) =>
                        setEmail(e.target.value)      
                 }  
                 required
                 className="outline-none w-full h-11 rounded-[7px] border border-gray-500 pl-3 mt-2" />
            </div>

             <h1 className="text-white  md:text-[20px] text-[16px] mt-4">
                Password:
            </h1>
            <div>
                 <input 
                 type="password" 
                 placeholder="password" 
                 value={password}
                 onChange={(e) =>
                        setPassword(e.target.value)      
                 }  
                 required
                 className="outline-none w-full h-11 rounded-[7px] border border-gray-500 pl-3 mt-2" />
            </div>
            <h1 className="flex justify-end mt-3">
                Forget Password?
            </h1>
          
                 <div className="flex justify-center">
                <button 
                type="submit"
                className="w-full h-10 rounded-[7px] text-[18px] font-medium mt-8 bg-orange-600 hover:bg-orange-500 "
                disabled={loading}
                >
               {
                loading ? "Logging in" : "Login"
               }
            </button>

            </div>

           
           

            
           

        </form>
        
    </div>
  )
}

export default Signin