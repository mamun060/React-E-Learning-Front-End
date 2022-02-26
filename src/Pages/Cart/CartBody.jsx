import React from 'react';
import styles from '../../Assets/css/Carts/CardBody.module.css';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {FaTimes} from 'react-icons/fa';

const CartBody = () => {
  return (
    <>
      <div className={styles.CartBodySectionWrap}>
         
         <div className={styles.CartBodyTop+' table-responsive'}>
              <h4 className={styles.CartBodyTopTitle}><span>1</span> Course In Cart</h4>
              <Table striped bordered hover size="sm">
              <tbody>

                  <tr className={styles.CustomThead}>
                     <th>#</th>
                     <th>Course Name</th>
                     <th width="80">Price (Tk)</th>
                     <th>Action</th>
                  </tr>

                  <tr className={styles.CustomTDate}>
                      <td>1</td>
                      <td><Link to="" className={styles.CartCourseTitle}>কন্সেপ্ট অফ জাফাস্ক্রিপ্ট কোর্স জিরো টু হিরো।</Link></td>
                      <td>4500</td>
                      <td>
                        <div className={styles.CustomRemoveCart}>
                          <Link to=""> <FaTimes /> </Link>
                        </div>
                      </td>
                  </tr>

                  <tr className={styles.CustomTDate}>
                    <td colSpan={2} className={styles.SubHeading}>Sub Total</td>
                    <td colSpan={2}>5000</td>
                  </tr>

                  <tr className={styles.CustomTDate}>
                    <td colSpan={2} className={styles.SubHeading}>Discount</td>
                    <td colSpan={2}>500</td>
                  </tr>

                  <tr className={styles.CustomTDate}>
                    <td colSpan={2} className={styles.SubHeading}>Grant Total</td>
                    <td colSpan={2}>4500</td>
                  </tr>

                  <tr>
                      <td colSpan={4}> 
                        <div className={styles.CustomCheckoutBtnGroup}>
                            <Link to="">Checkout</Link>
                            <Link to="" className={styles.CustomCancelBtn}>Cancel</Link>
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