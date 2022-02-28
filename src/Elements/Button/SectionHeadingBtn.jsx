import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Button/Button.module.css';

const SectionHeadingBtn = ({name, link}) => {
    return (
        <div>
            <div className={styles.SectionHeadingWrap}>
               <Link to={link}>{name}</Link>
            </div> 
        </div>
    );
};

export default SectionHeadingBtn;