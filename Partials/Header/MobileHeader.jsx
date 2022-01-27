import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MobileMenuPopupBtn from './MobileMenuPopupBtn';
import styles from '../../Assets/css/Partials/MobileHeader.module.css';
import { VscSearch } from 'react-icons/vsc';
import logo from '../../Assets/images/logo/Amar-Skill.png';

const MobileHeader = () => {
    return (
        <div>
            <Container>
               <div className={styles.MobileHeaderContainer}>
                   <Row>
                        <Col md={2} xs={2}>
                            <div className={styles.MobileHeaderMenuIcon}>
                               <MobileMenuPopupBtn />
                            </div>
                        </Col>
                        <Col md={2} xs={2}>
                            <div className={styles.MobileHeaderLogo}>
                                <img src={logo} alt="Amar Skill" />
                            </div>
                        </Col>
                        <Col md={8} xs={8}>
                            <div className={styles.MobileHeaderSearchBar}>
                                <input type="text" /><VscSearch />
                            </div>
                        </Col>
                    </Row>
               </div>
            </Container>
        </div>
    );
};

export default MobileHeader;