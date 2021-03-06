import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import AboutBody from './AboutBody';

const About = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <OtherHeroSection
                firstTitle="About"
                secondTitle="Us"
                BackPageName="Home"
                CurrentPageName="About"
            />

            <AboutBody />

            <Footer />
        </>
    );
};

export default About;
