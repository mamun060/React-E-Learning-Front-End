/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { Offcanvas} from 'react-bootstrap';
import { BsBorderWidth } from 'react-icons/bs';
import styles from '../../Assets/css/Partials/MobileHeader.module.css';
import logo from '../../Assets/images/logo/Amar-Skill.png';

const MobileMenuPopupBtn = () => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <div>
            <div onClick={handleShow}  className={styles.PopupMobileMenuIcon}>
                <BsBorderWidth />
            </div>

            <Offcanvas show={show} onHide={handleClose}>
                <Offcanvas.Header closeButton>
                <Offcanvas.Title>
                    <div className={styles.MobileMenuPopupMenu}>
                        <img src={logo} alt="Amar Skill" />
                    </div>
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   
                    <div className={styles.NavButtonArea}>
                        <div className={styles.LeftSignInButton}>
                            <a href="#">Sign In</a>
                        </div>
                        <div className={styles.RightLogInButton}>
                            <a href='#'>Log In</a>
                        </div>
                    </div>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </div>
    );
};

export default MobileMenuPopupBtn;