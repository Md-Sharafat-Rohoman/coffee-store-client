import React from 'react';
import { Outlet } from 'react-router';
import Header from '../components/Header';

const MainLayout = () => {
    return (
        <div className=' text-center max-w-10/12 mx-auto'>
            <header>
                <Header></Header>
            </header>
            <main className='max-w-7xl mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default MainLayout;