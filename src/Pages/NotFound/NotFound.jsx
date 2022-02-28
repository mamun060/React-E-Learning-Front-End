import React, { useEffect } from 'react'
import { Container } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from '../../Assets/css/NotFound/NotFound.module.css'
import NotFoundImg from "../../Assets/images/404.png";

const NotFound = () => {
  const navigate= useNavigate();
  const location= useLocation();
  const path    = location.pathname;
  const redirectableRoutes = ['forgot-password', 'login', 'register', 'student-dashboard'];

  useEffect(()=>{

    const isMatch    = redirectableRoutes.join('|');
    const pattern    = new RegExp(isMatch, "im"); 
    const matchPaths = path.match(pattern);

    if (matchPaths && matchPaths.length)
    {
      navigate(matchPaths[0]);
    }

  },[]);

  return (
      <>
        <Container fluid={true} className={styles.notFoundWrapper}>
            <div className={styles.notFoundContent}>
                <div className={styles.notFoundImg}>
                    <img draggable="false" src={NotFoundImg} alt="404 Page" />
                </div>
                <div className={styles.notFoundText}>
                  <h2>404</h2>
                  <h5><span>Oops!</span> The Page you are Looking.Page is Not Found</h5>
                  <Link to="/" className='btn py-1 px-4 my-2' >Home</Link>
                </div>
            </div>
        </Container>
      </>
  )
}

export default NotFound