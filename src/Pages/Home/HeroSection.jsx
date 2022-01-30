/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import styles from '../../Assets/css/Home/HeroSection.module.css';

import Banner from '../../Assets/images/Background-Banner/12Amar-Skill-Vector 1.png';
import Button from '../../Elements/Button/CustomButton';

const HeroSection = () => {
    return (
        <div>
            <Container fluid={true}>
                <div className={styles.HeroContainer}>
                    <Container>
                    <Row>
                        <Col md={6} sm={12}>
                            <div className={styles.HeroLeftWrap}>
                                <div className={styles.HeroHeading}>
                                    <h2>
                                        Best E-larning <br />
                                        Platform <br />
                                        In Bangladesh
                                        </h2>
                                    </div>
                                    <div className={styles.HeroButton}>
                                        <Button 
                                        name="See More"
                                        link="#" 
                                        />
                                    </div>
                            </div>
                            </Col>
                            <Col md={6} sm={12}>
                            <div className={styles.HeroBanner}>
                                <img src={Banner} alt="Amar Skill" />
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </Container>
        </div>
    );
};

export default HeroSection;