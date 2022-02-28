import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import OtherHeroSection from '../../Partials/OtherPageHero/OtherHeroSection';
import SearchListing from './SearchListing';

const Search = () => {
    return (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>
            <OtherHeroSection 
               firstTitle=""
               secondTitle="Search"
               BackPageName="HOME"
               CurrentPageName="Search Result"
            />
            
            <SearchListing />

            <Footer />
        </>
    );
};

export default Search;