import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyOrders = () => {


    const [orders, setOrders] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://fathomless-gorge-87844.herokuapp.com/booking?buyer=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(res => {
                    // console.log('res', res);
                    if (res.status === 401 || res.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return res.json()
                })
                .then(data => {

                    setOrders(data)

                });
        }
    }, [user])


    return (
        <div>
            <h2 className='ml-3 mt-2 my-5'>My Orders: {orders.length}</h2>

            <div className="overflow-x-auto">
                <table className="table w-full">

                    <thead>
                        <tr>
                            <th>Sl No.</th>
                            <th>Buyer Email</th>
                            <th>Order Name</th>
                            <th>Quantity</th>
                            <th>Price</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    
                    <tbody>
                        {
                            orders.map((order, index) => <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td>{order.buyer}</td>
                                <td>{order.partName}</td>
                                <td>{order.quantity}</td>
                                <td>{order.price}</td>
                                {/* <td>
                                    {(order.partPrice && !order.paid) && <Link to={`/dashboard/payment/${order._id}`}><button className='btn btn-xs btn-success'>Pay</button></Link>}
                                    {(order.partPrice && order.paid) && <span className='text-success'>Paid</span>}
                                </td> */}
                                <td>
                                    {order.paid ? <div>
                                        <p><span className='text-success'>Paid</span></p>
                                        <p>Transaction id: <span className='text-orange-400'>{order.transactionId}</span></p>
                                    </div>
                                        : <Link to={`/dashboard/payment/${order._id}`}> <button className='btn btn-xs btn-success'>Pay</button></Link>}
                                </td>

                                {/* <td>
                                    <label for="cancel-order-modal" className="btn btn-xs btn-error">open modal</label>
                                    {(!order.paid) && <button className=''>Cancel Order</button>}
                                </td> */}
                            </tr>)
                        }



                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyOrders;