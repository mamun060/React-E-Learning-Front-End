import React, { useEffect } from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from './../../Partials/Header/Header';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import MobileHeader from './../../Partials/Header/MobileHeader';
import TabBodySection from './TabBodySection';


const Dashboard = () => {

    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>

            <OtherHeroSection
                firstTitle="Student"
                secondTitle="Dashboard"
                BackPageName="Home"
                CurrentPageName="Dashboard"
            />

            <TabBodySection />


            <Footer />
        </>
    );
};

export default Dashboard;
