import React, { Suspense } from 'react'
import { Outlet } from "react-router-dom";
import { ConfigProvider, theme } from "antd";

import './scss/DefaultLayout.scss'
import Login from '@/pages/auth/Login'
import Header from './Header';
import Loading from '@/pages/Loading';
import Footer from './Footer';

const THEME_CONFIG = {
    token: {
        colorBgContainer: "#F4F5F8",
    },
    components: {
        Menu: {
            activeBarBorderWidth: 0,
            itemSelectedColor: "#fff",
            horizontalItemSelectedBg: "#033681",
            horizontalItemHoverBg: "#033681",
            horizontalItemHoverColor: "#fff",
        },
    },
};
const LAYOUT_CONFIG = {
    token: {
        colorBgContainer: "#F4F5F8",
    },
    components: {
        Menu: {
            activeBarBorderWidth: 0,
            itemSelectedColor: "#1677FF",
            horizontalItemSelectedBg: "transparent",
            horizontalItemHoverBg: "transparent",
            horizontalItemHoverColor: "#1677FF",
        },
    },
};
const DefaultLayout = () => {
    return (
        <ConfigProvider theme={THEME_CONFIG}>
            <div className="wrapper">
                <div className="header">
                    <Header />
                </div>
                <ConfigProvider theme={LAYOUT_CONFIG}>
                    <div className="relative">
                        <div className="menu_nav">
                            <div className="flex bg-[#cf1627] justify-between items-center px-[15px] h-full">

                                {/* <Navigation
                    mode="horizontal"
                    styles={{ background: "#cf1627" }}
                  />
                  <UserAction /> */}
                                {/* Here code for nav and action relatived user ex logout, change password*/}
                            </div>
                        </div>
                        <div
                            className={`main_content`}
                        >
                            <div
                                className="h-full"
                                style={{
                                    background: '#ffffff',
                                    padding: 16,
                                }}
                            >
                                <Suspense fallback={<Loading></Loading>}>
                                    <Outlet />
                                </Suspense>
                            </div>
                            <Footer />
                        </div>
                    </div>
                </ConfigProvider>
            </div>
        </ConfigProvider>

    )
}

export default DefaultLayout