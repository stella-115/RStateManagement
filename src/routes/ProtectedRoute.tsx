import { useSelector } from "react-redux"
import type { RootState } from "../global/store"
import { Navigate } from "react-router-dom"

interface protectedProps {
    children: React.ReactNode
}

const ProtectedRoute = ({children} : protectedProps) => {
    const accessToken = useSelector ((state: RootState) => state.auth.accessToken)

    console.log("access", accessToken)

    if (!accessToken) {
        return <Navigate to="/" replace />
    }

    return <>{children}</>
}

export default ProtectedRoute