import React from 'react';
import { Tab, Tabs } from 'react-bootstrap';
import styles from '../../Assets/css/CourseDetails/CourseInformation.module.css';
import AboutInstructor from './AboutInstructor';
import AboutCourseInformation from './AboutCourseInformation';
import CourseReview from './CourseReview';


const CourseInformation = () => {
    return ( 
        <>
            <div className={styles.CourseInformationSectionWrap}>
                <Tabs
                defaultActiveKey="Instructor"
                transition={false}
                id="noanim-tab-example"
                >
                    <Tab eventKey="Instructor" title="About Instructor">
                        <AboutInstructor />
                    </Tab>
                    <Tab eventKey="Course_information" title="Course Information">
                        <AboutCourseInformation />
                    </Tab>
                    <Tab eventKey="Course_review" title="Course Review">
                        <div className={styles.CourseReviewSection}>
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                            <CourseReview />
                        </div>
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default CourseInformation;