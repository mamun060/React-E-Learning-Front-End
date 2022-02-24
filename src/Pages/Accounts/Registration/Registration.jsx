import React , { useState, useRef } from 'react';
import { Button} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../Assets/css/Accounts/Accounts.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { IoIosLock } from 'react-icons/io';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import { useEffect } from 'react';

const Registration = () => {

    const [isShow, setIsShow] = useState(false);
    const togglePassword = ()=> setIsShow(!isShow);
    
    useEffect(()=>{
        const placeHolders = document.querySelectorAll('.formInput');
        if(placeHolders?.length){

            placeHolders.forEach(placeHolderRef => {
                placeHolderRef.addEventListener('focus', function(){
                    const placeText  = this.getAttribute('data-text');
                    this.placeholder = placeText;
                    this.placeholder = "";
                });
        
                placeHolderRef.addEventListener('blur', function(){
                    const placeText  = this.getAttribute('data-text');
                    this.placeholder = placeText;
                });
            })
        }
    },[])

    return (
        <>
            <div className={styles.accountBackground}>

                
                <div className={styles.accountLogo}>
                    <div className={styles.innerWrapper}>
                        <Link to={'/'} style={{ width: 100}}>x</Link>
                    </div>
                </div>
                

                <div className={styles.formDivRegister}>
                    
                    <div className={styles.loginInfo}>
                        <div className={styles.loginTitle}>
                            <p>Sign up and learn what you want!</p>
                        </div>
                        <div className={styles.inputField}>
                            <RiShieldUserLine/> <input className='formInput' data-text="Full Name" type="text" placeholder='Full Name' required />
                        </div>
                        <div className={styles.inputField}>
                            <MdPhoneInTalk/> <input className='formInput' data-text="Phone" type="text" placeholder='Phone' required />
                        </div>

                        <div className={styles.inputField}>
                            <MdEmail/> <input type="text" className='formInput' data-text="Email" placeholder='Email' required />
                        </div>

                        <div className={styles.inputField}>
                            <IoIosLock style={{ fontSize: 30}}/>
                            <input className='formInput' required data-text="Password" type={!isShow ? "password" : 'text'} placeholder='Password'/> 
                                <span type="button" onClick={togglePassword}>
                                     {isShow ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                                </span>
                        </div>  

                        <div className={styles.inputField}>
                            <IoIosLock style={{ fontSize: 30}}/>
                            <input className='formInput' data-text="Confirm Password" required type={!isShow ? "password" : 'text'} placeholder='Confirm Password'/> 
                                <span type="button" onClick={togglePassword}>
                                     {isShow ? <AiOutlineEye/> : <AiOutlineEyeInvisible/>}
                                </span>
                        </div>  

                        <div className={styles.inputButton}>
                            <Button> Sign Up </Button>
                        </div>     

                        <div className={styles.signUpArea}>
                            <h5 className={styles.ifAccount}> Don’t have an account? <span> <Link to="/login">Log in</Link></span> </h5>
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

export default Registration;