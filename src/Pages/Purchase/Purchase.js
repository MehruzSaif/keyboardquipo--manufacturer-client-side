import React from 'react';
import { useParams } from 'react-router-dom';
import usePurchase from '../Hook/usePurchase';
import Footer from '../Shared/Footer';

const Purchase = () => {
    const {partId} = useParams();

    const [part] = usePurchase(partId);

    return (
        <div>
            <h2>hello purchase</h2>

            <Footer></Footer>
        </div>
    );
};

export default Purchase;