import React , { useState } from 'react';
import { Offcanvas } from 'react-bootstrap';
// import {BsFillCartFill} from 'react-icons/bs';
import CartBody from './CartBody';
import "../../Assets/css/Carts/CartCanvas.css";


function OffCanvasRight({ showModal, ...props }) {
    const [show, setShow]   = useState({showModal});
    const handleClose       = () => setShow(false);
  
    return (
      <>
        <Offcanvas show={show} onHide={handleClose} {...props}>
          <Offcanvas.Header closeButton>
                <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
           <Offcanvas.Body>
                <CartBody />
           </Offcanvas.Body>
        </Offcanvas>
      </>
    );
}


const Cart = ({ visible }) => {
    return (
        <>
            <OffCanvasRight key={0} placement={'end'} showModal={visible}  /> 
        </>
    );
};

export default Cart;