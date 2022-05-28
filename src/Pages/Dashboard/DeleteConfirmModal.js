import React from 'react';
import { toast } from 'react-toastify';

const DeleteConfirmModal = ({ deletingEquipment, refetch, setDeletingEquipment }) => {

    const { _id, name } = deletingEquipment;

    const handleDelete = id => {
        fetch(`https://fathomless-gorge-87844.herokuapp.com/part/${id}`, {
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
                    setDeletingEquipment(null)
                    refetch();
                }
            })
    }

    return (
        <div>
            <input type="checkbox" id="delete-confirm-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-red-500">Are you sure you want to delete {name}?</h3>

                    <p className="py-4 text-yellow-500">If you delete it, it will be delete from Database also!</p>
                    <div className="modal-action">

                        <button onClick={() => handleDelete(_id)} className="btn btn-error text-white">Confirm</button>

                        <label for="delete-confirm-modal" className="btn btn-success
                        ">Cancel</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmModal;