import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Button/Button.module.css';

const CertificateButton = ({name, link}) => {
    return (
        <>
           <div className={styles.CertificateButtonWrap}>
               <Link to={link}>{name}</Link>
            </div> 
        </>
    );
};

export default CertificateButton;