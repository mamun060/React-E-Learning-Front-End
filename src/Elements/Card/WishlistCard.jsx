/* eslint-disable jsx-a11y/anchor-is-valid */
import React,{useState} from 'react';
import styles from '../../Assets/css/Card/WishlistCard.module.css';
import BigThumnail from '../../Assets/images/Course-Card/SmallCourseThumnail.jpg';
import {BsHeartFill} from 'react-icons/bs';
import {IoHeartDislikeOutline} from 'react-icons/io5';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromWish } from '../../Redux/WishSlice';

const WishlistCard = ({ className, id }) => {
    const [removeWish, setRemoveWish ] = useState(false);

    const dispatch = useDispatch()

    const removeWishList =()=>{
        setRemoveWish(true)

        dispatch(removeFromWish({ id }))

        setTimeout(() => {
            setRemoveWish(false)
        }, 2000);
    }

return (
    <>
        <div dataid={id} className={styles.WishlistCardContainer + ` ${className ?? '' } pb-2`}>

            <div className={styles.SmallCardThumnail}>
                <img src={BigThumnail} alt="Amar Skill" draggable="false" />
            </div>

            <div className={styles.CourseCardInfoWrap}>

                <div className={styles.CourseTecherInfo}>
                    <div className={styles.InstractorName}>
                        <h2>Maruf Hossain</h2>
                    </div>

                    <div className={styles.HeaderRemoveIcon}>
                        <Link to="" onClick={removeWishList} className='courseBigBuyNow '> {!removeWish ? <IoHeartDislikeOutline color="#F59A26" fontSize={18} /> : <BsHeartFill color="#F59A26" fontSize={18} /> }</Link>
                    </div>
                </div>

                <div className={styles.SmallCardCouseTitle}>
                    <h4>React Master course Zero to Hero</h4>
                </div>

                <div className={styles.SmallCardBottomWrap +' cardBottomWrapper'}>
                    <div className={styles.PriceStyle}>
                        <p className='coursePrice'>Tk.2000.00</p>
                    </div>
                    
                    <div className={styles.BuyNowButtonWrap}>
                        <Link to={''}>Buy Now</Link>
                    </div>
                </div>
            </div>


        </div>
    </>
  );
};

export default WishlistCard;