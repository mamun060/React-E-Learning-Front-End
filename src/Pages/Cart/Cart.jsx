import React, { useState, useEffect, useRef} from 'react';
import { Button, Offcanvas } from 'react-bootstrap';
import CartBody from './CartBody';
import "../../Assets/css/Carts/CartCanvas.css";


const OffCanvasRight = ({ showModal, ...props }) => {

    const [show, setShow]   = useState({showModal});

    const removefirstCart = () => {
      return localStorage.removeItem('isFirstCart');
    }

    const handleClose = () =>{ 
      setShow(false)
      removefirstCart()
    };
    
    const modalRef = useRef(null)

    return (
      <>
        <Offcanvas id="cartModal" show={show} onHide={handleClose} {...props} backdropClassName="cartBackdrop">
          <Offcanvas.Header closeButton ref={modalRef}>
            <Offcanvas.Title></Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <CartBody />
          </Offcanvas.Body>
        </Offcanvas>
      </>
    );
};


const Cart = React.memo(({ visible }) => {

   useEffect(()=>{
     document.querySelector('body').style.overflow = 'auto';
   },[])

    return (
        <>
            <OffCanvasRight key={0} placement={'end'} showModal={visible}  /> 
        </>
    );
});

export default Cart;