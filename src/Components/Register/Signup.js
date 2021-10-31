import React from 'react';
import { NavLink } from 'react-router-dom';
import signpic from "../Register/images/registration-1.jpg";
import './Signup.css';

const Signup = () => {
    return (

        <div>
            <h1 className="">Register Your Account</h1>
            <div className="d-flex position-absolute top-50 start-50 translate-middle">
                <form className="register-form" id="register-form">
                    <div className="form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-account material-icons-name"> </i>
                        </label>
                        <input className="border border-primary rounded shadow-lg" type="text" name="name" id="name" autoComplete="off" placeholder="Your Name" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">
                            <i class="zmdi zmdi-email material-icons-name"> </i>
                        </label>
                        <input className="border border-primary rounded shadow-lg" type="text" name="name" id="name" autoComplete="off" placeholder="Your Email" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">
                            <i class="zmdi zmdi-phone-in-talk  material-icons-name"> </i>
                        </label>
                        <input className="border border-primary rounded shadow-lg" type="number" name="phone" id="phone" autoComplete="off" placeholder="Your Phone Number" />
                    </div>

                    <div className="form-group">
                        <label htmlFor="">
                            <i class="zmdi zmdi-car"></i>
                        </label>
                        <input className="border border-primary rounded shadow-lg" type="text" name="name" id="name" autoComplete="off" placeholder="Where would you like to Travel?" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">
                            <i class="zmdi zmdi-lock material-icons-name"> </i>
                        </label>
                        <input className="border border-primary rounded shadow-lg" type="password" name="name" id="name" autoComplete="off" placeholder="create password" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="name">
                            <i class="zmdi zmdi-lock material-icons-name"> </i>
                        </label>
                        <input className="border border-primary rounded shadow-lg" type="password" name="name" id="name" autoComplete="off" placeholder="Confirm password" />
                    </div>
                    <div className="form-group form-button">
                        <input type="Submit" name="signup" id="signup" style={{ color: "#FFB6C1" }} className="form-submit btn btn-dark p-2 m-2 border border-primary rounded shadow-lg" value="Register" />
                    </div>
                </form>

                <div className="signup-image">
                    <figure>
                        <img src={signpic} alt="registration pic" />
                    </figure>
                    <NavLink to="/Login" className="signup-image-link btn btn-dark p-2 m-2" style={{ color: "#FFB6C1" }}> I Am Already Register</NavLink>
                </div>
            </div>

        </div>
    );
};

export default Signup;