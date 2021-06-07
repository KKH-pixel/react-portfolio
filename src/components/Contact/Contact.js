import React from "react";
import linkedin from "../images/linkedin.png";
import github from "../images/github.png";
import email from "../images/mail.png";
import resume from "../images/resume.png";
import "./style.css";

function Contact() {
  return (
    <div>
        <h5 className="text-white h4">Contact Me</h5>
            <a aria-current="page" href="mailto:k.k.hunt@gmx.com"><img src={email} alt="Email" />K.K. Hunt</a>
            <br />
            <a aria-current="page" href="https://www.linkedin.com/in/kathunt/" target="blank"><img src={linkedin} alt="LinkedIn" />LinkedIn</a>
            <br />
            <a aria-current="page" href="https://docs.google.com/document/d/16SK1rQJqCW96azswVTCs1QVlje15hguMqXw9JzmIiBw/edit?usp=sharing"><img src={resume} alt="Resume" />Resume</a>
            <br />
            <a aria-current="page" href="https://github.com/KKH-pixel" target="blank"><img src={github} alt="GitHub" />Github</a>
    </div>
  );
}

export default Contact