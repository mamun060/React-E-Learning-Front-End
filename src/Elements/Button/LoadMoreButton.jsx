/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/Button/Button.module.css';
import {MdOutlineDoubleArrow} from 'react-icons/md'
import { Link } from 'react-router-dom';

const LoadMoreButton = ({btn_name, btn_link}) => {
    return (
        <>
            <div className={styles.LoadMoreButtonWrap}>
               <Link to={btn_link}>{btn_name}<MdOutlineDoubleArrow /></Link>
            </div> 
        </>
    );
};

export default LoadMoreButton;