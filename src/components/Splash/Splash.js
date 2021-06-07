import React from "react";
import robot from "../images/robot.jpg";
import speech from "../images/speech-bubble.png";
import "./style.css";


export default function Splash() {
    
      return (
          <div>
              <div className="parent">
              <img className="robot" src={robot} alt="Splash" />
              <img className="speechBubble" src={speech} alt="Welcome to my portfolio!" />
              </div>
          </div>
      );
    }