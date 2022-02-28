/* eslint-disable no-unused-vars */
/* eslint-disable eqeqeq */
/* eslint-disable no-undef */
import React, { useState , useCallback, useRef, memo } from 'react';
import { Col, Row } from 'react-bootstrap';
import { MdSave, MdCancel } from 'react-icons/md';
import styles from '../../Assets/css/StudentDashboard/UserProfileEditForm.module.css';
import { useAuth} from '../../Routes/AuthenticableRoutes';

const UserProfileEditForm = ({ setmodalvisible }) => {
    const authUser = useAuth();
    const inputFileRef = useRef(null);

    const [file, setFile] = useState(null);
    const [filename, setFilename] = useState('');

    const handleClose = () => {
        setmodalvisible(false);
    }

    const filterBySize = (file) => {
        //filter out files larger than 5MB
        return file.size < 5242880;
      };
    
    const fileChangedHandler = event => {
        
        const 
        suportedFiles = ['.png','.jpg','.jpeg'],
        fileRegex     = new RegExp(suportedFiles.join("|"), 'im')

        let 
        file    = event.target.files[0],
        reader  = new FileReader();

        /**Capture filename */
        setFilename(file.name);

        reader.onload = function(e) {
          setFile(e.target.result);
        };

        reader.readAsDataURL(event.target.files[0]);
    
        if (!fileRegex.test(file.name) ) {
          alert(`File does not support. You must use ${suportedFiles.join(", ")} files!`);
          return false;
       }

       if (file.size > 1000000) {
         alert("Please upload a file smaller than 1 MB");
         return false;
       }
       
    };

  

    // useCallback(() => {
    //     console.log(authUser.auth);
    // }, [])


    
    return (
        <>
            <div className={styles.EditFormContainer}>
                <Row>
                    <Col md={12}>
                        <div className={styles.EditFormFileWrap}>
                            <button className="btn btn-primary d-block" onClick={()=> inputFileRef.current.click() }>Uploade Image</button>
                            <input
                            ref={inputFileRef}
                            className='d-none'
                            id="fileInput" 
                            type="file" 
                            placeholder='Choose Image'
                            accept="image/*"
                            // inputProps={{ accept: 'image/*' }}
                            fileFilter={filterBySize}
                            onChange={fileChangedHandler}
                            />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.EditFormWrap}>
                            <label>Name</label>
                            <input type="text" placeholder='Your Name' defaultValue={authUser.user.name} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.EditFormWrap}>
                            <label>Email</label>
                            <input type="email" placeholder='Your Email' defaultValue={authUser.user.email} />
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.EditFormWrap}>
                         <label>Designation</label>
                         <input type="text" placeholder='Designation'/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.EditFormWrap}>
                           <label>Phone</label>
                           <input type="number" placeholder='Your Phone'/>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.EditFormSelectWrap}>
                           <label>Gender</label>
                            {/* <input type="text" placeholder='Gane'/> */}
                            <select name="" id="">
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className={styles.EditFormWrap}>
                            <label>Location</label>
                             <input type="" placeholder='Your Location'/>
                        </div>
                    </Col>
                    <Col md={12}>
                        <div className={styles.EditFormWrap}>
                            <label>Biography</label>
                             <textarea type="" placeholder='Biography' />
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col>
                        <div className={styles.EditFormButtonWrap}>
                            <button onClick={handleClose} className={styles.FormCancleBtn}><MdCancel />Cancel</button>
                            <button className={styles.FormUpdateBtn}><MdSave />Update</button>
                        </div>
                    </Col>
                </Row>
  
            </div>
        </>
    );
};

export default memo(UserProfileEditForm);