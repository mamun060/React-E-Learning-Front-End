/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/Card/CategoryCard.module.css';

const CategoryCard = ({icon, title, cat_link }) => {
    return (
        <>
            <div className={styles.CardCetegoryWrap}>
                <div className={styles.CategorySliderIcon}>
                    <img src="#" alt="" />
                </div>
                <div className={styles.CategorySliderTitle}>
                    <h2><a href="#">Apple</a></h2>
                </div>
            </div>
        </>
    );
};

export default CategoryCard;