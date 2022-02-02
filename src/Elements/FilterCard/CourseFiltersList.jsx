import React from 'react';
import styles from '../../Assets/css/FilterCard/CourseFilters.module.css';
import ReactStars from "react-rating-stars-component";
import {IoIosArrowDown} from 'react-icons/io';
import { Form } from 'react-bootstrap';


const CourseFiltersList = () => {
    const ratingChanged = (newRating)=>{
        console.log(newRating)
    }
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
                            <ReactStars count={5} onChange={ratingChanged} size={22} activeColor="#ffd700" />
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
                            <ReactStars count={5} onChange={ratingChanged} size={22} activeColor="#ffd700" />
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
                            <ReactStars count={5} onChange={ratingChanged} size={22} activeColor="#ffd700" />
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
                            <ReactStars count={5} onChange={ratingChanged} size={22} activeColor="#ffd700" />
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
                            <ReactStars count={5} onChange={ratingChanged} size={22} activeColor="#ffd700" />
                        </div>
                    </div>
                </li>
            </ul>
        </div>
    </div>

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
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>Jhon Due</p>
                        </div>
                    </div>
                </li>
                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>Jhon Due</p>
                        </div>
                    </div>
                </li>
                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>Jhon Due</p>
                        </div>
                    </div>
                </li>
                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>Jhon Due</p>
                        </div>
                    </div>
                </li>
                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
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

    <div className={styles.LeftMainFilterSection}>
        <div className={styles.FitlerHeadingWrap}>
            <p>Price</p>
            <p>
                <IoIosArrowDown />
            </p>
        </div>
        <div className={styles.FilterUlListing}>
            <Form.Label>500Tk</Form.Label>
            <Form.Range />
        </div>
    </div>

    <div className={styles.LeftMainFilterSection}>
        <div className={styles.FitlerHeadingWrap}>
            <p>Lavel</p>
            <p>
                <IoIosArrowDown />
            </p>
        </div>
        <div className={styles.FilterUlListing}>
            <ul>


                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>Beginner</p>
                        </div>
                    </div>
                </li>

                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>Intermediate</p>
                        </div>
                    </div>
                </li>

                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>Expert</p>
                        </div>
                    </div>
                </li>

                <li className={styles.CourseFilterRatingLI}>
                    <div className={styles.RatingInputStyle}>
                        <input type="checkbox" value="1" />
                    </div>
                    <div>
                        <div className={styles.RatingTitleStyle}>
                            <p>All Lavels</p>
                        </div>
                    </div>
                </li>

            </ul>
        </div>
    </div>
</>
);
};

export default CourseFiltersList;