/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/Partials/OtherHero.module.css';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Container } from 'react-bootstrap';


const OtherHeroSection = () => {
    return (
        <>
           <Container fluid={true}>
                <div className={styles.OtherHeroSectionWrap}>
                    <div className={styles.OtherHeroBgWrap}>
                            <div className={styles.PageTitle}>
                                <h2><span>All</span> Course</h2>
                            </div>
                            <div className={styles.PageBreadCrubs}>
                                <p><a href="#">Home</a> <MdKeyboardArrowRight />Course</p>
                            </div>
                    </div>
                </div>  
            </Container> 
        </>
    );
};

export default OtherHeroSection;