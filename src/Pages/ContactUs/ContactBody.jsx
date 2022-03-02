import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/ContactUs/ContactBody.module.css';
import { IoIosMail } from "react-icons/io";
import { BsTelephoneXFill} from 'react-icons/bs';
import {MdEmail, MdLocationOn} from 'react-icons/md';
import {ImBook} from 'react-icons/im';
import {FaFacebookF, FaTwitter, FaLinkedinIn, FaYoutube, FaInstagram, FaPhoneAlt} from 'react-icons/fa';
import {BsFillPersonFill}  from 'react-icons/bs';

const ContactBody = () => {
    return (
        <>
           <Container>
               <div className={styles.ContactBodyContainers}>
                    <Row>
                        <Col md={4} className='pl-0 pb-0'>
                            <div className={styles.ContantLeftSide}>
                                    <div className={styles.ContactLeftContent}>
                                        <h4>Contact us</h4>
                                        <ul className={styles.ContactInfoListing}>
                                            <li>
                                                <IoIosMail />
                                                <p>admin@gmail.com</p>
                                            </li>
                                            <li>
                                                <BsTelephoneXFill />
                                                <p>+880163</p>
                                            </li>
                                            <li>
                                                <MdLocationOn />
                                                <p>Rord#03, Nikunjo-2, Dhaka-1229</p>
                                            </li>
                                        </ul>
                                </div>

                                    <div className={styles.SocialIconLeft}>
                                        <h4>follow us</h4>
                                        <ul className={styles.LeftSocialIconList}>
                                            <li><Link to="#"><FaFacebookF /></Link></li>
                                            <li><Link to="#"><FaTwitter /></Link></li>
                                            <li><Link to="#"><FaLinkedinIn /></Link></li>
                                            <li><Link to="#"><FaYoutube /></Link></li>
                                            <li><Link to="#"><FaInstagram /></Link></li>
                                        </ul>
                                    </div>

                            </div>
                        </Col>

                        <Col md={8}>
                            <div className={styles.ContantRightSide}>
                                <div className={styles.RightContentTitle}>
                                    <h4>sent us your query</h4>
                                </div>
                                <div className={styles.ContactUsFormWrap}>
                                    <Row>
                                        <Col md={6}>
                                            <div className={styles.ContactFormTextInput}>
                                                <BsFillPersonFill />
                                               <input type="text" placeholder='Your Name'/>
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className={styles.ContactFormTextInput}>
                                                <FaPhoneAlt />
                                                <input type="number" placeholder='Your Phone' />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className={styles.ContactFormTextInput}>
                                                <MdEmail />
                                                <input type="email" placeholder='Your Gmail' />
                                            </div>
                                        </Col>
                                        <Col md={6}>
                                            <div className={styles.ContactFormTextInput}>
                                                <ImBook/>
                                                <input type="text" placeholder='Subject' />
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <div className={styles.FormTextareaStyle}>
                                                <textarea rows="5" placeholder='Your Message' ></textarea>
                                            </div>
                                        </Col>
                                        <Col md={12}>
                                            <button className={styles.FormSubmitButtonStyle}>
                                                <Link to="/">Sent</Link>
                                            </button>
                                        </Col>
                                    </Row>
                                </div>
                            </div>
                        </Col>
                    </Row>
               </div>
           </Container>  
        </>
    );
};

export default ContactBody;