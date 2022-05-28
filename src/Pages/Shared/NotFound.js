import React from 'react';
import bgNF from '../../assets/bgNF.jpg';
import Footer from './Footer';

const NotFound = () => {
    return (
        <div>
            <div className="hero h-screen"
                style={{
                    background: `url(${bgNF})`
                }}
            >
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-9xl font-bold">404</h1>
                        <p className="mb-5 text-5xl">Page not found</p>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;