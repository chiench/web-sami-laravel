import type { RouteProps } from "react-router";
import type { FC, ReactElement } from "react";
import GuestRoute from "./guestRoute";
import DefaultLayout from "@/layout/MainLayout/DefaultLayout";
import PrivateRoute from "./privateRoute";




export type WrapperRouteProps = RouteProps & {
    guest?: boolean,
    auth?: boolean,
    element: ReactElement,
}

const WrapperRouteCompent: FC<WrapperRouteProps> = ({
    guest,
    auth,
    element,
    ...props
}) => {
    console.log('props: ', props, auth, guest);
    if (guest) return <GuestRoute {...props} element={<DefaultLayout />} />
    if (auth) return <PrivateRoute {...props} logged element={<DefaultLayout />} />
    return element as ReactElement
}

export default WrapperRouteCompent