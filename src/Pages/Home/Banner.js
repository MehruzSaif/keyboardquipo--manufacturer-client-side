import React from 'react';
import keyboard from '../../assests/keyboard.png';
import bg1 from '../../assests/bg1.png';
import PrimaryButton from '../Shared/PrimaryButton';
import './Banner.css';

const Banner = () => {
    return (
        <div className="hero min-h-screen"
            style={{
                background: `url(${bg1})`
            }}        
        >
            <div className="hero-content flex-col lg:flex-row-reverse">
                <img src={keyboard} className="animated" alt=''/>
                <div>
                    <h1 className="text-5xl font-bold">Your Next QWERTY</h1>
                    <p className="py-6">For mechanical keyboards lovers, by mechanical keyboards lovers. Customize your keyboard to create your perfect aesthetic with an exciting suite of accessories in bold new colorways, including swappable top frames, rotary knobs, keycap sets, and coiled cables!</p>

                    <PrimaryButton>GET STARTED</PrimaryButton>
                </div>
            </div>
        </div>
    );
};

export default Banner;