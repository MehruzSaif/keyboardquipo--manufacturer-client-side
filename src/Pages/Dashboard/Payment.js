import React from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51L3cI7CajrJVaan3NlaHdkvLIcatSlg8VGTkmvDDPRE1zkrP1RhziyQTKQv5zLTHLa2KG7iLFdbBesT7e73DjxRB00UzXuZhiK');

const Payment = () => {

    const { id } = useParams();
    const url = `https://fathomless-gorge-87844.herokuapp.com/booking/${id}`

    const { data: order, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()))

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className='px-12'>

            <div className="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div className="card-body">
                    <p className='text-success font-bold'>Hello, {order.buyerName}</p>
                    <h2 className="card-title">Please Pay for: {order.partName}</h2>
                    <p>Your Ordered invoice no: {order._id}</p>
                    <p>Your Ordered quantity: {order.quantity}</p>
                    <p>Please pay: ${order.price}</p>
                </div>
            </div>
            <div className="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div className="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm order={order} />
                    </Elements>


                </div>
            </div>
        </div>

    );
};

export default Payment;