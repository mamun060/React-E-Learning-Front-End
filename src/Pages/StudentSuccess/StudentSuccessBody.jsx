import React from 'react';
import { Col, Container, Pagination, Row } from 'react-bootstrap';
import SuccessReviewCard from './../../Elements/Card/SuccessReviewCard';
import styles from '../../Assets/css/StudentSuccess/StudentSuccessBody.module.css';

const StudentSuccessBody = () => {
    return (
        <>
            <Container className={styles.StudentSuccessBodyWrap}>

                   <Row>
                        <Col md={6}>
                            <SuccessReviewCard />
                        </Col>
                        <Col md={6}>
                            <SuccessReviewCard />
                        </Col>
                        <Col md={6}>
                            <SuccessReviewCard />
                        </Col>
                        <Col md={6}>
                            <SuccessReviewCard />
                        </Col>
                        <Col md={6}>
                            <SuccessReviewCard />
                        </Col>
                        <Col md={6}>
                            <SuccessReviewCard />
                        </Col>
                    </Row>

                <Row>
                    <Col>
                        <div className={styles.PaginationSectionWrap}>
                            <Pagination>
                                <Pagination.Prev />
                                <Pagination.Item>{1}</Pagination.Item>
                                <Pagination.Item>{2}</Pagination.Item>
                                <Pagination.Item active>{5}</Pagination.Item>
                                <Pagination.Ellipsis />
                                <Pagination.Item>{14}</Pagination.Item>
                                <Pagination.Next />
                            </Pagination>
                        </div>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default StudentSuccessBody;