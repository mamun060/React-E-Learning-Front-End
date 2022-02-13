/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import styles from '../../Assets/css/Card/CategoryCard.module.css';

const CategoryCard = ({ icon, title, cat_link, active }) => {

    let activeClass = null;
    if (/active/im.test(active)){
        activeClass = styles['active'] ?? '';
    }

    return (
        <>
            <div className={`${styles.CardCetegoryWrap} ${activeClass}`}>
                <div className={styles.CategorySliderIcon}>
                    <img src={icon} alt="" />
                </div>
                <div className={styles.CategorySliderTitle}>
                    <h2><a href={cat_link}>{title}</a></h2>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;