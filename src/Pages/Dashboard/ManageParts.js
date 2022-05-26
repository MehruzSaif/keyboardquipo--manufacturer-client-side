import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
const ManageParts = () => {

    const { data: equipments, isLoading } = useQuery('equipments', () => fetch('http://localhost:5000/part', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='ml-3 mt-2 my-5'>Manage Equipments: {equipments.length}</h2>
        </div>
    );
};

export default ManageParts;