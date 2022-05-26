import React, { useEffect, useState } from 'react';
import Part from './Part';
import Purchase from '../Purchase/Purchase';

const Parts = () => {

    const [parts, setParts] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/part')
            .then(res => res.json())
            .then(data => setParts(data))
    }, [])



    return (
        <div className='my-20 max-w-7xl mx-auto px-12'>
            <div className='text-center mt-10 mb-14'>
                <h2 className='text-primary text-xl font-bold uppercase mb-4'>Our Equipments</h2>
                <h3 className='text-5xl'>Equipments We Provide</h3>
            </div>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    parts.slice(parts.length-3, parts.length).map(part => <Part
                        key={part._id}
                        part={part}
                    ></Part>)
                }
            </div>
        </div>
    );
};

export default Parts;