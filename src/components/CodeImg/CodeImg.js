import React from "react";
// import{SplitButton,MenuItem}from'react-bootstrap';

import html5 from "../images/html5.png";
import css3 from "../images/css3.png";
import js from "../images/javascript.png";
import jquery from "../images/jquery.png";
import npm from "../images/npm.png";
import node from "../images/node-js.png";
import express from "../images/express.png";
import sequelize from "../images/sequelize.png";
import mysql from "../images/mysql.png";
import mongo from "../images/mongodb.png";
import react from "../images/react.png";
import handlebars from "../images/handlebars.png";
import bootstrap from "../images/bootstrap.png";
// material ui
import heroku from "../images/heroku.png";
import git from "../images/git.png";
import github from "../images/github.png";
import gitlab from "../images/gitlab.png";
import vsc from "../images/visualstudio.png";
import slack from "../images/slack.png";
import chrome from "../images/chrome.png";
// firefox
// safari
import "./style.css";

function CodeImg() {
  return (
    <div>
      <div class="container">
        <h2>Technologies:</h2>
      <div class="row row-cols-6">
        <div class="col">
          <img className="img-tech" src={html5} alt="HTML" />
          <img className="img-tech" src={css3} alt="CSS" />
          <img className="img-tech" src={js} alt="Javascript" />
          <img className="img-tech" src={jquery} alt="jQuery" />
          <img className="img-tech" src={npm} alt="npm" />
          <img className="img-tech" src={node} alt="Nodemon" />
        </div>
        <div class="col">  
          <img className="img-tech" src={express} alt="Express" />
          <img className="img-tech" src={sequelize} alt="Sequelize" />
          <img className= "img-tech" src={mysql} alt="mySQL" />
          <img className= "img-tech" src={mongo} alt="MongoDB" />
          <img className= "img-tech" src={react} alt="React" />
          <img className= "img-tech" src={handlebars} alt="Handlebars" />
        </div>
        <div class="col">
          <img className= "img-tech" src={bootstrap} alt="Bootstrap" />
          <img className= "img-tech" src={heroku} alt="Heroku" />
          <img className= "img-tech" src={git} alt="Git" />
          <img className= "img-tech" src={github} alt="GitHub" />
          <img className= "img-tech" src={gitlab} alt="GitLab" />
          <img className= "img-tech" src={vsc} alt="Visual Studio Code" />
        </div>
        <div class="col">
          <img className= "img-tech" src={slack} alt="Slack" />
          <img className= "img-tech" src={chrome} alt="Chrome" />
        </div>
      </div>
      </div>
    </div>
  );
}

export default CodeImg;
