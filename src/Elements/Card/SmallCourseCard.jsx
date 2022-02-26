/* eslint-disable jsx-a11y/anchor-is-valid */
import React, {useCallback, useState, useEffect} from 'react';
import styles from '../../Assets/css/Card/SmallCourseCard.module.css';
import BigThumnail from '../../Assets/images/Course-Card/SmallCourseThumnail.jpg';
import { BsHeartFill, BsShareFill, BsCart3, BsFillCartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import Cart from '../../Pages/Cart/Cart';


const SmallCourseCard = ({ className }) => {
    const [isAddToCart, setIsAddToCart] = useState(false);
    const [ cart, setCart ] = useState(null)

    const visibleCart = ()=>{
        setIsAddToCart(true)
    }

    useEffect(()=>{
        setCart(<Cart visible={isAddToCart} />)
    },[isAddToCart])

    return (
        <>
            <div className={styles.SmallCourseCardContainer + ` ${className ?? ''} pb-2`}>

                    <div className={styles.SmallCardThumnail}>
                        <img src={BigThumnail} alt="Amar Skill" />
                    </div>

                    <div className={styles.CourseCardInfoWrap}>

                        <div className={styles.CourseTecherInfo}>
                            <div className={styles.InstractorName}>
                                <h2>Maruf Hossain</h2>
                            </div>
                            <div className={styles.InstructorSocailIcon}>
                                <Link to=''><BsHeartFill /></Link>
                                { 
                                !isAddToCart ? 
                                (<Link to='' onClick={visibleCart}><BsCart3 /></Link>) : 
                                (<Link to={''}><BsFillCartFill color='#142370'/> {cart}</Link>)}
                                <Link to=''><BsShareFill /></Link>
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
                                <a className='courseBigBuyNow'>Buy Now</a>
                            </div>
                        </div>
                    </div>


            </div>
        </>
    );
};

export default SmallCourseCard;