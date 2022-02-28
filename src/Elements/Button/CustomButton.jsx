/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Button/Button.module.css';

const CustomButton = ({name, link}) => {
    return (
        <>
           <div className={styles.ButtonWrap}>
               <Link to={link}>{name}</Link>
            </div> 
        </>
    );
};

export default CustomButton;