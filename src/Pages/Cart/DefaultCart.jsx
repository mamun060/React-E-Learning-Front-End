import React from 'react';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import Footer from '../../Partials/Footer/Footer';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import DefaultCartBody from './DefaultCartBody';

const DefaultCart = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>

            <OtherHeroSection
            firstTitle ='Your'
            secondTitle = 'Cart'
            BackPageName = 'Home'
            CurrentPageName = 'Cart'
            />

            <DefaultCartBody />

            <Footer />
        </>
    );
};

export default DefaultCart;