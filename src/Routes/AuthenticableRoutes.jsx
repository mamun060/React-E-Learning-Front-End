import React from 'react'
import { useSelector } from 'react-redux';
import { Navigate, Outlet, useNavigate, useLocation } from 'react-router-dom';
import { getAuthUser } from '../Redux/AuthSlice';

const useAuth = ()=>{
    const authUser  = useSelector(getAuthUser);
    const user      = authUser?.user ?? null;
    return { auth: (user && user.loggedIn), user};
}

const checkPermission   = ({ authUser, allowedRoles }) => Object.values(allowedRoles).includes(authUser?.user?.role);
const PrivateRoute      = ({ allowedRoles }) => {
    // const navigate      = useNavigate();
    const authUser      = useAuth();
    const permission    = checkPermission({ authUser, allowedRoles})
    
    return (
        authUser?.auth && permission ? <Outlet /> : <Navigate to={'/login'}/>
    )
}

const ProtectedRoute = () => {
    const authUser = useAuth();
    
    return (
        !authUser?.auth ? <Outlet /> : <Navigate to={'/student-dashboard'}/>
    )
}

export { PrivateRoute, ProtectedRoute, useAuth };