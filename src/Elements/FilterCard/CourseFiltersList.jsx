import React, { useState } from 'react';
import styles from '../../Assets/css/FilterCard/CourseFilters.module.css';
import {IoIosArrowDown } from 'react-icons/io';
import MultiRangeSlider from "multi-range-slider-react";
import TopInstructorFilter from './TopInstructorFilter';
import StarRating from './StarRating';
import CourseLabelFilter from './CourseLabelFilter';

const CourseFiltersList = () => {
    const [minValue, set_minValue] = useState(1000);
    const [maxValue, set_maxValue] = useState(5000);
    const handleInput = (e) => {
        set_minValue(e.minValue);
        set_maxValue(e.maxValue);
    };
return (
<>
    <StarRating />
    <TopInstructorFilter />

    <div className={styles.LeftMainFilterSection}>
        <div className={styles.FitlerHeadingWrap}>
            <p>Price</p>
            <p>
                <IoIosArrowDown />
            </p>
        </div>
        <div className={styles.FilterUlListing}>
            <MultiRangeSlider
                min={1000}
                max={10000}
                step={5}
                ruler={false}
                label={true}
                preventWheel={false}
                minValue={minValue}
                maxValue={maxValue}
                onInput={(e) => {
                    handleInput(e);
                }}
            />
        </div>
    </div>

    <CourseLabelFilter />
</>
);
};

export default CourseFiltersList;