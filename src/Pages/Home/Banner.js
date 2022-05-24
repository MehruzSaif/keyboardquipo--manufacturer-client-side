import React from 'react';
import keyboard from '../../assets/keyboard.png';
import bg1 from '../../assets/bg1.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero"
            style={{
                background: `url(${bg1})`
            }}        
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={keyboard} className="max-w animated" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your Next <span className='qwerty'>QWERTY</span></h1>
                    <p className="py-6 font-bold">For mechanical keyboards lovers, by mechanical keyboards lovers. Customize your keyboard to create your perfect aesthetic with an exciting suite of accessories in bold new colorways, including swappable top frames, rotary knobs, keycap sets, and coiled cables!</p>

                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;