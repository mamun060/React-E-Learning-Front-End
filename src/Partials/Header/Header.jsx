/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Partials/Header.module.css';
import Select from 'react-select'
import { VscSearch } from 'react-icons/vsc';
import logo from '../../Assets/images/logo/Amar-Skill.png';

const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
]

const Header = () => {
    return (
        <div>
            <Container>
                <div className={styles.HeaderContainer}>
                    <Row>

                        <Col md={2} sm={2}>
                            <div className={styles.LogoSytle}>
                                <img src={logo} alt="Amar Skill" />
                            </div>
                        </Col>

                        <Col md={2} sm={2}>
                            <div className={styles.NavCategory}>
                                <Select options={options} />
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