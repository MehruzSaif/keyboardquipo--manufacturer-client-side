import React from 'react';
import { useNavigate } from 'react-router-dom';

const Part = ({part}) => {

    const {_id, name, img, price, quantity, orderQuantity, description} = part;

    const navigate = useNavigate();
    const navigateToSPurchase = id => {
        navigate(`/part/${id}`);
    }

    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
                <img src={img} alt="Shoes" className="rounded-xl" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title">{name}</h2>
                <p>{description}</p>
                <p><b>Quantity: {quantity}</b></p>
                <p><b>Minimum Order: {orderQuantity}</b></p>
                <p><b>Price: {price}</b></p>
                <div className="card-actions">
                    <button onClick={() => navigateToSPurchase(_id)} className="btn btn-primary text-white">Order Now</button>
                </div>
            </div>
        </div>
    );
};

export default Part;