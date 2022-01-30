import React from 'react';
import styles from '../../Assets/css/Home/OurAchievement.module.css';
import { HiUserGroup } from 'react-icons/hi';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

const OurAchivementSection = () => {
    return (
        <div className={styles.OurAchivementContainer}>
           <Container>
                <div className={styles.ourAchievementBackground}>
                    <Row>
                        <Col>
                            <div className={styles.OurAchivementHeading}>
                                <h2 className={styles.OurAchievement}> Our Achievement</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row className='d-flex align-items-center'>
                        <Col xs={12} sm={12} md={4}>
                            <div class="mx-auto">
                                <div className={styles.userIcon}>
                                    <HiUserGroup/>
                                </div>
                                <div className={styles.user}>
                                    <h2>243</h2>
                                    <h3>Users</h3>
                                </div>
                            </div>
                        </Col>
                        <Col xs={12} sm={12} md={8}>
                            <Row className='my-5'>
                                <Col xs={12} sm={12} md={6}>
                                   <div className='d-flex'>
                                        <div className={styles.instructorIcon}>
                                            <FaChalkboardTeacher/>
                                        </div>
                                        <div className={styles.instructor}>
                                            <h2>08</h2>
                                            <h3>iNSTRUCTOR</h3>
                                        </div>
                                   </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className='d-flex'>
                                            <div className={styles.instructorIcon}>
                                                <FaChalkboardTeacher/>
                                            </div>
                                            <div className={styles.instructor}>
                                                <h2>06</h2>
                                                <h3>COURSE </h3>
                                            </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className='my-5'>
                                <Col xs={12} sm={12} md={6}>
                                    <div className='d-flex'>
                                            <div className={styles.instructorIcon}>
                                                <FaUserGraduate/>
                                            </div>
                                            <div className={styles.instructor}>
                                                <h2>234</h2>
                                                <h3>LEARNERS</h3>
                                            </div>
                                    </div>
                                </Col>
                                <Col xs={12} sm={12} md={6}>
                                    <div className='d-flex'>
                                        <div className={styles.instructorIcon}>
                                            <FaChalkboardTeacher/>
                                        </div>
                                        <div className={styles.instructor}>
                                            <h2>1012</h2>
                                            <h3>ENROLMENT</h3>
                                        </div>
                                   </div>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default OurAchivementSection;