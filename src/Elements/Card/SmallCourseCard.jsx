/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/Card/SmallCourseCard.module.css';
import BigThumnail from '../../Assets/images/Course-Card/SmallCourseThumnail.jpg';
import { BsHeartFill, BsShareFill, BsCart3} from 'react-icons/bs';

const SmallCourseCard = () => {
    return (
        <>
               <div className={styles.SmallCourseCardContainer}>

                    <div className={styles.SmallCardThumnail}>
                        <img src={BigThumnail} alt="Amar Skill" />
                    </div>

                    <div className={styles.CourseCardInfoWrap}>

                        <div className={styles.CourseTecherInfo}>
                            <div className={styles.InstractorName}>
                                <h2>Maruf Hossain</h2>
                            </div>
                            <div className={styles.InstructorSocailIcon}>
                                <a href='#'><BsHeartFill /></a>
                                <a href='#'><BsCart3 /></a>
                                <a href='#'><BsShareFill /></a>
                            </div>
                        </div>

                        <div className={styles.SmallCardCouseTitle}>
                            <h4>React Master course Zero to Hero</h4>
                        </div>

                        <div className={styles.SmallCardBottomWrap}>
                            <div className={styles.PriceStyle}>
                                <p>Tk.2000.00</p>
                            </div>
                            <div className={styles.BuyNowButtonWrap}>
                                <a>Buy Now</a>
                            </div>
                        </div>
                    </div>


</div>
        </>
    );
};

export default SmallCourseCard;