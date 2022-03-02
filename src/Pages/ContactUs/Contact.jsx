import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from './../../Partials/Header/MobileHeader';
import OtherHeroSection from './../../Partials/OtherPageHero/OtherHeroSection';
import ContactBody from './ContactBody';

const Contact = () => {
    return (
        <>
           <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <OtherHeroSection
                firstTitle="Contact"
                secondTitle="Us"
                BackPageName="Home"
                CurrentPageName="Contact"
            />

            <ContactBody />
            <Footer />
        </>
    );
};

export default Contact;