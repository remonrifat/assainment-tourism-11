import React from 'react';
import loginpic from "../Login/images/login-1.jpg"
import useAuth from '../../Hooks/useAuth';

import "./Login.css";
import { NavLink } from 'react-router-dom';

const Login = () => {
    const { signinUsingGoogle } = useAuth()
    return (
        <div>

            <div className="d-flex position-absolute top-50 start-50 translate-middle">
                <div className="signin-image ">
                    <figure>
                        <img src={loginpic} alt="Login pic" />
                    </figure>
                    <NavLink to="/signup" className="signup-image-link btn btn-dark p-2 m-2" style={{ color: "#FFB6C1" }}>Create An Account</NavLink>
                </div>
                <div className="signin-form m-5">
                    <h2 className="form-title"></h2>
                    <form className="register-form" id="register-form">

                        <div className=" ">
                            <label htmlFor="email">
                                <i class="zmdi zmdi-email material-icons-name"> <br /> </i>
                            </label><br />
                            <input className="border border-primary rounded shadow-lg" variant="outline-primary " type="text" name="name" id="name " autoComplete="off" placeholder="Your Email" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">
                                <i class="zmdi zmdi-lock material-icons-name"> </i>
                            </label><br />
                            <input className="border border-primary rounded shadow-lg" type="password" name="password" id="password" autoComplete="off" placeholder="Your password" />
                        </div>
                        <br />
                        <div className="form-group form-button">
                            <input type="Submit" name="signin" id="signin" className="form-submit btn btn-dark p-2" style={{ color: "#FFB6C1" }} value="Log In" />
                        </div>
                    </form>
                    <p>Do you Sign up before?</p>
                    <button style={{ color: "#FFFFFF" }} className="btn btn-dark p-2" onClick={signinUsingGoogle} style={{ color: "#FFB6C1" }}>Google Sign In</button>
                    <p className="p-4">OR</p>
                    <a class=" btn btn-dark p-2 m-2 " href="/Signup" style={{ color: "#FFB6C1" }}>Register Here</a>
                </div>
            </div >
        </div>
    );
};

export default Login;