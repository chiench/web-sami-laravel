import type { FC } from 'react'
import type { RouteProps } from "react-router";
import { Navigate } from "react-router-dom";
import NotFound from '@/pages/NotFound';
import Login from '@/pages/auth/Login';

export type PrivateRouteProps = RouteProps & {
    logged: boolean,
    element: React.ReactNode
}
const PrivateRoute: FC<PrivateRouteProps> = (
    {
        logged,
        element
    }
) => {
    if (!logged) {
        return <Navigate to="/login" />;
    }
    return <Navigate to="/giao-vien" />;
}


export default PrivateRoute