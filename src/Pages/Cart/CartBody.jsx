import React from 'react';
import styles from '../../Assets/css/Carts/CardBody.module.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems, removeFromCart, resetCart } from '../../Redux/CartSlice';

const CartBody = () => {
  const cart      = useSelector(getAllCartItems);
  const dispatch  = useDispatch();
  const resetCartItems = ()=>{
    dispatch(resetCart())
  }

  const removeCartSingleItem = (e)=>{
    const id = e.target.id;
    if (id){
      dispatch(removeFromCart({id: Number(id)}))
    }
  }

  return (
    <>
      <div className={styles.CartBodySectionWrap}>
         
         <div className={styles.CartBodyTop+' table-responsive'}>
            <h4 className={styles.CartBodyTopTitle}><span>{cart.courses.length}</span> Course In Cart</h4>
              <Table striped bordered hover size="sm">
              <tbody>

                  <tr className={styles.CustomThead}>
                     <th>#</th>
                     <th>Course Name</th>
                     <th width="80">Price (Tk)</th>
                     <th>Action</th>
                  </tr>

                  {
                    cart.courses.map((course, index) =>(
                      <tr className={styles.CustomTDate} key={index}>
                        <td>{++index}</td>
                        <td><Link to={'coursedetails/1'} className={styles.CartCourseTitle}>{course.courseName ?? ''}</Link></td>
                        <td>{course.price ?? 0}</td>
                        <td>
                          <div className={styles.CustomRemoveCart}>
                            <Link to="" id={course.id} onClick={removeCartSingleItem}> <FaTimes /> </Link>
                          </div>
                        </td>
                      </tr>
                    ))
                  }
                  
                  <tr className={styles.CustomTDate}>
                    <td colSpan={2} className={styles.SubHeading}>Sub Total</td>
                    <td colSpan={2}>{cart.total ?? 0}</td>
                  </tr>

                  <tr className={styles.CustomTDate}>
                    <td colSpan={2} className={styles.SubHeading}>Discount</td>
                    <td colSpan={2}>0</td>
                  </tr>

                  <tr className={styles.CustomTDate}>
                    <td colSpan={2} className={styles.SubHeading}>Grant Total</td>
                    <td colSpan={2}>{cart.total ?? 0}</td>
                  </tr>

                  <tr>
                      <td colSpan={4}> 
                        <div className={styles.CustomCheckoutBtnGroup}>
                            <Link to="">Checkout</Link>
                            <Link to="" onClick={resetCartItems} className={styles.CustomCancelBtn}>Cancel</Link>
                        </div>
                      </td>
                  </tr>

              </tbody>
            </Table>
         </div>

      </div>
    </>
  );
};

export default CartBody;