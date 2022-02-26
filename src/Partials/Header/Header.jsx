/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState, useEffect, memo, useCallback } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/Partials/Header.module.css';
import { VscSearch } from 'react-icons/vsc';
import logo from '../../Assets/images/logo/1Amar-Skill.png';
import CustomCategorySection from './CustomCategorySection';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { getAllCartItems } from '../../Redux/CartSlice';
import { useAuth } from '../../Routes/AuthenticableRoutes';
import {FaShoppingCart} from 'react-icons/fa';
import userImg from '../../Assets/images/Students/student.jpg';


const Header = () => {
    const [isShow, setShow] = useState(true);
    const cart      = useSelector(getAllCartItems);
    const authUser  = useAuth();

    useCallback(()=>{
        console.log(authUser.auth);
    }, [authUser])

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
                            </div>
                        </Col>

                        <Col md={5} sm={5}>
                            <div className={styles.NavButtonArea}>
                                <div className={styles.HeaderTopCartIcon}>
                                    <Link to="/your-cart"><FaShoppingCart /><span className={styles.HeaderTopCartValue}>{cart.courses.length}</span></Link>
                                </div>
                                {
                                    !authUser?.auth ? (
                                        <>
                                            <div className={styles.LeftSignInButton}>
                                                <Link to={`register`}>Create an Account</Link>
                                            </div>
                                            <div className={styles.RightLogInButton}>
                                                <Link to={'login'}>Log in</Link>
                                            </div>
                                        </>
                                    ): (
                                        <>
                                        <div className={styles.ProfileImageSection}>
                                            <Link to={'student-dashboard'}>
                                                
                                                <img src={authUser.user.image} alt="A" />
                                                
                                                
                                            {/* {
                                                authUser.user.name ?? ''
                                            } */}
                                            </Link>
                                        </div>
                                        </>
                                    )
                                }
                                
                            </div>
                        </Col>

                    </Row>
                </div>
            </Container>
        </>
    );
};

export default memo(Header);