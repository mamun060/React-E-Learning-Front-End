/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/Partials/Header.module.css';
import { VscSearch } from 'react-icons/vsc';
import logo from '../../Assets/images/logo/1Amar-Skill.png';
import CustomCategorySection from './CustomCategorySection';





const Header = () => {

    return (
        <div>
            <Container>
                <div className={styles.HeaderContainer}>
                    <Row>

                        <Col md={1} sm={2}>
                            <div className={styles.LogoSytle}>
                                <img src={logo} alt="Amar Skill" />
                            </div>
                        </Col>

                        <Col md={2} sm={2}>
                            <div>
                                <CustomCategorySection />
                            </div>
                        </Col>

                        <Col md={4} sm={3}>
                            <div className={styles.NavSearch}>
                                <input type="text" placeholder='আপনার কাঙ্খিত কোর্সটি সার্চ করুন' /><VscSearch />
                            </div>
                        </Col>

                        <Col md={5} sm={5}>
                            <div className={styles.NavButtonArea}>
                                    <div className={styles.LeftSignInButton}>
                                        <a href="#">একাউন্ট তৈরি করুন</a>
                                        {/* <a href="#">Create an Account</a> */}
                                    </div>
                                    <div className={styles.RightLogInButton}>
                                    {/* <a href='#'>Log in</a> */}
                                    <a href='#'>লগইন করুন</a>
                                    </div>
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </div>
    );
};

export default Header;