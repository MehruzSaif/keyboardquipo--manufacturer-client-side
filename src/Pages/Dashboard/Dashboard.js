import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../Hook/useAdmin';

const Dashboard = () => {
    const [user] = useAuthState(auth);
    const [admin] = useAdmin(user);
    // const [normalUser] = useUser(user);

    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-3xl font-bold mt-5 ml-3 text-purple-500'>Your Dashboard</h2>
                <Outlet></Outlet>


            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 overflow-y-auto w-66 bg-base-100 text-base-content">
                    {/* <!-- Sidebar content here --> */}

                    {/* for non-admin */}
                    {!admin && <>
                        <li><Link to="/dashboard/orders">My Orders</Link></li>
                        <li><Link to="/dashboard/review">My Reviews</Link></li>
                    </>}

                    

                    {/* for admin */}
                    {admin && <>
                        <li><Link to="/dashboard/users">All Users & Make Admin</Link></li>
                        <li><Link to="/dashboard/addPart">Add a Equipment</Link></li>
                        <li><Link to="/dashboard/managePart">Manage Equipments</Link></li>
                    </>}

                     {/* for every user */}       
                    <li><Link to="/dashboard/profile">My Profile</Link></li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;