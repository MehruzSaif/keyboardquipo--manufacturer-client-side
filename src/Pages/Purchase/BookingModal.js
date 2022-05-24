import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';

const BookingModal = ({setConfirmOrder }) => {

    const [user, loading, error] = useAuthState(auth);

    const { partId } = useParams();
    const [part, setPart] = useState({});
    const { _id, name, price, placedOrder } = part;

    useEffect(() => {
        const url = `http://localhost:5000/part/${partId}`;
        fetch(url)
            .then(res => res.json())
            .then(data => setPart(data))
    }, [partId])

    const handleBooking = event => {
        event.preventDefault();

        const booking = {
            partId: _id,
            partName: name,
            partPrice: price,
            partOrder: placedOrder,
            buyer: user.email,
            buyerName: user.displayName
        }

        fetch('http://localhost:5000/booking', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {

                if(data.success) {
                    toast.error("Order didn't Placed");
                }
                else {
                    toast.success(`${name}, order placed`);
                }

                // to close the modal
                setConfirmOrder(null);
            })
    }


    return (
        <div>

            <input type="checkbox" id="booking-modal" className="modal-toggle" />
            <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-lg text-center">Confirm Order</h3>

                    <form onSubmit={handleBooking} className='mt-5 grid grid-cols-1 gap-3 justify-items-center'>
                        <input type="text" name="name" disabled value={user?.displayName || ''} className="input input-bordered w-full max-w" />
                        <input type="email" name="email" disabled value={user.email || ''} className="input input-bordered w-full max-w" />
                        <input type="text" name="phone" placeholder="Phone No." className="input input-bordered w-full max-w" />
                        <input type="submit" value="Confirm Order" className="btn btn-accent w-full max-w" />
                    </form>

                </div>
            </div>
        </div>
    );
};

export default BookingModal;