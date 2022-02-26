import React , { useState, useRef, useEffect } from 'react';
import { Button, Tab, Tabs} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../Assets/css/Accounts/Accounts.module.css'
import { FcGoogle } from 'react-icons/fc';
import { BsFacebook } from 'react-icons/bs';
import { IoIosLock } from 'react-icons/io';
import { MdEmail, MdPhoneInTalk } from 'react-icons/md';
import { RiShieldUserLine } from 'react-icons/ri';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import InputAnimation from '../../../Utilities/InputAnimation';

const StudentRegistration = () => {

    const [isShow, setIsShow] = useState(false);
    const togglePassword = ()=> setIsShow(!isShow);
    const formRef = useRef(null)
    
    useEffect(()=>{
        InputAnimation(formRef.current.querySelectorAll('.formInput'));
    },[])

    return (
            <div ref={formRef}>

                <div className={styles.loginTitle}>
                    <p>Sign up Student </p>
                </div>

                <div className={styles.inputField}>
                    <RiShieldUserLine/> <input className='formInput' data-text="Full Name" type="text" placeholder='Full Name' required />
                </div>
                <div className={styles.inputField}>
                    <MdPhoneInTalk/> <input className='formInput' data-text="Phone" type="text" placeholder='Phone' required />
                </div>

                <div className={styles.inputField}>
                    <MdEmail/> <input type="email" className='formInput' data-text="Email" placeholder='Email' required />
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
    );
};

export default StudentRegistration;