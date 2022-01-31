import React from 'react';
import styles from '../../Assets/css/Button/Button.module.css';

const SectionHeadingBtn = ({name, link}) => {
    return (
        <div>
            <div className={styles.SectionHeadingWrap}>
               <a href={link}>{name}</a>
            </div> 
        </div>
    );
};

export default SectionHeadingBtn;