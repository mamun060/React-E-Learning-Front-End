import React from 'react';

import Footer from '../../Partials/Footer/Footer';
import Header from './../../Partials/Header/Header';
import MobileHeader from './../../Partials/Header/MobileHeader';
import OtherHeroSection from './../../Partials/OtherPageHero/OtherHeroSection';
import CourseDetailsBody from './CourseDetailsBody';

const CourseDetails = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>

            <OtherHeroSection 
                firstTitle="VEDIO"
                secondTitle="SECTION"
                BackPageName="HOME"
                CurrentPageName="VIDEO"
            />

            <CourseDetailsBody />
            

            <Footer />
        </>
    );
};

export default CourseDetails;