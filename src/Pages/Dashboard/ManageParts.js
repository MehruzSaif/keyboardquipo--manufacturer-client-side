import React from 'react';
import { useQuery } from 'react-query';
import Loading from '../Shared/Loading';
import PartRow from './PartRow';
const ManageParts = () => {

    const { data: equipments, isLoading, refetch } = useQuery('equipments', () => fetch('http://localhost:5000/part', {
        headers: {
            authorization: `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <h2 className='ml-3 mt-2 my-5'>Manage Equipments: {equipments.length}</h2>

            <div class="overflow-x-auto">
                <table class="table w-full">

                    <thead>
                        <tr>
                            <th></th>
                            <th>Avatar</th>
                            <th>Name</th>
                            <th>Quantity</th>
                            <th>Action</th>
                        </tr>
                    </thead>

                    <tbody>
                        {
                            equipments.map((equipment, index) => <PartRow
                                key={equipment._key}
                                equipment={equipment}
                                index={index}
                                refetch={refetch}
                            ></PartRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageParts;