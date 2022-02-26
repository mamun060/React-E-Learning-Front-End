import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../../Partials/Footer/Footer';
import Header from './../../Partials/Header/Header';
import MobileHeader from './../../Partials/Header/MobileHeader';
import OtherHeroSection from './../../Partials/OtherPageHero/OtherHeroSection';
import CourseDetailsBody from './CourseDetailsBody';

const CourseDetails = () => {

    const param = useParams();

    const removefirstCart = () => {
        return localStorage.removeItem('isFirstCart');
    }


    useEffect(() => {
        removefirstCart()
        console.log(param.id);      
    },[]);


    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>

            <OtherHeroSection
                firstTitle="Course"
                secondTitle="Details"
                BackPageName="HOME"
                CurrentPageName="Course Info"
            />

            <CourseDetailsBody />
            <Footer />
        </>
    );
};

export default CourseDetails;