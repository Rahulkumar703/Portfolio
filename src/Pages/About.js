import React from 'react'
import myImg from '../Assets/me.jpg'
import './style/About.css'

function About() {
    return (
        <div className="About-page page">
            <div className="about">
                <div className="social-links">
                    <i className="fi fi-brands-linkedin"/>
                    <i className="fi fi-brands-twitter"/>
                </div>
                <div className="info">
                    <span>Hello, I am Rahul</span>
                    <br />
                    <span>I am Student of B.Tech 1<sup>st</sup> Year At Motihari College of Engineering </span>
                </div>
            </div>
            <div className="img-box">
                <img src={myImg} alt="Me" />

            </div>
        </div>
    )
}

export default About
