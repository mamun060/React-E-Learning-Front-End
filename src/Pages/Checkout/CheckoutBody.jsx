import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import styles from '../../Assets/css/Checkout/CheckoutBody.module.css';
import CheckoutCard from './../../Elements/Card/CheckoutCard';


const CheckoutBody = () => {

    
    const cards = [1,2];

    const applyCoupon = ()=>{
        console.log("Requesting for coupon");
    }

    const makePayment = ()=>{
        console.log("Requesting for payment");
    }

    useCallback(()=>{
        console.log('dasdasdasd');
    },[])

    return (
        <>
        <Container>
            <div className={styles.CheckoutBodyWrap}>
                <Row>
                    <Col md={7}>
                        <div className={styles.CheckoutLeftSide}>
                            <div className={styles.CheckoutTopHeding}>
                                <h4>Order Details</h4>
                            </div>
                            {
                                cards.map((card,i) =>(
                                    <CheckoutCard key={i}/>
                                ))
                            }
                        </div>
                    </Col>

                    <Col md={5}>
                        <div className={styles.CheckoutRight}>
                            <div className={styles.CheckoutContentTitle}>
                                <h2>Price Info</h2>
                            </div>

                            <div className={styles.CheckoutRigitPrice +' pb-1'}>
                                <p>Course Price</p>
                                <p> 5000.00</p>
                            </div>

                            <div className={styles.CheckoutRigitPrice+' py-0 pb-1'}>
                                <p>Discount</p>
                                <p> 0.00</p>
                            </div>

                            <div className={styles.CheckoutDiscountSide}>
                                <input type="text" placeholder='Enter Coupon' className='px-2' />
                                <Link to="" onClick={applyCoupon} >Apply</Link>
                            </div>

                            <div className={styles.CheckoutRigitCoursePrice}>
                                <p>Total</p>
                                <p> 5000.00</p>
                            </div>

                            <div className={styles.CheckoutBuyBtn}>
                                <Link to="" onClick={makePayment}>Pay Now</Link>
                            </div>

                        </div>
                    </Col>

                </Row>
            </div>
           </Container>
        </>
    );
};

export default CheckoutBody;