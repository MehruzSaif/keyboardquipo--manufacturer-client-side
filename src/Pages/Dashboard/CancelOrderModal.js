import React from 'react';
import { toast } from 'react-toastify';

const CancelOrderModal = ({ cancelOrder, setCancelOrder, refetch, order }) => {

    const { _id, name } = setCancelOrder;

    const handleCancelOrder = id => {
        fetch(`http://localhost:5000/booking/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.deletedCount) {
                    toast.success(`${name} is deleted.`)

                    // to close the modal
                    setCancelOrder(null)
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" class="modal-toggle" />
            <div class="modal modal-bottom sm:modal-middle">
                <div class="modal-box">
                    <h3 class="font-bold text-lg text-red-500">Are you sure you want to delete {name}?</h3>

                    <p class="py-4 text-yellow-500">If you delete it, it will be delete forever.</p>
                    <div class="modal-action">

                        <button onClick={() => handleCancelOrder(_id)} className="btn btn-error text-white">Delete</button>

                        <label for="cancel-order-modal" class="btn btn-xs btn-error">open modal</label>
                        {(!order.paid) && <button className=''>Cancel Order</button>}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CancelOrderModal;