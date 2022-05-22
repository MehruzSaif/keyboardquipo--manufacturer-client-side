import React from "react";
import bg2 from '../../assets/bg2.png';


const Contact = () => {
    return (
        <div style={{
            background: `url(${bg2})`
        }} className='bg-primary py-14 px-10'>
            <div className='text-center pb-14 text-white'>
                <p className='text-xl font-bold text-transparent bg-clip-text text-black'>
                    Contact Us
                </p>
                <h1 className='text-4xl text-black'>Stay connected with us</h1>
            </div>
            <div className='grid grid-cols-1 justify-items-center gap-5'>
                <input
                    type='text'
                    placeholder='Email Address'
                    className='input w-full max-w-md'
                />
                <input
                    type='text'
                    placeholder='Subject'
                    className='input w-full max-w-md'
                />
                <textarea
                    className='textarea w-full max-w-md'
                    placeholder='Your message'
                    rows={6}
                ></textarea>
                <button className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-accent">Submit</button>
            </div>
        </div>
    );
};

export default Contact;