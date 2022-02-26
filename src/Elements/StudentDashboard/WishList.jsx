import React, { memo } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from '../../Assets/css/StudentDashboard/PurchaseList.module.css';
import WishlistCard from '../../Elements/Card/WishlistCard';
import { useSelector } from "react-redux";
import { getAllWishItems } from '../../Redux/WishSlice';

const WishList = () => {

    const wish = useSelector(getAllWishItems);

    return (
        <>
            <Container>
                <Row>
                    {
                        wish && wish.wishListItems.map((list,i)=>(
                            <Col md={4} key={i} className={styles.WishListCol}>
                                <WishlistCard key={i} id={list.id} />
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </>
    );
};

export default memo(WishList);