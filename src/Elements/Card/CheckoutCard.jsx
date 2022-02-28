import React, { useEffect } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Card/CheckoutCard.module.css';
import Thumnails from '../../Assets/images/Course-Card/SmallCourseThumnail.jpg';

const CheckoutCard = () => {

    useEffect(()=>{
        removefirstCart();
    },[])
    
    const removefirstCart = () => {
        return localStorage.removeItem('isFirstCart');
    }

    return (
        <>
            <Container className={styles.CheckoutCardContainer}>
                <Row>
                    <Col md={3} sm={3} className={styles.CoursThumnailSide}>
                        <Link to={'/coursedetails/1'}><img src={Thumnails} alt="" /></Link>
                    </Col>
                    <Col md={7} sm={7} className={styles.CheckoutCourseInfo}>
                        <h2><Link to={'/coursedetails/1'}>কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।</Link></h2>
                        <h4>Md. Alauddin</h4>
                    </Col>
                    <Col md={2} sm={2} className={styles.CartRemovePrice}>
                        <p>4500.0</p>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default CheckoutCard;