import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import VideoPlayerSection from './../../Elements/CourseDetailsElements/VideoPlayerSection';
import CourseContent from './../../Elements/CourseDetailsElements/CourseContent';
import SmallCourseCard from './../../Elements/Card/SmallCourseCard';
import styles from '../../Assets/css/CourseDetails/CourseDetailsPage.module.css';
import CourseInformation from '../../Elements/CourseDetailsElements/CourseInformation';
import CourseOverview from '../../Elements/CourseDetailsElements/CourseOverview';

const CourseDetailsBody = () => {
    return (
        <>
            <Container>
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
                    <Row>
                        <div className={styles.BottomSectionHeadingWrap}>
                            <h2>Student Also <span>Like This Courses</span></h2>
                            <p>here is The Few Recommended Course That Also Help You to Improve Your Skill</p>
                        </div>
                    </Row>

                   <div className={styles.BottomSectionBG}>
                    <Row>
                            <Col md={3}>
                                <SmallCourseCard />
                            </Col>
                            <Col md={3}>
                                <SmallCourseCard />
                            </Col>
                            <Col md={3}>
                                <SmallCourseCard />
                            </Col>
                            <Col md={3}>
                                <SmallCourseCard />
                            </Col>
                        </Row>
                   </div>

                </div>

            </Container>
        </>
    );
};

export default CourseDetailsBody;