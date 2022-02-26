import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/Carts/DefaultCardBody.module.css';
import Thumnails from '../../Assets/images/Course-Card/SmallCourseThumnail.jpg';
import {Link} from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

const DefaultCartBody = () => {
    return (
        <>
           <Container>
            <div className={styles.DefaultCartBodyWrap}>
                <Row>
                    <Col md={7}>
                        <div className={styles.DeCartLeft}>
                            <Row>
                               <Col md={3} sm={3} className={styles.CoursThumnailSide}>
                                    <Link to={''}><img src={Thumnails} alt="" /></Link>
                                </Col>
                                <Col md={7} sm={7} className={styles.CartCourseInfo}>
                                    <h2><Link to={'coursedetails/1'}>কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।</Link></h2>
                                    <h4>Md. Alauddin</h4>
                                </Col>
                                <Col md={2} sm={2} className={styles.CartRemovePrice}>
                                    <Link to="" type='button'> <FaTimes /></Link>
                                    <p>4500.0</p>
                                </Col>
                            </Row>
                        </div>
                    </Col>

                    <Col md={5}>
                        <div className={styles.DeCartRight}>
                            <div className={styles.DeCartContentTitle}>
                                <h2>Price Info</h2>
                            </div>

                            <div className={styles.DeCartRigitPrice}>
                                <p>Course Price</p>
                                <p> 5000.00</p>
                            </div>

                            <div className={styles.DeCartRigitCoursePrice}>
                                <p>Total</p>
                                <p> 5000.00</p>
                            </div>

                            <div className={styles.DeCartRightCourseDetails}>
                                <p>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusamus veritatis iure omnis nam impedit saepe enim, suscipit dolorem animi quis!
                                </p>
                            </div>

                            <div className={styles.DeCartRigiBuyBtn}>
                                <Link to="/checkout">Buy Now</Link>
                            </div>

                        </div>
                    </Col>

                </Row>
            </div>
           </Container>
        </>
    );
};

export default DefaultCartBody;