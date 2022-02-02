import React from 'react';
import styles from '../../Assets/css/Button/Button.module.css';
import {MdKeyboardArrowDown} from 'react-icons/md'


const SeeMoreBtn = ({btn_link, btn_name}) => {
    return (
        <>
            <div className={styles.SeeMoreButtonWrap}>
               <a href={btn_link}>{btn_name}<MdKeyboardArrowDown /></a>
            </div> 
        </>
    );
};

export default SeeMoreBtn;