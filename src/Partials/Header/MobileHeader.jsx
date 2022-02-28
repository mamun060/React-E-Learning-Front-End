import React, {useCallback} from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import MobileMenuPopupBtn from './MobileMenuPopupBtn';
import styles from '../../Assets/css/Partials/MobileHeader.module.css';
// import { VscSearch } from 'react-icons/vsc';
import logo from '../../Assets/images/logo/1Amar-Skill.png';
import MobileSearchIcon from './MobileSearchIcon';
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { getAllCartItems } from '../../Redux/CartSlice';
import { useAuth } from '../../Routes/AuthenticableRoutes';

const MobileHeader = () => {
    const cart      = useSelector(getAllCartItems);
    const authUser  = useAuth();

    useCallback(()=>{
        console.log(authUser.auth);
    }, [authUser])

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
                           <div className={styles.CartSearchWrapping}>
                               <div className={styles.HeaderTopCartIcon}>
                                    <Link to="/your-cart"><FaShoppingCart /><span className={styles.HeaderTopCartValue}>{cart.courses.length}</span></Link>
                                </div>
                                
                                <div className={styles.MobileSearchIConDiv}>
                                    <MobileSearchIcon />
                                </div>
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