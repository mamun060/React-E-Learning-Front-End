import React, { useState } from 'react';
import { Modal } from 'react-bootstrap';
import CertificateButton from '../../Elements/Button/CertificateButton';
import styles from '../../Assets/css/Partials/CertificateValidationModal.module.css';

function CertificateModal(props) {
    const [isValid, setIsValid] = useState(false);
    const [isSubmit, setIsSubmit] = useState(false);

    const submitToValidate = ()=>{
        setIsSubmit(true)
    }

    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            <h4>Certificate Validation</h4>
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className={styles.CertificateValidateInput  + ' my-4'}>
              <input type="text" placeholder='Enter Certificate ID'/>
              <button onClick={submitToValidate}>Check</button>
          </div>

          {
              isSubmit ? (
                <div className={styles.ValidationAleart}>
                        {
                            isValid ? (<h4 className='alert alert-success'>Congratulations! Your certificate is valid</h4>) : (
                                <h4  className='alert alert-danger'>Sorry! This certificate is Not valid!</h4>
                            )
                        }
                </div>
              ): null
          }
         
        </Modal.Body>
      </Modal>
    );
}

const CertificationValidationModal = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <CertificateButton name="Certificated Validation" link={''} setmodalShow={setModalShow} />
  
        <CertificateModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
};

export default CertificationValidationModal;