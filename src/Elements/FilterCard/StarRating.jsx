import React from 'react';
import { VscStarFull } from 'react-icons/vsc';
import { IoIosArrowDown } from 'react-icons/io';
import styles from '../../Assets/css/FilterCard/StarRating.module.css';

const StarRating = () => {
    return (
        <>
            <div className={styles.LeftMainFilterSection}>
                <div className={styles.FitlerHeadingWrap}>
                    <p>Rating</p>
                    <p>
                        <IoIosArrowDown />
                    </p>
                </div>
                <div className={styles.FilterUlListing}>
                    <ul>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input type="radio" name="rating" value="5" />
                            </div>
                            <div className={styles.RatingStarPosition}>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Five Star</p>
                                </div>
                                <div>
                                    -
                                </div>
                                <div className={styles.RatingStarStyle}>
                                    <div className={styles.CustomRatingStyle}>
                                        <VscStarFull />
                                        <VscStarFull />
                                        <VscStarFull />
                                        <VscStarFull />
                                        <VscStarFull />
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input type="radio" name="rating" value="4" />
                            </div>
                            <div className={styles.RatingStarPosition}>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Four Star</p>
                                </div>
                                <div>
                                    -
                                </div>
                                <div className={styles.RatingStarStyle}>
                                <div className={styles.CustomRatingStyle}>
                                        <VscStarFull />
                                        <VscStarFull />
                                        <VscStarFull />
                                        <VscStarFull />
                                        <span>
                                            <VscStarFull />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input type="radio" name="rating" value="3" />
                            </div>
                            <div className={styles.RatingStarPosition}>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Three Star</p>
                                </div>
                                <div>
                                    -
                                </div>
                                <div className={styles.RatingStarStyle}>
                                <div className={styles.CustomRatingStyle}>
                                        <VscStarFull />
                                        <VscStarFull />
                                        <VscStarFull />
                                        <span>
                                            <VscStarFull />
                                            <VscStarFull />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input type="radio" name="rating" value="2" />
                            </div>
                            <div className={styles.RatingStarPosition}>
                                <div className={styles.RatingTitleStyle}>
                                    <p>Two Star</p>
                                </div>
                                <div>
                                    -
                                </div>
                                <div className={styles.RatingStarStyle}>
                                <div className={styles.CustomRatingStyle}>
                                        <VscStarFull />
                                        <VscStarFull />
                                        <span>
                                            <VscStarFull />
                                            <VscStarFull />
                                            <VscStarFull />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className={styles.CourseFilterRatingLI}>
                            <div className={styles.RatingInputStyle}>
                                <input type="radio" name="rating" value="1" />
                            </div>
                            <div className={styles.RatingStarPosition}>
                                <div className={styles.RatingTitleStyle}>
                                    <p>One Star</p>
                                </div>
                                <div>
                                    -
                                </div>
                                <div className={styles.RatingStarStyle}>
                                <div className={styles.CustomRatingStyle}>
                                        <VscStarFull />
                                        <span>
                                            <VscStarFull />
                                            <VscStarFull />
                                            <VscStarFull />
                                            <VscStarFull />
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    );
};

export default StarRating;