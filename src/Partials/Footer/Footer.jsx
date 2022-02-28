/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Col, Container, Row} from 'react-bootstrap';
import styles from '../../Assets/css/Partials/Footer.module.css';
import CertificateButton from '../../Elements/Button/CertificateButton';
import logo from '../../Assets/images/logo/white Amar-Skill.png';
import { BsTwitter, BsInstagram} from 'react-icons/bs';
import {FaLinkedinIn, FaFacebookF} from 'react-icons/fa';
import PaymentImg from '../../Assets/images/Footer-Images/Screenshot_1 1.png';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className={styles.FooterContainer}>
            <Container>
                <div className={styles.FooterContainerTop}>
                    <Row>

                        <Col md={8}>
                            <div className={styles.FooterTopMenu}>
                                <ul>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Terms and Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Refund Return Policy</Link></li>
                                </ul>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={styles.CertifcateButton}>
                                <CertificateButton 
                                name="Certificated Validation"
                                link="#"
                                />
                            </div>
                        </Col>

                    </Row>
                </div>


              <div className={styles.MainFooterWrap}>
                    <Row>

                        <Col md={4}>
                            <div className={styles.FooterLogo}>
                                <img src={logo} alt="" />
                            </div>
                            <div className={styles.FooterAboutContent}>
                                <p>
                                  Join AMARSKILL and introduce yourself to a new way of Learning, We have some of the best Instructor who can help to build your Career. Join us today and Start what ever you want.
                                </p>
                            </div>
                        </Col>

                        <Col md={4}>
                            <div className={styles.FooterWizardTitle}>
                                <h2>Useful Links</h2>
                            </div>
                            <div className={styles.UseFullLinkListing}>
                                <ul>
                                    <li><Link to="#">Blog</Link></li>
                                    <li><Link to="#">Our Instructor</Link></li>
                                    <li><Link to="#">Become an Online Teacher</Link></li>
                                    <li><Link to="#">How It Works</Link></li>
                                    <li><Link to="#">Course Category</Link></li>
                                    <li><Link to="#">Create an Account</Link></li>
                                </ul>
                            </div>
                            <div className={styles.MobileFooterMenuLinks}>
                                <div className={styles.FooterWizardTitle}>
                                    <h2>Our Menu</h2>
                                </div>
                                <ul>
                                    <li><Link to="#">About Us</Link></li>
                                    <li><Link to="#">Contact Us</Link></li>
                                    <li><Link to="#">Terms and Conditions</Link></li>
                                    <li><Link to="#">Privacy Policy</Link></li>
                                    <li><Link to="#">Refund Return Policy
                                    </Link></li>
                                </ul>
                            </div>
                        </Col>

                
                        <Col md={4}>
                            <div className={styles.FooterWizardTitle}>
                                <h2>Follow us</h2>
                                <div className={styles.FooterSocialIcon}>
                                    <ul>
                                        <li className={styles.IconFacebook}><Link to="#"><FaFacebookF /></Link></li>
                                        <li className={styles.IconLinkedin}><Link to="#"><FaLinkedinIn /></Link></li>
                                        <li className={styles.IconTwitter}><Link to="#"><BsTwitter /></Link></li>
                                        <li className={styles.IconInstagram}><Link to="#"><BsInstagram/></Link></li>
                                    </ul>
                                 </div>
                            </div>
                            
                            <div className={styles.FooterWizardTitle}>
                              <h2>Our Location</h2>

                               <div className={styles.FooterLocationArea}>
                                   <p>Begumganj, Maijdee ( 3800 ) <br />
                                      Noakhali , Bangladesh
                                    </p>
                               </div>

                            </div>

                        </Col>

                    </Row>

              </div>

              <Row>
                  <Col>
                  <div className={styles.PaymentIconImage}>
                      <img src={PaymentImg} alt="" />
                  </div>
                  </Col>
              </Row>

              <Row>
                  <Col>
                    <div className={styles.FooterCopyRightContent}>
                        <p>
                            © AMARSKILL. ALL RIGHT RESERVED
                        </p>
                    </div>
                  </Col>
              </Row>


            </Container>
        </div>
    );
};

export default Footer;