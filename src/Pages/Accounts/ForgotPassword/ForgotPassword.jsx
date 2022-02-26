
import React, { useEffect, useRef, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../../Assets/css/Accounts/Accounts.module.css'
import { MdEmail } from 'react-icons/md';
import ResetPassword from './ResetPassword';
import InputValidation from '../../../Validators/InputValidation';
import InputAnimation from '../../../Utilities/InputAnimation';

const ForgotPassword = () => {

    const [isOTPSend, setIsOTPSend] = useState(false);
    const [isOTPVerified, setIsOTPVerified] = useState(false);
    const [messageBox, setMessageBox] = useState(null);
    const otpRef    = useRef(null);
    const emailRef  = useRef(null);
    const formRef   = useRef(null)

    const sendOTPToMail = () => {

        setMessageBox(<InputValidation inputElem={emailRef.current} isValidState={setIsOTPSend}/>)
        // server response will come 
        setIsOTPSend(true)
    };

    const submitToVerifyOTP = () => {
        if(otpRef.current){
            // console.log(otpRef.current);
            setMessageBox(<InputValidation inputElem={otpRef.current} isValidState={setIsOTPVerified}/>)
            // alert('hi')
        }else{
            setMessageBox(null)
        }
        // return;

        setIsOTPVerified(false)
    };


    useEffect(() => {
        InputAnimation(formRef.current.querySelectorAll('.formInput'));
    }, [])

    return (
        <>


            <div className={styles.accountBackground}>


                <div className={styles.accountLogo}>
                    <div className={styles.innerWrapper}>
                        <Link to={'/'} style={{ width: 100 }}>x</Link>
                    </div>
                </div>


                <div ref={formRef} className={styles.formDivLogin}>

                    {
                        !isOTPVerified ? (

                            <div className={styles.loginInfo}>
                                <div className={styles.loginTitle}>
                                    <p>{!isOTPSend ? 'Reset Your Password with Email!' : 'Verify Your OTP!'}</p>
                                </div>
                                
                                <div className={styles.inputField}>
                                    {
                                        !isOTPSend ? (
                                            <>
                                                <MdEmail /> <input ref={emailRef} className='formInput' data-text="Email" type="email" placeholder='Email' required />
                                            </>
                                        ) : (
                                            <>
                                            <input ref={otpRef} className='formInput' data-type="number" data-text="OTP" type="text" placeholder='OTP' required />
                                            </>
                                        )
                                    }

                                </div>

                                { messageBox }

                                <div className={styles.inputButton}>
                                    {
                                        !isOTPSend ? (
                                            <Button onClick={sendOTPToMail}> Send OTP </Button>
                                        ) : (
                                            <Button onClick={submitToVerifyOTP}> Verify </Button>
                                        )
                                    }
                                </div>

                            </div>
                        ) : (
                            <ResetPassword />
                        )
                    }

                </div>

                <div className={styles.bottomBg}></div>
            </div>

        </>
    );
};

export default ForgotPassword;