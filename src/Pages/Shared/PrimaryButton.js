import React from 'react';
import { useNavigate } from 'react-router-dom';

const PrimaryButton = ({ children }) => {

    const navigate = useNavigate();

    return (
        <button
            className="btn btn-primary uppercase text-white font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-accent"
            onClick={() => navigate('/login')}
        >{children}
        </button>
    );
};

export default PrimaryButton;