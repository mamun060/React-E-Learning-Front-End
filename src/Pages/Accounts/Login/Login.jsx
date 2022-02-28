
import React, { useEffect, useState, useRef} from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../Assets/css/Accounts/Accounts.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { IoIosLock } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import InputAnimation from '../../../Utilities/InputAnimation';

const Login = () => {

    const [isShow, setIsShow] = useState(false);
    const togglePassword = ()=> setIsShow(!isShow);
    const formRef = useRef(null)

    useEffect(()=>{
        InputAnimation(formRef.current.querySelectorAll('.formInput'));
    },[])

    return (
        <>
            <div className={styles.accountBackground}>

                
                <div className={styles.accountLogo}>
                    <div className={styles.innerWrapper}>
                        <Link to={'/'} style={{ width: 100}}>x</Link>
                    </div>
                </div>
                

                <div ref={formRef} className={styles.formDivLogin}>
                    
                    <div className={styles.loginInfo}>
                        <div className={styles.loginTitle}>
                            <p>log in and learn what you want!</p>
                        </div>
                        <div className={styles.inputField}>
                            <MdEmail/> <input className='formInput' data-text="Email" type="email" placeholder='Email' required />
                        </div>

                        <div className={styles.inputField}>
                            <IoIosLock style={{ fontSize: 30}}/>
                            <input className='formInput' required type={!isShow ? "password" : 'text'} data-text="Password" placeholder='Password'/> 
                                <span type="button" onClick={togglePassword}>
                                     {isShow ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                                </span>
                        </div>  

                        <div className={styles.inputButton}>
                            <Button> Log in </Button>
                        </div>                       
                                              
                        <div className={styles.passForgetArea}>
                            <Link to="/forgot-password" className={styles.forgetLink}>Forget Password?</Link>
                        </div>  

                        {/* <div className={styles.firebaseArea}>
                            <h5 className={styles.firebaseText}> Or Log in with </h5>
                        </div> 

                        <div className={styles.firebaseLogin}>
                            <div className={styles.googleFirebaseLogin}>
                                <button> <FcGoogle/> Google </button>
                            </div>
                            <div className={styles.facebookFirebaseLogin}>
                                <button> <BsFacebook/> Facebook </button>
                            </div>
                        </div> */}

                        <div className={styles.signUpArea}>
                            <h5 className={styles.ifAccount}> Don’t have an account? <span> <Link to="/register">Sign up</Link></span> </h5>
                        </div>                         

                    </div>
                </div>
            {/* 
                <div className={styles.accountBgRight}>
                    <img draggable="false" src={accountBg} alt="accountBg" />
                </div> */}
               
                <div className={styles.bottomBg}>
                    {/* <img src={accountBg} alt="" /> */}
                </div> 
            </div>
         
        </>
    );
};

export default Login;