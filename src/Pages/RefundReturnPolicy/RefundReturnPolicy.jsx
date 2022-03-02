import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import RefundReturnPolicyBody from './RefundReturnPolicyBody';

const RefundReturnPolicy = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <OtherHeroSection
                firstTitle="Refund Return"
                secondTitle="Policy"
                BackPageName="Home"
                CurrentPageName="Refund Return Policy"
            />

            <RefundReturnPolicyBody />

            <Footer />
        </>
    );
};

export default RefundReturnPolicy;