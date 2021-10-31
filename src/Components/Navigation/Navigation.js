import React from 'react';
import { Route } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const Navigation = () => {
    const { user, logOut } = useAuth()
    return (
        <div>
            <ul class="nav justify-content-center">
                <Route render={({ history }) => (
                    <li class="nav-item" onClick={() => { history.push('/') }}>
                        <a class="nav-link btn btn-dark  p-2 m-2" aria-current="page" style={{ color: "#FFB6C1" }}>Home</a>
                    </li>
                )
                } />
                <li class="nav-item">
                    <a class="nav-link btn btn-dark p-2 m-2 " aria-current="page" href="#About" style={{ color: "#FFB6C1" }}>About</a>
                </li>

                <li class="nav-item">
                    <a class="nav-link  btn btn-dark p-2 m-2" aria-current="page" href="#Services" style={{ color: "#FFB6C1" }}>Tour Point</a>
                </li>
                <br />
                <Route render={({ history }) => (
                    <li class="nav-item" onClick={() => { history.push('/Appointment') }}>
                        <a class="nav-link  btn btn-dark p-2 m-2" aria-current="page" style={{ color: "#FFB6C1" }}>Tourist Feedback</a>
                    </li>
                )
                } />
                <Route render={({ history }) => (
                    <li class="nav-item" onClick={() => { history.push('/Pathology') }}>
                        <a class="nav-link  btn btn-dark p-2 m-2 " aria-current="page" style={{ color: "#FFB6C1" }}>Wanna Booking?</a>
                    </li>

                )
                } />

                {
                    user.email ? <>
                        <small>{user.displayName || user.email || user.image}{" "}</small>
                        <button onClick={logOut} style={{ color: "#FFB6C1" }} className="btn btn-dark p-2 m-2">Log out</button>
                    </> : <Route render={({ history }) => (
                        <li class="nav-item " onClick={() => { history.push('/Login') }}>
                            <a class="nav-link  btn btn-dark p-2 m-2" aria-current="page" style={{ color: "#FFB6C1" }}>Login</a>
                        </li>


                    )
                    } />
                }
                <a class=" btn btn-dark p-2 m-2 " href="/Signup" style={{ color: "#FFB6C1" }}>Register Here</a>
            </ul>

        </div>
    );
};

export default Navigation;