import React from 'react';
import Header from './../../Partials/Header/Header';
import MobileHeader from './../../Partials/Header/MobileHeader';
import OtherHeroSection from './../../Partials/OtherPageHero/OtherHeroSection';
import Footer from './../../Partials/Footer/Footer';
import CheckoutBody from './CheckoutBody';

const Checkout = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>

            <OtherHeroSection
            firstTitle ='Checkout'
            secondTitle = 'Page'
            BackPageName = 'Home'
            CurrentPageName = 'Checkout'
            />

            <CheckoutBody />
            <Footer />
        </>
    );
};

export default Checkout;