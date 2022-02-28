/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Button/Button.module.css';

const TopInstructorHeadingBtn = () => {
    return (
        <div>
            <div className={styles.TopInstructorHeading}>
               <Link to='#'>Top <span>Instructor</span></Link>
            </div> 
        </div>
    );
};

export default TopInstructorHeadingBtn;