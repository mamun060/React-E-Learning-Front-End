import React from 'react';
import Header from './../../Partials/Header/Header';
import MobileHeader from './../../Partials/Header/MobileHeader';
import Footer from './../../Partials/Footer/Footer';
import StudentSuccessBody from './StudentSuccessBody';
import OtherHeroSection from './../../Partials/OtherPageHero/OtherHeroSection';

const SuccessReview = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>

            <OtherHeroSection
               firstTitle="Success"
               secondTitle="History"
               BackPageName="HOME"
               CurrentPageName="Student Success"
            />

            <StudentSuccessBody />

            <Footer />
        </>
    );
};

export default SuccessReview;