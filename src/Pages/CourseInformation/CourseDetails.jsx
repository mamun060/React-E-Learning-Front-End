import React, { useEffect, useState } from 'react';
import Footer from '../../Partials/Footer/Footer';
import Header from './../../Partials/Header/Header';
import MobileHeader from './../../Partials/Header/MobileHeader';
import OtherHeroSection from './../../Partials/OtherPageHero/OtherHeroSection';
import CourseDetailsBody from './CourseDetailsBody';

const CourseDetails = () => {

    const [isScriptLoad, setIsScriptLoad] = useState(true);

    useEffect(() => {
        // loadScript(`${__dirname}yt-plyrio.js`);        
        // loadScript('https://cdn.plyr.io/3.6.3/demo.js');        
    },[]);


    function loadScript(src) {
        let 
        playerScriptElem        = document.getElementById("playerScript");
        playerScriptElem.src    = src;
        // videoScript.src     = `${__dirname}yt-plyrio.js`;
        playerScriptElem.onload = () => {
            setIsScriptLoad(true)
        }
    }
    
    const detailsLayout = isScriptLoad ? (
        <>
            <div className="Desktop">
                <Header />
            </div>
            <div className="Mobile">
                <MobileHeader />
            </div>

            <OtherHeroSection
                firstTitle="Course"
                secondTitle="Details"
                BackPageName="HOME"
                CurrentPageName="Course Info"
            />

            <CourseDetailsBody />
            <Footer />
        </>
    ) : (
        null
    )

    return (
        detailsLayout
    );
};

export default CourseDetails;