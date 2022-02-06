import React from 'react';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../../Assets/css/FilterCard/CourseLabelFilter.module.css';

const CourseLabelFilter = () => {
    return (
        <>
              <div className={styles.LeftMainFilterSection}>
                <div className={styles.FitlerHeadingWrap}>
                    <p>Label</p>
                    <p>
                        <IoIosArrowDown />
                    </p>
                </div>
                <div className={styles.FilterUlListing}>
                    <ul>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Beginner</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Intermediate</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Expert</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>All Labels</p>
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