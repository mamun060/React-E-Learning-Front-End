import React from 'react';
import styles from '../../Assets/css/StudentDashboard/UserProfile.module.css';
import { Container, Row, Col } from 'react-bootstrap';
import user from '../../Assets/images/user-img/user_img.png';
import {HiOutlineMail} from 'react-icons/hi';
import {BsFillPersonFill} from 'react-icons/bs';
import {MdOutlinePhone, MdLocationOn} from 'react-icons/md';

const UserProfile = () => {
    return (
        <>
            <Container>
                <div className={styles.UserProfileWrap}>
                    <Row>
                        <Col md={2}>
                            <div className={styles.UserProfileImage}>
                                <img draggable="false" src={user} alt="" />
                            </div>
                        </Col>
                       
                        <Col md={10}>
                            <div className={styles.UserAboutSeciton}>
                                <h2 className={styles.UserTitle}>Md. Alluddin</h2>
                                <h4 className={styles.UserSubTitle}>Web Developer</h4>
                                <p className={styles.userInfoContent}>
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                                    Atque veniam voluptate autem animi molestiae, 
                                    nihil rem repellat veritatis quidem labore.
                                </p>
                            </div>
                        </Col>
                        <Col md={12} >
                            <div className={styles.userInformationInfo}>
                                <ul>
                                    <li><HiOutlineMail color='#F59A26'  fontSize={16} /> <span>&nbsp; admin@gmail.com </span></li>
                                    <li><BsFillPersonFill color='#F59A26'  fontSize={16} /> <span>&nbsp; Male</span></li>
                                    <li><MdOutlinePhone color='#F59A26'  fontSize={16} /> <span>&nbsp; +88011111111</span></li>
                                    <li><MdLocationOn color='#F59A26'  fontSize={16} /><span>&nbsp; Nikunjo-2, Dhaka</span></li>
                                </ul>
                            </div>
                        </Col>
                    </Row>
                    
                </div>
            </Container>
        </>
    );
};

export default UserProfile;