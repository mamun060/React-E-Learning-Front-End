/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import styles from '../../Assets/css/Card/InstructorCard.module.css';
import {FaFacebookF} from 'react-icons/fa';
import {GrLinkedinOption} from 'react-icons/gr';
import {BsYoutube} from 'react-icons/bs';

const InstructorCard = ({images, name, title, company, fb, linkedin, youtube, more_name, more_link}) => {
    return (
        <>
            <div className={styles.InstructorCardContainer}>

                <div className={styles.InstructorImage}>
                    <img src={images} alt="Amar Skill" />
                </div>

                <div className={styles.InstructorInfo}>
                    <h2>{name}</h2>
                    <p>{title}</p>
                    <p>{company}</p>
                </div>

                <div className={styles.InstructorSocialInfo}>
                    <div className={styles.InstructorSocialIcon}>
                        <div className={styles.InstructorSocial}>
                            <a href={fb}><FaFacebookF /></a>
                        </div>
                        <div className={styles.InstructorSocial}>
                            <a href={linkedin}><GrLinkedinOption /></a>
                        </div>
                        <div className={styles.InstructorSocial}>
                            <a href={youtube}><BsYoutube /></a>
                        </div>
                    </div>
                    <div className={styles.InstructorMoreInfo}>
                        <a href={more_link}>{more_name}</a>
                    </div>
                </div>

            </div>
        </>
    );
};

export default InstructorCard;