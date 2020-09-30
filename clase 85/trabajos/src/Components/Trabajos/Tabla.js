import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Tabla.scss';

const Tabla = () => {

    const [users, setUsers] = useState([]);
    const [jobs, setJobs] = useState ([]);

    const getUsers = async () => {
        try {
           const res = await axios.get('https://5f518d325e98480016123ada.mockapi.io/api/v1/users');
           setUsers(res.data); 
        }catch(err) {
            alert(`Error${err}`);
        }        
    };

    const getJobs = async () => {
        try {
            const res = await axios.get('https://5f518d325e98480016123ada.mockapi.io/api/v1/jobs');
            setJobs(res.data);    
        }catch(err) {
            alert(`Error${err}`);
        }
    };

    useEffect (() => {
        getUsers();
        getJobs();
    }, []);

    return (
        <div className="table-container">
            <table>
                <thead class-Name="table-header">
                    <tr>  
                        <th>id</th>
                        <th>name</th>
                        <th>avatar</th>
                        <th>job</th>
                    </tr>    
                </thead>
                {
                    users.map(user => {
                        let job = jobs.find(tjo => user.id === tjo.id);
                        return (
                            <tbody>
                                <tr>  
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td><img src={user.avatar} alt="avatar"/></td>
                                    jobs.map
                                    <td>{job.name}</td>
                                </tr>    
                            </tbody>    
                        )                    
                    })

                }
            </table>
            
        </div>
    )
}


export default Tabla;