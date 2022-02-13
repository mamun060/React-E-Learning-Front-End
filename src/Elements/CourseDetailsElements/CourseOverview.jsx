import React from 'react';
import styles from '../../Assets/css/CourseDetails/CourseOverview.module.css';
import { BsTranslate, BsCardList, BsReception4, BsHash} from 'react-icons/bs';
import { BiTimeFive } from 'react-icons/bi';
import { HiOutlineCurrencyBangladeshi } from 'react-icons/hi';

const CourseOverview = () => {
    return (
        <>
            <div className={styles.CourseOverviewContainer}>

                <div className={styles.CourseOverviewHeadingWrap}>
                    <h4>Couse Overview</h4>
                </div>

                <div className={styles.CourseOverviewSectionList}>

                    <div className={styles.OverviewListParent}>
                          <div className={styles.IconWithTitle}>
                            <h4><BsTranslate /> Language</h4>
                          </div>
                          <div className={styles.CourseOverDash}></div>
                          <div className={styles.ContentUnderTitle}>
                              <p>Bangla</p>
                          </div>
                    </div>

                    <div className={styles.OverviewListParent}>
                          <div className={styles.IconWithTitle}>
                            <h4><BsCardList /> Category</h4>
                          </div>
                          <div className={styles.CourseOverDash}></div>
                          <div className={styles.ContentUnderTitle}>
                              <p>Web Dev</p>
                          </div>
                    </div>

                    <div className={styles.OverviewListParent}>
                          <div className={styles.IconWithTitle}>
                            <h4><BsReception4 /> Label</h4>
                          </div>
                          <div className={styles.CourseOverDash}></div>
                          <div className={styles.ContentUnderTitle}>
                              <p>Advance</p>
                          </div>
                    </div>

                    <div className={styles.OverviewListParent}>
                          <div className={styles.IconWithTitle}>
                            <h4><BiTimeFive /> Duration</h4>
                          </div>
                          <div className={styles.CourseOverDash}></div>
                          <div className={styles.ContentUnderTitle}>
                              <p>1 week</p>
                          </div>
                    </div>

                    <div className={styles.OverviewListParent}>
                          <div className={styles.IconWithTitle}>
                            <h4><HiOutlineCurrencyBangladeshi /> Price</h4>
                          </div>
                          <div className={styles.CourseOverDash}></div>
                          <div className={styles.ContentUnderTitle}>
                              <p>2,000 Tk</p>
                          </div>
                    </div>

                    <div className={styles.OverviewListParentLastDiv}>
                          <div className={styles.IconWithTitle}>
                            <h4><BsHash /> Keyword</h4>
                          </div>
                          <div className={styles.CourseOverDash}></div>
                          <div className={styles.ContentUnderTitle}>
                              <p>JavaScript</p>
                          </div>
                    </div>


                </div>

            </div>
        </>
    );
};

export default CourseOverview;