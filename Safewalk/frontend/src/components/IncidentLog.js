import React, { useEffect, useState } from 'react';

const IncidentLog = () => {
    const [incidents, setIncidents] = useState([]);

    useEffect(() => {
        fetch('/api/incidents')
            .then(response => response.json())
            .then(data => setIncidents(data));
    }, []);

    return (
        <div>
            <h2>Incident Log</h2>
            <ul>
                {incidents.map((incident, index) => (
                    <li key={index}>{incident.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default IncidentLog;
