import React , { useEffect, useState} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoPlayerSection from './../../Elements/CourseDetailsElements/VideoPlayerSection';
import CourseContent from './../../Elements/CourseDetailsElements/CourseContent';
import styles from '../../Assets/css/CourseDetails/CourseDetailsPage.module.css';
import CourseInformation from '../../Elements/CourseDetailsElements/CourseInformation';
import CourseOverview from '../../Elements/CourseDetailsElements/CourseOverview';
import RecommendCourseSlider from './RecommendCourseSlider';


const CourseDetailsBody = () => {

    return (
        <>
            <Container id="vcon">
                <Row>
                    <Col md={8}>
                        <VideoPlayerSection />
                    </Col>
                    <Col md={4}>
                        <CourseContent />
                    </Col>
                </Row>

                <div className={styles.CourseInformationSection}>
                    <Row>
                        <Col md={8}>
                            <CourseInformation />
                        </Col>
                        <Col md={4}>
                            <CourseOverview />
                        </Col>
                    </Row>
                </div>
                
                <div className={styles.StudentLikeBottomSection}>
                    <Row className='px-3'>
                        <div className={styles.BottomSectionHeadingWrap}>
                            <h2>Student Also <span>Like These Courses</span></h2>
                            <p>There are some Recommended Courses That Also Help You to Improve Your Skill</p>
                        </div>
                    </Row>

                   <div className={styles.BottomSectionBG}>
                        <Row>
                            <Col md={12}>
                                <RecommendCourseSlider />
                            </Col>
                        </Row>
                   </div>

                </div>

            </Container>
        </>
    );
};

export default CourseDetailsBody;