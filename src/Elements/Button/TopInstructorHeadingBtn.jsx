/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/Partials/Button.module.css';

const TopInstructorHeadingBtn = () => {
    return (
        <div>
            <div className={styles.TopInstructorHeading}>
               <a href='#'>Top <span>Instructor</span></a>
            </div> 
        </div>
    );
};

export default TopInstructorHeadingBtn;