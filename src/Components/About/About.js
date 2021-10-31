import React from 'react';
import "./About.css";
import preview from "../../assests/preview.jpg";

const About = () => {
    return (
        <div>
            <div style={{}} className="row   ">
                <div className="col d-flex justify-content-center">
                    <img width="600px" src={preview} alt="" />
                </div>
                <div className="col d-flex flex-column text-center align-items-center  ">
                    <h1 style={{ color: "#DB7093" }}>About Us</h1>
                    <p style={{ color: "gray" }}>The World Travel Guide (WTG) is the flagship digital consumer brand within the Columbus Travel Media portfolio. A comprehensive guide to the world’s best travel destinations, its print heritage stretches back more than 30 years, with the online portal reaching its 20-year anniversary in 2019. Available in English, German and Spanish versions, the WTG provides detailed and accurate travel content designed to inspire global travellers. It covers all aspects, from cities to airports, cruise ports to ski and beach resorts, attractions to events, and it also includes weekly travel news, features and quizzes. Updated every day by a dedicated global editorial team, the portal logs 1 million+ unique users monthly.</p>
                </div>

            </div>
        </div>
    );
};

export default About;