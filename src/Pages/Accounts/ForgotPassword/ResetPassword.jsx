
import React, { useEffect, useState, useRef } from 'react';
import { Button } from 'react-bootstrap';
import styles from '../../../Assets/css/Accounts/Accounts.module.css'
import { IoIosLock } from 'react-icons/io';
import { MdEmail } from 'react-icons/md';
import { AiOutlineEye } from 'react-icons/ai';
import { AiOutlineEyeInvisible } from 'react-icons/ai';
import InputAnimation from '../../../Utilities/InputAnimation';

const ResetPassword = () => {

    const [isReset, setIsReset] = useState(false);
    const [isShow, setIsShow] = useState(false);
    const formRef = useRef(null)

    const togglePassword = ()=> setIsShow(!isShow);

    const submitToReset = ()=> {
        // leave message 
        setIsReset(true)
    };

      
    useEffect(()=>{
        InputAnimation(formRef.current.querySelectorAll('.formInput'));
    },[])

    return (
        <>
            <div ref={formRef} className={styles.loginInfo}>
                        
                <div className={styles.inputField}>
                    <MdEmail /> <input className='formInput' data-text="Email" type="email" placeholder='Email' required />
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
                    <Button onClick={submitToReset}> {!isReset ? 'Reset' : 'Processing ...'} </Button>
                </div>

            </div>
        </>
    );
};

export default ResetPassword;