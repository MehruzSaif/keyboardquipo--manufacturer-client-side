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
    const url = `http://localhost:5000/booking/${id}`

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

            <div class="card w-50 max-w-md bg-base-100 shadow-xl my-12">
                <div class="card-body">
                    <p className='text-success font-bold'>Hello, {order.buyerName}</p>
                    <h2 class="card-title">Please Pay for: {order.partName}</h2>
                    <p>Your Ordered invoice no: {order.partId}</p>
                    <p>Your Ordered quantity: {order.partOrder}</p>
                    <p>Please pay: ${order.partPrice}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100">
                <div class="card-body">

                    <Elements stripe={stripePromise}>
                        <CheckoutForm />
                    </Elements>


                </div>
            </div>
        </div>

    );
};

export default Payment;