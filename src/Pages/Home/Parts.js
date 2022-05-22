import React from 'react';
import switches from '../../assets/switches.jpg';
import keycaps from '../../assets/keycaps.jpg';
import barebone from '../../assets/barebone.jpg';
import Part from './Part';

const Parts = () => {

    const parts = [
        {
            _id: 1,
            name: 'Mechanical Switches',
            description: '',
            img: switches
        },
        {
            _id: 2,
            name: 'PBT Keycaps',
            description: '',
            img: keycaps,
        },
        {
            _id: 3,
            name: 'Aluminum Barebone',
            description: '',
            img: barebone,
        },
    ]
    
    return (
        <div className='my-20 max-w-7xl mx-auto px-12'>
            <div className='text-center mt-10 mb-14'>
            <h2 className='text-primary text-xl font-bold uppercase mb-4'>Our Equipments</h2>
            <h3 className='text-5xl'>Equipments We Provide</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.map(part => <Part
                    key={part._id}
                    part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;