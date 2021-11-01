import React, { useEffect, useState } from 'react';

import "./Services.css";
import serviceData from './serviceData'



const Services = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch("./users.json")
            .then((res) => res.json())
            .then((data) => setUsers(data));
    }, []);
    console.log(users);

    return (
        <div>
            <h1 style={{ color: "#DB7093" }} className="text-center">Tour Services List</h1>
            <div className="my-5 ">
                <div className="row row-cols-1 row-cols-md-4 g-4">

                    {users.map(user =>
                        <div class="col" style={{}}>
                            <div class="card ">
                                <img src={user?.imageUrl} class="card-img-top img-fluid" alt="..." />
                                <div class="card-body shadow-lg">
                                    <h5 class="card-title" style={{ color: "#DB7093" }}>{user.title}</h5>
                                    <p class="card-text" >{user.description}</p>
                                </div>
                                <div className="d-flex justify-content-center my-4">
                                    <a href="/Register"><button className="btn btn-outline-dark " style={{ color: "#DB7093", width: "120px" }}>Let's Enjoy</button></a>
                                </div>
                            </div>
                        </div>

                    )}


                </div>

            </div>
        </div>
    );
};

export default Services;