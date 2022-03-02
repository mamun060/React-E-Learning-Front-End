import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import PrivacyPolicyBody from './PrivacyPolicyBody';

const PrivacyPolicy = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <OtherHeroSection
                firstTitle="Privacy"
                secondTitle="Policy"
                BackPageName="Home"
                CurrentPageName="Privacy Policy"
            />

            <PrivacyPolicyBody />

            <Footer />
        </>
    );
};

export default PrivacyPolicy;