import { useContext } from "react"
import { Navigate } from "react-router-dom"
import { DataContext } from "../context/DataContext"


const PublicRoute = ({ children }) => {

    const { user } = useContext(DataContext)

    return user.login
        ? <Navigate to="/movements" />
        : children
}

export default PublicRoute