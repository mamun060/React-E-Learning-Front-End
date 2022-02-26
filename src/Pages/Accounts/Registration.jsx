import React , { useRef ,useState } from 'react';
import { Button, ButtonGroup} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from '../../Assets/css/Accounts/Accounts.module.css'
import StudentRegistration from './Registration/StudentRegistration';
import TeacherRegistration from './Registration/TeacherRegistration';

const Registration = () => {
    const [ isStudentLogin, setIsStudentLogin ] = useState(true);
    const btnGroupRef = useRef(null)

    const toggleRegisterForm = (event)=>{

        btnGroupRef.current.querySelectorAll('button').forEach(btn => {
            btn.classList.remove('active');
        });

        const pattern = /student/im;
        if(pattern.test(event.target.id)){
            setIsStudentLogin(true);
        }else{
            setIsStudentLogin(false);
        }

        event.target.classList.add('active')
    }

    return (
        <>
            <div className={styles.accountBackground}>

                <div className={styles.accountLogo}>
                    <div className={styles.innerWrapper}>
                        <Link to={'/'} style={{ width: 100}}>x</Link>
                    </div>
                </div>
                

                <div className={styles.formDivRegister} id="registerForm">
                    <div className={styles.loginInfo}>

                        <ButtonGroup id='btnGroup' ref={btnGroupRef}>
                            <Button className={styles.studentButton + ' active'} variant="secondary" size="lg" id='student' onClick={toggleRegisterForm}>Student</Button>
                            <Button className={styles.studentButton}  variant="secondary" size="lg" id='teacher' onClick={toggleRegisterForm} >Teacher</Button>
                        </ButtonGroup>
                    
                        {
                            isStudentLogin ? <StudentRegistration/> : <TeacherRegistration/>
                        }
                        
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