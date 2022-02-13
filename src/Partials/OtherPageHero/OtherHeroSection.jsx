/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/Partials/OtherHero.module.css';
import {MdKeyboardArrowRight} from 'react-icons/md';
import { Container } from 'react-bootstrap';


const OtherHeroSection = ({firstTitle, secondTitle, BackPageName, CurrentPageName}) => {
    return (
        <>
           <Container fluid={true}>
                <div className={styles.OtherHeroSectionWrap}>
                    <div className={styles.OtherHeroBgWrap}>
                            <div className={styles.PageTitle}>
                                <h2><span>{firstTitle}</span> {secondTitle}</h2>
                            </div>
                            <div className={styles.PageBreadCrubs}>
                                <p><a href="#">{BackPageName}</a> <MdKeyboardArrowRight />{CurrentPageName}</p>
                            </div>
                    </div>
                </div>  
            </Container> 
        </>
    );
};

export default OtherHeroSection;