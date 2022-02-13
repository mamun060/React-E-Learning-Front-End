/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/CourseDetails/AboutCourseInformation.module.css';
import {MdKeyboardArrowDown} from 'react-icons/md'

const AboutCourseInformation = () => {
    return (
        <>
            <div className={styles.AboutCourseInformationWrap}>

                <div className={styles.CourseInfoContents}>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        <br />
                        but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        <br />
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries
                        <br />
                        Lorem Ipsum has been the industry's standard dummy text ever since the, when an unknown printer took a galley of type and scrambled it to make a type.
                    </p>
                </div>

                <div className={styles.CourseContentSeeMore}>
                    <a href="#">See More <MdKeyboardArrowDown/> </a>
                </div>

            </div>
        </>
    );
};

export default AboutCourseInformation;