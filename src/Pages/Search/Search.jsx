import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import MobileHeader from '../../Partials/Header/MobileHeader';
import SearchBreadcrub from './SearchBreadcrub';
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

            <SearchBreadcrub />
            
            <SearchListing />

            <Footer />
        </>
    );
};

export default Search;