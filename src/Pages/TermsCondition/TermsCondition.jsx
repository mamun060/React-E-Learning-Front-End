import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import TermsConditionBody from './TermsConditionBody';

const TermsCondition = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <OtherHeroSection
                firstTitle="Terms and"
                secondTitle="Condition"
                BackPageName="Home"
                CurrentPageName="Terms and Condition"
            />

            <TermsConditionBody />

            <Footer />
        </>
    );
};

export default TermsCondition;