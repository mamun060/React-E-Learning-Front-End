import React from 'react';
import styles from '../../Assets/css/CourseDetails/CourseReview.module.css';
import user from '../../Assets/images/ReviewUser/user_img.png';
import {BiLike, BiDislike} from 'react-icons/bi';

const CourseReview = () => {
    return (
        <>
            <div className={styles.CourseReviewWrap}>

                <div className={styles.CourseReviseInfoWrap}>
                    <div className={styles.ReviewerImage}>
                        <img src={user} alt="Amar Skills" />
                    </div>
                    <div className={styles.ReviewerTitle}>
                        <h2>Md. Alauddin</h2>
                        <h4>Lead Developer</h4>
                    </div>
                </div>

                <div className={styles.CourseReviewContent}>
                    <p>
                        আমার মতে, কোর্সের বেস্ট পার্ট হচ্ছে এর প্রজেক্টগুলো আর মেন্টরদের বোঝানোর স্টাইল। 
                        কোর্স থেকে শিখে কিভাবে কাজ করতে হয় আর সাথে কুইজগুলো খুব হেল্পফুল লেগেছে
                    </p>
                </div>

                <div className={styles.CourseReviewVote}>
                    <p>রিভিউটি আপনার কাছে কেমন লেগেছে? <BiLike color='#66BE00' fontSize={24} /><BiDislike color='#F95353' fontSize={24}/></p>
                </div>
            </div>
        </>
    );
};

export default CourseReview;