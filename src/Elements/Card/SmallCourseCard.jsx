/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useCallback, useState, useEffect } from 'react';
import styles from '../../Assets/css/Card/SmallCourseCard.module.css';
import BigThumnail from '../../Assets/images/Course-Card/SmallCourseThumnail.jpg';
import { BsHeartFill, BsShareFill, BsCart3, BsHeart, BsFillCartFill} from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWish } from '../../Redux/WishSlice';
import Cart from '../../Pages/Cart/Cart';
import { addToCart } from '../../Redux/CartSlice';


const SmallCourseCard = ({ className }) => {
    const [isAddToCart, setIsAddToCart] = useState(false);
    const [cart, setCart] = useState(null)
    const [isAddToWish, setIsAddToWish] = useState(false);
   
    const dispatch      = useDispatch()
    const addToWishList = () => {
        setIsAddToWish(!isAddToWish)

        if (!isAddToWish){
            dispatch(addToWish({
                id: new Date().getTime(),
                courseName: 'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।',
                price: 900,
                quantity: 1,
                inBasket: true
            }))
        }else{
            // remove item 
        }

    }

    const firstCart = ()=>{
        return localStorage.getItem('isFirstCart');
    }

    const setfirstCart = (value)=>{
        return localStorage.setItem('isFirstCart', value);
    }

    const visibleCart = () => {
        
        dispatch(addToCart({
            id: new Date().getTime(),
            courseName: 'কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।',
            price: 900,
            quantity: 1
        }))

        if (!firstCart()){
            setIsAddToCart(true)
        }


        setfirstCart(true)

    }

    useEffect(() => {
        setCart(<Cart visible={isAddToCart} />)
    }, [])


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
                            <Link to='' onClick={addToWishList}> {isAddToWish ? <BsHeartFill /> : <BsHeart />} </Link>
                            { 
                                !isAddToCart ? 
                                (<Link to='' onClick={visibleCart}><BsCart3 /></Link>) : 
                                (<Link to={''}><BsFillCartFill color='#142370'/> {cart}</Link>)
                            }
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
                            <Link to={''} className='courseBigBuyNow'>Buy Now</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SmallCourseCard;