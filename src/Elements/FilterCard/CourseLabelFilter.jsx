import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../../Assets/css/FilterCard/CourseLabelFilter.module.css';

const CourseLabelFilter = () => {
    return (
        <>
              <div className={styles.LeftMainFilterSection}>
                <div className={styles.FitlerHeadingWrap}>
                    <p>Level</p>
                    <p>
                        <IoIosArrowDown />
                    </p>
                </div>
                <div className={styles.FilterUlListing}>
                    <ul>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='level1' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Beginner</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='level2' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='level3' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Expert</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='all' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>All Level</p>
                                </div>
                            </div>
                        </li>
                  
                    </ul>
                </div>
            </div>
        </>
    );
};

export default CourseLabelFilter;