import React from 'react';
import { Button, Modal } from 'react-bootstrap';
import { FaEdit } from 'react-icons/fa';
import UserProfileEditForm from './UserProfileEditForm';

function MyProfileEditModal(props) {

    const { setmodalvisible } = props;
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered 
        style={{ zIndex:'20001'}}
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
              Profile Edit
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <UserProfileEditForm setmodalvisible={setmodalvisible} />
        </Modal.Body>
      </Modal>
    );
}

const UserProfileEdit = () => {
    const [modalShow, setModalShow] = React.useState(false);
    return (
        <>
        <span onClick={() => setModalShow(true)}>
             <FaEdit fontSize={28} color={'#F59A26'} />
        </span>
  
        <MyProfileEditModal
          show={modalShow}
          onHide={() => setModalShow(false)}
          setmodalvisible={setModalShow}

        />
      </>
    );
};

export default UserProfileEdit;