import React from 'react';
import { Tab, Row, Col, Nav, Container } from 'react-bootstrap';
import styles from '../../Assets/css/StudentDashboard/TabBodySection.module.css';
import '../../Assets/css/StudentDashboard/CustomStyle.css';
import UserProfile from '../../Elements/StudentDashboard/UserProfile';
import MyCourseList from '../../Elements/StudentDashboard/MyCourseList';
import WishList from '../../Elements/StudentDashboard/WishList';
import PurchaseHistory from '../../Elements/StudentDashboard/PurchaseHistory';


const TabBodySection = () => {

    return (
        <>
            <Container>
                <div className={styles.TabBodySectionWrap}>
                    <div className={styles.TabBodyContainer}>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="profile">
                            <Row>
                                <Col sm={3}>
                                    <div className={styles.TabBodyLeftSectionWrap}>
                                        <div className={styles.UserInfoTitle}>
                                            <h4>User Information</h4>
                                        </div>
                                        <Nav variant="pills" className="flex-column student-dashboard">
                                            <Nav.Item>
                                                <Nav.Link eventKey="profile">Profile</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="courses">My Courses</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="wishlist">Wishlist</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                            <Nav.Link eventKey="purchase">Purchase History</Nav.Link>
                                            </Nav.Item>
                                            <Nav.Item>
                                                <Nav.Link eventKey="five">Log Out</Nav.Link>
                                            </Nav.Item>
                                        </Nav>
                                    </div>
                                </Col>
                                <Col sm={9}>
                                    <div className={styles.TabBodyrRightSectionWrap}>
                                        <Tab.Content>
                                            <Tab.Pane eventKey="profile">
                                                <UserProfile />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="courses">
                                                <MyCourseList />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="wishlist">
                                                <WishList />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="purchase">
                                                <PurchaseHistory />
                                            </Tab.Pane>
                                            <Tab.Pane eventKey="five">
                                                <p>
                                                    this is logout compononent 
                                                </p>
                                            </Tab.Pane>
                                        </Tab.Content>
                                    </div>
                                </Col>
                            </Row>
                            </Tab.Container>
                    </div>
                </div>
            </Container>
        </>
    );
};

export default TabBodySection;