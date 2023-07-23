import React from 'react';
import NavBer from '../Shared/NavBer/NavBer';
import { Outlet } from 'react-router-dom';
import Footer from '../Shared/Footer/Footer';

const Main = () => {
    return (
        <div>
            <NavBer/>
            <Outlet/>
            <Footer/>
        </div>
    );
};

export default Main;