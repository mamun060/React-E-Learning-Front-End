/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState } from 'react';
import { Offcanvas} from 'react-bootstrap';
import { BsBorderWidth } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Partials/MobileHeader.module.css';
import logo from '../../Assets/images/logo/Amar-Skill.png';
import { useAuth } from '../../Routes/AuthenticableRoutes';

const MobileMenuPopupBtn = () => {

    const authUser = useAuth();

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);


    useCallback(() => {
        console.log(authUser.auth);
    }, [authUser])


    return (
        <>
            <div onClick={handleShow}  className={styles.PopupMobileMenuIcon}>
                <BsBorderWidth />
            </div>

            <Offcanvas show={show} onHide={handleClose} className={styles.dialogDrawer}>
                <Offcanvas.Header closeButton style={{zIndex:'1001'}}>
                <Offcanvas.Title>
                    <div className={styles.MobileMenuPopupMenu}>
                        <Link to={'/'}><img src={logo} alt="Amar Skill" /></Link>
                    </div>
                </Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                   
                    <div className={styles.NavButtonArea}>
                        {
                            !authUser?.auth ? (
                                <>
                                    <div className={styles.LeftSignInButton}>
                                        <Link to="/register">Create An Account</Link>
                                    </div>
                                    <div className={styles.RightLogInButton}>
                                        <Link to='/login'>Log in</Link>
                                    </div>
                                </>
                            ) : (
                                <div className={styles.greeting}>
                                    <h2>{authUser?.user?.name ?? ''}</h2>
                                    <h4>Welcome To AmarSkill</h4>
                                </div>
                            )
                        }
                    </div>
                    
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default MobileMenuPopupBtn;