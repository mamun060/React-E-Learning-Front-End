import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import CategorySlider from './CategorySlider';
import HeroSection from './HeroSection';
import MobileHeader from './../../Partials/Header/MobileHeader';
import '../../Assets/css/Partials/Responsive.css';

const Home = () => {
  return (
      <>
      <div className="Desktop">
         <Header />
      </div>
      <div className="Mobile">
        <MobileHeader />
      </div>
      
        <HeroSection />
        <CategorySlider />


        <Footer />
      </>
  );
};

export default Home;
