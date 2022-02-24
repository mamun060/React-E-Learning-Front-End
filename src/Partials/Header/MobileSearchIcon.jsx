import React,{useState} from 'react'
import { Offcanvas } from 'react-bootstrap';
import {BsSearch} from 'react-icons/bs';
import styles from '../../Assets/css/Partials/MobileHeader.module.css';

function OffCanvasTop({ name, ...props }) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
      <>
        <BsSearch onClick={handleShow} className={styles.mobileSearchIconBar} />

        <Offcanvas show={show} onHide={handleClose} {...props} backdrop={'static'} className='headerSearch' >
          <Offcanvas.Header closeButton></Offcanvas.Header>
          <Offcanvas.Body>
            <div className={styles.CustomInputSearch}>
                <input type="text" placeholder='Search ...'/>
            </div>
        </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}

const MobileSearchIcon = () => {
  return (
    <>
      <OffCanvasTop placement={'top'} name={<BsSearch />} />
    </>
  )
}

export default MobileSearchIcon