import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';

const BookingModal = ({setConfirmOrder}) => {

    const [user, loading, error] = useAuthState(auth);

    const handleBooking = event => {
        event.preventDefault();
        setConfirmOrder(null);
    }

    const booking = {
        patient: user.email,
        patientName: user.displayName,
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