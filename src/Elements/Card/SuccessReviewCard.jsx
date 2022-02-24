import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Card/SuccessReviewCard.module.css';
import studentImg from '../../Assets/images/Students/student.jpg';
import { ImQuotesLeft, ImQuotesRight } from 'react-icons/im';

const SuccessReviewCard = () => {
    return (
        <>
           <div className={styles.SuccessReviewCardWrap}>

               <div className={styles.StudentReviewCardTop}>
                   <div className={styles.StudentImgStyle}>
                       <img src={studentImg} alt="" />
                   </div>
                   <div className={styles.ReviewContents}>
                       <p><ImQuotesLeft /> <br />
                          AmarSkill has helped me in many ways to develop my career. 
                          They taught me how to work professionally in the programming sector.
                          They taught me how to work professionally in the programming sector.
                          <br /><Link to="">More...</Link> <ImQuotesRight />
                       </p>
                   </div>
               </div>

               <div className={styles.StudentReviewBottomSection}>
                   <h2 >Md. Alauddin </h2>
                   <h4>Lead Developer</h4>
               </div>


           </div>
        </>
    );
};

export default SuccessReviewCard;