import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../admin/sidebar';

const MainLayout = () => {
    return (
        <div className=' md:grid grid-cols-5 w-screen h-full '>
            <Sidebar />
            <div className="main-content">
                <Outlet />
            </div>
        </div>
    );
};

export default MainLayout;