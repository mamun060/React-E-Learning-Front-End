import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../Assets/css/About/AboutBody.module.css';
import aboutimg from '../../Assets/images/about/about.webp';

const AboutBody = () => {
    return (
        <>
            <Container className={styles.AboutBodyContainer}>
                <Row className={styles.AboutBodyRowContainer}>
                    <Col md={6}>
                        <div className={styles.AboutLeftContent}>
                            <h4>who we are</h4>
                            <p>
                                We are e-learning platform, “amar-skill”. Our motto is “skills do not die, 
                                only people do.”  Our vision is to make skilled people to lead the future 
                                industries. Our mission is to provide quality learning to our enthusiasts.  
                                We know that  knowledge can connect people in this global learning system. 
                                If you love to learn and also want to share your knowledge, 
                                you are in a right place. You are warmly welcomed here either you are a learner 
                                or instructor.  Together we can make our world better in future. 
                                Because we believe that “skills do not die, only people do.”
                            </p>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.AboutRightImg}>
                            <img src={aboutimg} alt="Amar Skill" />
                        </div>
                    </Col>
                </Row>
            </Container> 
        </>
    );
};

export default AboutBody;