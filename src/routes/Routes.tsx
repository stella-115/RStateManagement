import { createBrowserRouter } from "react-router-dom";
import SigninLayout from "../layout/SigninLayout";
import Signin from "../pages/signin/Signin";
import HomeLayout from "../layout/HomeLayout";
import Hero from "../pages/home/Hero";
import ProtectedRoute from "./ProtectedRoute";


export const element = createBrowserRouter (
    [
        {
            path: "/",
            element: <SigninLayout/>,
            children:[{
                index: true,
                element: <Signin/>
            }]
        },
         {
            path: "/home",
            // element: <HomeLayout/>,
            element:(
                <ProtectedRoute>
                    <HomeLayout/>
                    </ProtectedRoute>
                    
            ),
            children:[{
                index: true,
                element: <Hero/>
            }]
        },
    ]
)