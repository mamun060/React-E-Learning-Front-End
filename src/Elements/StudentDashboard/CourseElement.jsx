import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './../../Assets/css/StudentDashboard/CourseElement.module.css';
import thumnail from './../../Assets/images/Course-Card/SmallCourseThumnail.jpg';
import {MdDoubleArrow, MdVideoLibrary} from 'react-icons/md';
import { BiTime } from 'react-icons/bi';
import {FaUserFriends} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import {AiFillEye} from 'react-icons/ai';

const CourseElement = () => {
    return (
        <>
           <Container className={styles.CourseElementWrapping}>
                <Row className='px-2'>
                    <Col md={4} className='d-flex align-items-center'>
                        <div className={styles.CourseThumbnail}>
                            <Link to=""><img src={thumnail} alt="" draggable="false" /></Link>
                        </div>
                    </Col>
                    <Col md={8}>
                        <div className={styles.CouseInformation}>
                            <h2 className={styles.CourseTitle}><Link to="#">React JS Job Ready Complete Course</Link></h2>
                            <h4 className={styles.CourseInstructor}><Link to="">Maruf Hossain</Link></h4>
                            <p className={styles.CourseContent}>Organizations and Fortune 200+ companies to build web development that help 
                            clients overcome challenges and create lasting connections organizations 
                            
                            </p>

                            <div className={styles.CourseLightInfo}>
                                <span><MdVideoLibrary /> 50 video </span>
                                <span><BiTime /> 24:20:20 </span>
                                <span><FaUserFriends /> 150 student </span>
                            </div>

                            <div className={styles.ElementButtonWrap}>
                                <div className={styles.CourseDatailsBtn}>
                                    <Link to=""><AiFillEye fontSize={14} />View</Link>


                                </div>
                                <div className={styles.LessionStartBtn}>
                                    <Link to=""><MdDoubleArrow fontSize={14} />Start</Link>
                                </div>
                            </div>

                        </div>
                    </Col>
                </Row>
           </Container>
        </>
    );
};

export default CourseElement;