import React from "react";
import'bootstrap/dist/css/bootstrap.css';

import TravelBuddy from "../images/travel-app.jpg";
import ouiCircles from "../images/ouiCircles.jpg";
import Password from "../images/password-mgr.jpg";
import Weather from "../images/weather-app.jpg";
import PlantBaby from "../images/plant-baby.jpg";
import EmpTracker from "../images/employee-tracker.jpg";
import Placeholder from "../images/placeholder3.jpg";
// import  from "../images/";

import "./style.css";

export default function DisplayCard() {

  return (
    <div>
    <div className="background">
        <div className="container">
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card text-white .h-100">
                    <img className="card-img" src={TravelBuddy} alt="Travel Buddy app" />
                            <div className="card-img-overlay">
                                <h5 className="card-title">Travel Buddy</h5>
                                <p className="card-text">An app created to assist people wanting to travel as pandemic shutdowns end.</p>
                                    <div className="card-body">
                                        <a href="#" className="card-link">Github</a>
                                        <a href="#" className="card-link">Deployed App Example</a>
                                    </div>
                            </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-white .h-100">
                    <img className="card-img" src={ouiCircles} alt="oui Circles App" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">ouiCircles</h5>
                            <p className="card-text">An app created to assist local neighborhoods in buying, selling, and bartering items, goods, and service; to set up special events; advertise fundraising drives or need for volunteer help; and much more.</p>
                                <div className="card-body">
                                    <a href="#" className="card-link">Github</a>
                                    <a href="#" className="card-link">Deployed App Example</a>
                                    </div>
                            </div>
                </div>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card text-white .h-100">
                    <img className="card-img" src={PlantBaby} alt="Plant Baby app" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Plant Baby</h5>
                            <p className="card-text">A website allowing for the buying, selling, and trading of plants between end-users.</p>
                                <div className="card-body">
                                    <a href="#" className="card-link">Github</a>
                                    <a href="#" className="card-link">Deployed App Example</a>
                                    </div>
                            </div>
                </div>
            </div>
            <div className="col">
                <div className="card text-white .h-100">
                <img className="card-img" src={Weather} alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Weather App</h5>
                            <p className="card-text">Coming very soon.</p>
                                <div className="card-body">
                                    <a href="#" className="card-link">Github</a>
                                    <a href="#" className="card-link">Deployed App Example</a>
                                    </div>
                            </div>
                </div>
            </div>
        </div>
        <div className="row row-cols-1 row-cols-md-2 g-4">
            <div className="col">
                <div className="card text-white .h-100">
                <img className="card-img" src={Password} alt="Password Creator app" />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Password Generator</h5>
                            <p className="card-text">A simple, easy to  use password generator app.</p>
                                <div className="card-body">
                                    <a href="#" className="card-link">Github</a>
                                    <a href="#" className="card-link">Deployed App Example</a>
                                    </div>
                            </div>
                </div>
            </div>
            <div className="col">
                <div className="card bg-dark text-white .h-100">
                    <img className="card-img" src={EmpTracker} alt="..." />
                        <div className="card-img-overlay">
                            <h5 className="card-title">Employee Database (with React)</h5>
                            <p className="card-text">A simplified Employee database that allows for searching employess, filtering, and listing employees.</p>
                                <div className="card-body">
                                    <a href="#" className="card-link">Github</a>
                                    <a href="#" className="card-link">Deployed App Example</a>
                                    </div>
                            </div>
                </div>
            </div>
        </div>
        </div>
    </div>
    </div>
  );
}



