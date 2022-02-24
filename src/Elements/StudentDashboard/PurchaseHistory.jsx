import React from 'react';
import { Table } from 'react-bootstrap';
import styles from '../../Assets/css/StudentDashboard/PurchaseHistory.module.css';
import { Link } from 'react-router-dom';
import PurchaseInvoice from './PurchaseInvoice';

const PurchaseHistory = () => {
    return (
        <>
           <div className={styles.PurchaseHistoryWrap+' table-responsive'}>
                <Table striped bordered hover size="sm">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Date</th>
                        <th>Invoice Id</th>
                        <th>Bill Amount</th>
                        <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>20/02/2022</td>
                        <td>#838564</td>
                        <td>5000</td>
                        <td><Link to=""><PurchaseInvoice /></Link></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>20/02/2022</td>
                        <td>#838564</td>
                        <td>5000</td>
                        <td><Link to=""><PurchaseInvoice /></Link></td>
                        </tr>
                        <tr>
                        <td>3</td>
                        <td>20/02/2022</td>
                        <td>#838564</td>
                        <td>5000</td>
                        <td><Link to=""><PurchaseInvoice /></Link></td>
                        </tr>
                        <tr>
                        <td>4</td>
                        <td>20/02/2022</td>
                        <td>#838564</td>
                        <td>5000</td>
                        <td><Link to=""><PurchaseInvoice /></Link></td>
                        </tr>
                        <tr>
                        <td>5</td>
                        <td>20/02/2022</td>
                        <td>#838564</td>
                        <td>5000</td>
                        <td><Link to=""><PurchaseInvoice /></Link></td>
                        </tr>
                    </tbody>
                </Table>
           </div>
        </>
    );
};

export default PurchaseHistory;