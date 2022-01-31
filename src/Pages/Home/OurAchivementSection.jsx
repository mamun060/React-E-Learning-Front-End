import React from 'react';
import styles from '../../Assets/css/Home/OurAchievement.module.css';
import { HiUserGroup } from 'react-icons/hi';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';

const OurAchivementSection = () => {
    return (
        <div className={styles.OurAchivementContainer}>
           <Container>
              <div className={styles.TopRightCircle}></div>

                 <div className={styles.ourAchievementBackground}>
                    <Row>
                        <Col>
                            <div className={styles.OurAchivementHeading}>
                                <h2 className={styles.OurAchievement}> Our Achievement</h2>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col md={4} sm={12} xs={12}>
                            <div>
                                <div className={styles.userIcon}>
                                    <HiUserGroup/>
                                </div>
                                <div className={styles.user}>
                                    <h2>243</h2>
                                    <h3>Users</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <Row className={styles.RightFirstRow}>
                                <Col xs={12} sm={12} md={6}>
                                   <div className={styles.OurAchievementAlignment}>
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
                                    <div className={styles.OurAchievementAlignment}>
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

                            <Row className={styles.RightSecondRow}>
                                <Col xs={12} sm={12} md={6}>
                                    <div className={styles.OurAchievementAlignment}>
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
                                    <div className={styles.OurAchievementAlignment}>
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
                
                <div className={styles.BottomLeftSqure}></div>
            </Container>
        </div>
    );
};

export default OurAchivementSection;