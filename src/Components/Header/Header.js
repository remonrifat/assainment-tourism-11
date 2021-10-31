import React from "react";
import "./Header.css";

import { Button, Col, Container, Nav, Navbar, Row } from 'react-bootstrap';
import Navigation from "../Navigation/Navigation";


const Header = () => {
    return (
        <div className="header  dark sticky-top "  >
            <nav className="navbar navbar-expand-lg navbar-light bg-light sticky-top">
                <div className="container-fluid " >
                    <a className="navbar-brand fs-1 fw-bold" href="#"> <span style={{ color: " #DB7093" }}>Tiouper.Com</span>  <span className="fs-6 ">Plan YOur Journey</span></a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <div className=" ms-auto mb-2 mb-lg-0 ">
                            <Navigation></Navigation>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;