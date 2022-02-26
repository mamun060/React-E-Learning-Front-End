import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MobileMenuPopupBtn from './MobileMenuPopupBtn';
import styles from '../../Assets/css/Partials/MobileHeader.module.css';
// import { VscSearch } from 'react-icons/vsc';
import logo from '../../Assets/images/logo/1Amar-Skill.png';
import MobileSearchIcon from './MobileSearchIcon';
import { Link } from 'react-router-dom';

const MobileHeader = () => {

    return (
        <>
            <Container>
               <div className={styles.MobileHeaderContainer}>
                   <Row>
                        <Col md={2} xs={2}>
                            <div className={styles.MobileHeaderMenuIcon +' MobileHeaderMenuIconGlob'}>
                               <MobileMenuPopupBtn />
                            </div>
                        </Col>
                      
                        <Col md={7} xs={7}>
                            {/* <div className={styles.MobileHeaderSearchBar}>
                                <input type="text" /><VscSearch />
                            </div> */}
                            <div className={styles.MobileSearchIConDiv}>
                             <MobileSearchIcon />
                            </div>
                        </Col>

                        <Col md={3} xs={3}>
                            <div className={styles.MobileHeaderLogo}>
                                <Link to={'/'}><img src={logo} alt="Amar Skill" /></Link>
                            </div>
                        </Col>
                    </Row>
               </div>
            </Container>
        </>
    );
};

export default MobileHeader;