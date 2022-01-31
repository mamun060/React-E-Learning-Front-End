import React from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from '../../Partials/Header/Header';
import CategorySlider from './CategorySlider';
import HeroSection from './HeroSection';
import MobileHeader from './../../Partials/Header/MobileHeader';
import '../../Assets/css/Partials/Responsive.css';
import PopularCourseSlider from './PopularCourseSlider';
import TopInstructorSlider from './TopInstructorSlider';
import OurAchivementSection from './OurAchivementSection';
import CardSlider from '../../Elements/Slider/CardSlider';

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
        <PopularCourseSlider />
        <TopInstructorSlider />
        <OurAchivementSection />

        <Footer />
      </>
  );
};

export default Home;
