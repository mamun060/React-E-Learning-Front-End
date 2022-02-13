import React from 'react';
import styles from '../../Assets/css/CourseDetails/AboutInstructor.module.css';
import instructor from '../../Assets/images/Instructor/pexels-italo-melo-2379005 1.png';

const AboutInstructor = () => {
    return (
        <>
            <div className={styles.AboutInstructorContainer}>

                <div className={styles.InstructorDetailsWrap}>
                    <div className={styles.InstructorImages}>
                        <img src={instructor} alt="" />
                    </div>
                    <div className={styles.InstructorNameInfo}>
                        <h2>MD. Alauddin</h2>
                        <h4>Lead Developer</h4>
                    </div>
                </div>

                <div className={styles.InstructorTitleInfo}>
                    <p>
                         I am a Web Developer. work as a Remote Job Web Developer for pixelcarve.com 
                         team in Canada. I partner with startups, organizations and Fortune 200+ 
                         companies to build web development that help clients overcome challenges 
                         and create lasting connections with millions of people every day.
                    </p>
                </div>

            </div>
        </>
    );
};

export default AboutInstructor;