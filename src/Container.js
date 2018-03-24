import React from 'react';
import SideBar from './common/SideBar';
import TopNavigation from './common/TopNavigation';
import Dashboard from './dashboard/Dashboard';
import Footer from './common/Footer';

const Container = (props) => {
    return (
        <div className="container body">
            <div className="main_container">          
                <SideBar/>
                <TopNavigation/>
                <Dashboard/>
                <Footer/>
            </div>
        </div>
    );
}

export default Container;