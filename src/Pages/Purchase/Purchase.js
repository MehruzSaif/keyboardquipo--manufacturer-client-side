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
    const { name, img, price, availableQuantity, minimumOrder, description } = part;

    // const cost = price.parseInt();
    // const availQty = availableQuantity.parseInt();
    // const minOrder = minimumOrder.parseInt();

    const [orderQuantity, setOrderQuantity] = useState(0);

    const [confirmOrder, setConfirmOrder] = useState(null);

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])


    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setOrderQuantity(data.minimumOrder))
    }, [partId])

    const handleIncreaseQuantity = () => {
        
        let increaseQuantity = parseInt(orderQuantity) + 1;
        if(increaseQuantity <= part.availableQuantity) {
            setOrderQuantity(increaseQuantity);
        }
        else {
            toast.error(`Cannot added more than ${availableQuantity}`);
        }
    }

    const handleDecreaseQuantity = () => {
        
        let DecreaseQuantity = parseInt(orderQuantity) - 1;
        if(DecreaseQuantity >= part.minimumOrder) {
            setOrderQuantity(DecreaseQuantity);
        }else {
            toast.error(`Quantity should be more than or equal ${minimumOrder}`);
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
                    <p><b>Available Quantity: {availableQuantity}</b></p>
                    <p><b>Minimum Order: {minimumOrder}</b></p>
                    <p><b>Quantity Ordered: {orderQuantity}</b></p>
                    <p><b>Total Price: ${price * orderQuantity}</b></p>
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
                part={part}
                price={price * orderQuantity}
                quantity={orderQuantity}
                
            ></BookingModal>}
        </div>

    );
};

export default Purchase;