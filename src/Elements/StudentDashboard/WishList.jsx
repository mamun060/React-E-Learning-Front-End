import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/StudentDashboard/PurchaseList.module.css';
import WishlistCard from '../../Elements/Card/WishlistCard';
import { useState, useEffect } from 'react';

const WishList = () => {

    const [ wishLists , setWishLists] = useState([]);

    useEffect(()=>{
        setWishLists([
            {id:1},
            {id:2},
            {id:3},
            {id:4}
        ])
    },[])

    return (
        <>
            <Container>
                <Row>
                    {
                        wishLists && wishLists.map((list,i)=>(
                            <Col md={4} className={styles.WishListCol}>
                                <WishlistCard key={i} wishListItems={wishLists} setWishLists={setWishLists} id={list.id}/>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default WishList;