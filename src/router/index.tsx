import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from '@/layout/MainLayout/DefaultLayout.tsx'
import NotFound from "@/pages/NotFound";
import Login from "@/pages/auth/Login";
import WrapperRouteCompent from "./config";
import GiaoVien from "@/pages/system/giaoVien/GiaoVien";
import GuestRoute from "./guestRoute";



const defineRouter = createBrowserRouter([
    {
        path: "/",
        element: <Navigate to="/login" />,
    },
    {
        path: '/',
        element: <WrapperRouteCompent guest element={<DefaultLayout />} />,
        children: [
            {
                path: 'login',
                element: <Login />
            },
        ]
    },
    {
        path: '/so-hoa',
        element: <WrapperRouteCompent auth element={<DefaultLayout />} />,
        children: [
            // {
            //     path: "",
            //     element: <GuestRoute />,
            //   },
            {
                path: "",
                element: <GiaoVien />
            },
        ]
    },

    {
        path: '*',
        element: <NotFound />

    }
])

export default defineRouter