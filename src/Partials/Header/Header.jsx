/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
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

                        <Col md={3} sm={2}>
                            {/* <div className={styles.NavCategory}>
                                <select className={styles.CustomSeletCat} value={categories} onChange={e=>setCategories(e.target.value)}>
                                    <option> সকল কোর্স দেখুন  &nbsp; </option>
                                    <option>One</option>
                                    <option>Two</option>
                                    <option>Three</option>
                                    <option>Four</option>
                                </select>
                            </div> */}
                            <div>
                                <CustomCategorySection />
                            </div>
                            
                        </Col>

                        <Col md={4} sm={3}>
                            <div className={styles.NavSearch}>
                                <input type="text" placeholder='Type here....' /><VscSearch />
                            </div>
                        </Col>

                        <Col md={4} sm={5}>
                            <div className={styles.NavButtonArea}>
                                    <div className={styles.LeftSignInButton}>
                                        <a href="#">Sign In</a>
                                    </div>
                                    <div className={styles.RightLogInButton}>
                                        <a href='#'>Log In</a>
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