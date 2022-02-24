import React from 'react';
import { Button, Modal, Table } from 'react-bootstrap';
import styles from '../../Assets/css/StudentDashboard/PurchaseInvoice.module.css';
import thumnail from '../../Assets/images/Thambnile/CourseThambnile.png';
import { Link } from 'react-router-dom';

function InvoiceModal(props) {
    return (
      <Modal
        {...props}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton></Modal.Header >
        <Modal.Body>
          <Table striped bordered hover size="sm" responsive="sm">
                <tbody>
                    <tr>
                        <th colSpan={2} className={styles.OrderTableHeading}>Order Details</th>
                    </tr>
                    <tr>
                        <th style={{ width:'200px' }}>Date</th>
                        <td>22/02/2022</td>
                    </tr>
                    <tr>
                        <th>Invoice</th>
                        <td>#835858</td>
                    </tr>
                    <tr>
                        <th>Total Price</th>
                        <td>4000Tk</td>
                    </tr>
                    <tr>
                        <th>Total Bill</th>
                        <td>4000Tk</td>
                    </tr>
                </tbody>
           </Table>
           <div className={styles.CoursePurchaseInvoiceList+' table-responsive '}>
                <Table striped bordered hover size="sm">
                        <tbody>
                            <tr className={styles.OrderTableHeading}>
                                <th>#</th>
                                <th className={styles.CourseThumTitleWrap}>Course Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                            <tr>
                                <td>01</td>
                                <td>
                                    <div className={styles.CourseThumTitle}>
                                        <img src={thumnail} alt="" />
                                        <h4>React JS | রিডাক্স | ফায়ারবেজ | রিয়েল লাইফ প্রযেক্ট</h4>
                                    </div>
                                </td>
                                <td className='text-center'>4000Tk</td>
                                <td className={styles.CustomActionBtn + ' text-center'}><Link to="">Start</Link></td>
                            </tr>
                        </tbody>
                </Table>
           </div>
        </Modal.Body>
       
      </Modal>
    );
}


const PurchaseInvoice = () => {
    const [modalShow, setModalShow] = React.useState(false);

    return (
      <>
        <Button className={styles.ModalBtnStyle} onClick={() => setModalShow(true)}>
          View Order
        </Button>
  
        <InvoiceModal
          show={modalShow}
          onHide={() => setModalShow(false)}
        />
      </>
    );
};

export default PurchaseInvoice;