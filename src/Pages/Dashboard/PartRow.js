import React from 'react';
import { toast } from 'react-toastify';

const PartRow = ({ equipment, index, refetch }) => {

    const { _id, name, availableQuantity, img } = equipment;

    const handleDelete = id => {
        fetch(`http://localhost:5000/part/${id}`, {
            method: 'DELETE',
            headers: {
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            if(data.deletedCount) {
                toast.success(`${name} id deleted.`)
                refetch();
            }
        })
    }
 
    return (
        <tr>
            <th>{index + 1}</th>
            <td><div class="avatar">
                <div class="w-14 rounded-xl">
                    <img src={img} alt={name}/>
                </div>
            </div></td>
            <td>{name}</td>
            <td>{availableQuantity}</td>
            <td><button onClick={() => handleDelete(_id)} class="btn btn-xs btn-error text-white">Delete</button></td>
        </tr>
    );
};

export default PartRow;