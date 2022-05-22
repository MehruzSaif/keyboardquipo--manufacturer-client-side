import React from 'react';
import quote from '../../assets/icons/quote.svg';
import people1 from '../../assets/people1.png';
import people2 from '../../assets/people2.png';
import people3 from '../../assets/people3.png';
import Review from './Review';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'Mehruz Saif',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California',
            img: people1
        },
        {
            _id: 2,
            name: 'Jaanemaan',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'New York',
            img: people2
        },
        {
            _id: 3,
            name: 'Jaane Jigar',
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'Chicago',
            img: people3
        }
    ]
    return (
        <section className='my-28 max-w-7xl mx-auto px-12'>
            <div className='flex justify-between'>
                <div>
                    <h4 className="text-xl text-primary font-bold">Customers' Reviews</h4>
                    <h2 className='text-3xl'>About Our Products & Services</h2>
                </div>
                <div>
                    <img src={quote} className='lg:w-48 w-24 animated' alt="" />
                </div>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    reviews.map(review => <Review
                        key={review._id}
                        review={review}
                    ></Review>)
                }
            </div>
        </section>
    );
};

export default Testimonials;