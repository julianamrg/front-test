import { useContext, useEffect } from "react"
import { Navigate, useLocation } from "react-router-dom";
import { DataContext } from "../context/DataContext";


const PrivateRoute = ({ children }) => {

    const { user, setPathName } = useContext(DataContext);

    const { pathname:route } = useLocation();

    useEffect(() => {
        setPathName(route);
    }, [route, setPathName])
    

    return user.login 
        ? children
        : <Navigate to="/" />
}

export default PrivateRoute