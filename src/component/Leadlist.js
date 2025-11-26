import React, { useState, useEffect } from "react";

const Leadlist = () => {
    const [leads, setLeads] = useState([]);
    const [doctor, setDoctor] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchLeads();
        fetchdoctor();
    }, []);

    const fetchLeads = async () => {
        try {
            setLoading(true);
            const response = await fetch('http://localhost:5000/api/lead/leads');
            
            if (!response.ok) {
                throw new Error('Failed to fetch leads');
            }
            
            const data = await response.json();
            setLeads(data.leads);
            setLoading(false);
        } catch (err) {
            setError(err.message);
            setLoading(false);
        }
    };

     const fetchdoctor = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/users');
            
            if (!response.ok) {
                throw new Error('Failed to fetch doctors');
            }
            
            const data = await response.json();
            setDoctor(data.users);
        } catch (err) {
            setError(err.message);
        }
    };

    const handleDoctorAssign = async (lead, doctorId) => {
        // Yahan aapko pura lead object aur selected doctor ki ID mil rahi hai
        console.log('Lead Object:', lead);
        console.log('Selected Doctor ID:', doctorId);
        
        // API call example:
        // try {
        //     const response = await fetch('http://localhost:5000/api/lead/assign', {
        //         method: 'POST',
        //         headers: {
        //             'Content-Type': 'application/json',
        //         },
        //         body: JSON.stringify({
        //             leadId: lead._id,
        //             doctorId: doctorId,
        //             leadData: lead
        //         })
        //     });
        //     const data = await response.json();
        //     console.log('Assigned successfully:', data);
        // } catch (err) {
        //     console.error('Error assigning doctor:', err);
        // }
    };

    if (loading) {
        return <div className="text-center p-4">Loading leads...</div>;
    }

    if (error) {
        return <div className="alert alert-danger">Error: {error}</div>;
    }

    return (
        <div>
            <table className="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th> 
                        <th scope="col">Company</th>
                        <th scope="col">Status</th> 
                        <th scope="col">Doctor Assign</th> 
                    </tr>
                </thead>
                <tbody>
                    {leads.length > 0 ? (
                        leads.map((lead, index) => (
                            <tr key={lead._id}>
                                <th scope="row">{index + 1}</th>
                                <td>{lead.name}</td>
                                <td>{lead.email}</td>
                                <td>{lead.phone}</td>
                                <td>{lead.company}</td>
                                <td>{lead.status}</td>
                                <td>
                                    <select 
                                        className="form-select"
                                        onChange={(e) => handleDoctorAssign(lead, e.target.value)}
                                    >
                                        <option value="">Select Doctor</option>
                                        {doctor.length > 0 ? (
                                            doctor.map((doc) => (
                                                <option key={doc._id} value={doc._id}>
                                                    {doc.name}
                                                </option>
                                            ))
                                        ) : (
                                            <option disabled>No doctors available</option>
                                        )}
                                    </select>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No leads found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default Leadlist;