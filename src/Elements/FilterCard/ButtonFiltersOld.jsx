/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/FilterCard/ButtonFilter.module.css';
import {IoIosArrowDown} from 'react-icons/io';
import {BsFilterLeft} from 'react-icons/bs';

const ButtonFilters = () => {
    return (
        <>
            <div className={styles.FiterButtonWrap}>
                <div className={styles.FilterButtonLeft}>
                    <a href="#"><BsFilterLeft />Filter</a>
                </div>
                <div className={styles.FilterButtonRight}>
                    <a href="#">Sort By.... <IoIosArrowDown /></a>
                </div>
            </div>
        </>
    );
};

export default ButtonFilters;