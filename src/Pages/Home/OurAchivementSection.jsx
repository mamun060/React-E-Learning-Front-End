import React from 'react';
import styles from '../../Assets/css/Home/OurAchievement.module.css';
import { HiUserGroup } from 'react-icons/hi';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { Col, Container, Row } from 'react-bootstrap';
import CountUp from 'react-countup';

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
                            <div className={styles.BigUserCicleSection}>
                                <div className={styles.userIcon}>
                                    <HiUserGroup/>
                                </div>
                                <div className={styles.user}>
                                    <h2><CountUp start={0} end={262} /></h2>
                                    <h3>Users</h3>
                                </div>
                            </div>
                        </Col>
                        <Col md={8} sm={12} xs={12}>
                            <Row className={styles.RightFirstRow}>
                                <Col md={6} sm={12} xs={12}>
                                   <div className={styles.OurAchievementAlignment}>
                                        <div className={styles.instructorIcon}>
                                            <FaChalkboardTeacher/>
                                        </div>
                                        <div className={styles.instructor}>
                                            <h2><CountUp start={0} end={10} /></h2>
                                            <h3>iNSTRUCTOR</h3>
                                        </div>
                                   </div>
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <div className={styles.OurAchievementAlignment}>
                                            <div className={styles.instructorIcon}>
                                                <FaChalkboardTeacher/>
                                            </div>
                                            <div className={styles.instructor}>
                                                <h2><CountUp start={0} end={20} /></h2>
                                                <h3>COURSE </h3>
                                            </div>
                                    </div>
                                </Col>
                            </Row>

                            <Row className={styles.RightSecondRow}>
                                <Col md={6} sm={12} xs={12}>
                                    <div className={styles.OurAchievementAlignment}>
                                            <div className={styles.instructorIcon}>
                                                <FaUserGraduate/>
                                            </div>
                                            <div className={styles.instructor}>
                                                <h2><CountUp start={0} end={250} /></h2>
                                                <h3>LEARNERS</h3>
                                            </div>
                                    </div>
                                </Col>
                                <Col md={6} sm={12} xs={12}>
                                    <div className={styles.OurAchievementAlignment}>
                                        <div className={styles.instructorIcon}>
                                            <FaChalkboardTeacher/>
                                        </div>
                                        <div className={styles.instructor}>
                                            <h2><CountUp start={0} end={1500} /></h2>
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