import React from 'react';
import { Button } from 'react-bootstrap';
import TopBar from './TopBar';
import About from './About';
import resume from './img/EsakkiRajCv.pdf';
import Education from './Education'

function Header() {
  return (
    <>
      <TopBar />
      <div className="container about-content">
        <div className="container left-wrapper">
          <p className="header-text">Hi, My Name is</p>
          <h1 className="header-name heading">Esakki Raj</h1>
          <h1 className="header-dec">I Build Things for The Web.</h1>
          <p className="header-content">
          I’m a MERN stack developer dedicated to crafting dynamic and user-friendly web applications.At present, 
          I'm committed to building applications that are not only powerful but also accessible and user-friendly.
          </p>
        </div>
        <a href={resume} download>
          <Button variant="outline-light"  className="resume-btn">
            Download Resume
          </Button>
        </a>
        <div className="right-wrapper"></div>
      </div>
      <About />
      <Education/>
    </>
  );
}

export default Header;
