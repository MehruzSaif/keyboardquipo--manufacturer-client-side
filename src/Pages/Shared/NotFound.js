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
                <div class="hero-overlay bg-opacity-60"></div>
                <div class="hero-content text-center text-neutral-content">
                    <div class="max-w-md">
                        <h1 class="mb-5 text-9xl font-bold">404</h1>
                        <p class="mb-5 text-5xl">Page not found</p>

                    </div>
                </div>

            </div>
            <Footer></Footer>
        </div>
    );
};

export default NotFound;