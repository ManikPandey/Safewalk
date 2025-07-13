import React from 'react';

const PatientDetails = ({ user }) => {
    return (
        <div>
            <h3>{user.name}</h3>
            <p>Contact: {user.contact}</p>
        </div>
    );
};

export default PatientDetails;
