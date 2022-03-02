import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Button/Button.module.css';

const CertificateButton = ({name, link, setmodalShow}) => {
    return (
        <>
           <div className={styles.CertificateButtonWrap}>
               <Link onClick={()=> setmodalShow(true)} to={link}>{name}</Link>
            </div> 
        </>
    );
};

export default CertificateButton;