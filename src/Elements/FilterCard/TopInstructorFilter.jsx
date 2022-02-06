import React from 'react';
import styles from '../../Assets/css/FilterCard/TopInstructorFilter.module.css';
import { IoIosArrowDown } from 'react-icons/io';

const TopInstructorFilter = () => {
    return (
        <>
            <div className={styles.LeftMainFilterSection}>
                <div className={styles.FitlerHeadingWrap}>
                    <p>Instructor</p>
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
                                    <p>Jhon Due</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Jhon Due</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Jhon Due</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Jhon Due</p>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input name='topInstructor' type="radio" value="1" />
                            </div>
                            <div>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Jhon Due</p>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default TopInstructorFilter;