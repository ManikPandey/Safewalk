import React from 'react';
import { useSelector } from 'react-redux';
import PatientDetails from './PatientDetails';
import IncidentLog from './IncidentLog';

const Dashboard = () => {
    const users = useSelector((state) => state.users.users);
    
    return (
        <div>
            <h2>Dashboard</h2>
            {users.map(user => <PatientDetails key={user.id} user={user} />)}
            <IncidentLog />
        </div>
    );
};

export default Dashboard;
