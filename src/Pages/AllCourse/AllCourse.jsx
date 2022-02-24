import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import MobileHeader from './../../Partials/Header/MobileHeader';
import CourseListSection from './CourseListSection';

 
const AllCourse = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <OtherHeroSection 
               firstTitle="ALL"
               secondTitle="COURSE"
               BackPageName="HOME"
               CurrentPageName="ALL COURSE"
            />
            
            <CourseListSection />

            <Footer />

        </>
    );
};

export default AllCourse;