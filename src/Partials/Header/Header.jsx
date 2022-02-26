/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/Partials/Header.module.css';
import { VscSearch } from 'react-icons/vsc';
import logo from '../../Assets/images/logo/1Amar-Skill.png';
import CustomCategorySection from './CustomCategorySection';
import { Link } from 'react-router-dom';
// import Cart from '../../Pages/Cart/Cart';


const Header = () => {
    const [isShow, setShow] = React.useState(true);

    return (
        <>
            <Container>
                <div className={styles.HeaderContainer}>
                    <Row>

                        <Col md={1} sm={2}>
                            <Link to={'/'}>
                            <div className={styles.LogoSytle}>
                                <img src={logo} alt="Amar Skill" />
                            </div>
                            </Link>
                        </Col>

                        <Col md={2} sm={2}>
                            <div>
                                <CustomCategorySection />
                            </div>
                        </Col>

                        <Col md={4} sm={3}>
                            <div className={styles.NavSearch}>
                                <input type="text" style={{ fontSize:'calc(1vw + 0.3rem)' }} placeholder='Search ...' /><VscSearch />
                                {/* <input type="text" style={{ fontSize:'calc(1vw + 0.2rem)' }} placeholder='আপনার কাঙ্খিত কোর্সটি সার্চ করুন' /><VscSearch /> */}
                            </div>
                        </Col>

                        <Col md={5} sm={5}>
                            <div className={styles.NavButtonArea}>
                                    <div className={styles.LeftSignInButton}>
                                        <Link to='registation'>Create an Account</Link>
                                            {/* <a href="#">একাউন্ট তৈরি করুন</a> */}
                                    </div>
                                    <div className={styles.RightLogInButton}>
                                        <Link to='login'>Log in</Link>
                                        {/* <a href='#'>লগইন করুন</a> */}
                                    </div>
                                    {/* {
                                    isShow && <div onClick={()=>setShow(true)}>
                                        <Cart />
                                    </div>
                                    } */}
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </>
    );
};

export default Header;