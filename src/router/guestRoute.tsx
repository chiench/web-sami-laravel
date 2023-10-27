import type { FC } from 'react'
import type { RouteProps } from "react-router";
import { Navigate } from "react-router-dom";
import NotFound from '@/pages/NotFound';
import Login from '@/pages/auth/Login';


const GuestRoute: FC<RouteProps> = (props) => {
    const logged: boolean = false
    if (!logged) return props.element
    return <Navigate to="/giao-vien" />;
}


export default GuestRoute