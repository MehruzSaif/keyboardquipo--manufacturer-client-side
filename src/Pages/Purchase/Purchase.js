/* import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Shared/Footer';

const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const [order, setOrder] = useState(0);


    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;

        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])

    const { name, img, price, availableQuantity, minimumOrder, placedOrder, description } = part;

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrder(data.placedOrder))
    }, [partId])



    const handleIncreaseQuantity = () => {
        // let { name, _id, description, price, img, quantity, minimumOrder } = part;

        if (placedOrder >= 1000) {
            const increasedOrder = order + 1;
            setOrder(increasedOrder);

        }
    }

    const handleDecreaseQuantity = () => {
        // let { name, _id, description, price, img, quantity, minimumOrder } = part;

        if (order > minimumOrder) {
            const decreasedMinOrder = order - 1;
            setOrder(decreasedMinOrder);
        }
        else {
            alert('ffgdfg')
        }
    }

    const handleOrder = async() => {


        const requestOptions = {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                placedOrder: order,
            }),
        };

        await fetch(
            `http://localhost:5000/part/${partId}`,
            requestOptions
        )
            .then((res) => res.json())
            .then((data) => alert(data.msg))

    }

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl max-w-7xl mx-auto px-12 my-20">
                <figure className="px-10 pt-10">

                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><b>Available Quantity: {availableQuantity}</b></p>
                    <p><b>Minimum Order: {minimumOrder}</b></p>
                    <p><b>Placed Order: {order}</b></p>
                    <p><b>Price: {price}</b></p>
                    <div className="card-actions">

                        <div className="btn-group mt-4">
                            <button onClick={handleDecreaseQuantity} className="btn"><b>-</b></button>
                            <p className='mt-3 mx-2'><b>Quantity</b></p>
                            <button onClick={handleIncreaseQuantity} className="btn"><b>+</b></button>
                        </div>

                    </div>
                </div>

                <button onClick={handleOrder} className="btn btn-sm mb-3">Order</button>
            </div>

            <Footer></Footer>
        </div>

    );
};

export default Purchase; */


import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Footer from '../Shared/Footer';
import BookingModal from './BookingModal';

const Purchase = () => {
    const { partId } = useParams();
    const [part, setPart] = useState({});
    const { name, img, price, availableQuantity, minimumOrder, placedOrder, description } = part;

    const [confirmOrder, setConfirmOrder] = useState(null);

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])

    const handleIncreaseQuantity = () => {
        let { name, _id, img, price, availableQuantity, minimumOrder, placedOrder, description } = part;

        if (placedOrder !== 0) {
            placedOrder = placedOrder + 1;
            const purchase = { name, _id, img, price, availableQuantity, minimumOrder, placedOrder, description };

            const url = `http://localhost:5000/part/${partId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchase)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setPart(data)
                    setPart(purchase);

                })
        }
    }

    const handleDecreaseQuantity = () => {
        let { name, _id, img, price, availableQuantity, minimumOrder, placedOrder, description } = part;

        if (placedOrder !== 0) {
            placedOrder = placedOrder - 1;
            const purchase = { name, _id, img, price, availableQuantity, minimumOrder, placedOrder, description };

            const url = `http://localhost:5000/part/${partId}`;
            fetch(url, {
                method: 'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(purchase)
            })
                .then(res => res.json())
                .then(data => {
                    toast.success('success', data);
                })

            fetch(url)
                .then(res => res.json())
                .then(data => {
                    setPart(data)
                    setPart(purchase);

                })
        }
    }

    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-xl max-w-7xl mx-auto px-12 my-20">
                <figure className="px-10 pt-10">

                    <img src={img} alt="Shoes" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <p><b>Quantity: {availableQuantity}</b></p>
                    <p><b>Minimum Order: {minimumOrder}</b></p>
                    <p><b>Placed Order: {placedOrder}</b></p>
                    <p><b>Price: {price}</b></p>
                    <div className="card-actions">

                        <div className="btn-group mt-4">
                            <button onClick={handleDecreaseQuantity} className="btn"><b>-</b></button>
                            <p className='mt-3 mx-2'><b>Quantity</b></p>
                            <button onClick={handleIncreaseQuantity} className="btn"><b>+</b></button>
                        </div>

                    </div>
                </div>



                <label onClick={(setConfirmOrder)} htmlFor="booking-modal" className="btn text-white mb-5">Place Order</label>
            </div>

            <Footer></Footer>
            {confirmOrder && <BookingModal
            setConfirmOrder={setConfirmOrder}
            ></BookingModal>}
        </div>

    );
};

export default Purchase;