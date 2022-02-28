import React from 'react';
import styles from '../../Assets/css/Button/Button.module.css';
import {MdKeyboardArrowDown} from 'react-icons/md'
import { Link } from 'react-router-dom';


const SeeMoreBtn = ({btn_link, btn_name}) => {
    return (
        <>
            <div className={styles.SeeMoreButtonWrap}>
               <Link to={btn_link}>{btn_name}<MdKeyboardArrowDown /></Link>
            </div> 
        </>
    );
};

export default SeeMoreBtn;