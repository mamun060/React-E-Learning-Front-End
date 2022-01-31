import React from 'react';
import styles from '../../Assets/css/Button/Button.module.css';

const CertificateButton = ({name, link}) => {
    return (
        <>
           <div className={styles.CertificateButtonWrap}>
               <a href={link}>{name}</a>
            </div> 
        </>
    );
};

export default CertificateButton;