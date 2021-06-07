import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Navbar from "./components/NavBar/NavBar";
import Footer from "./components/Footer/Footer";

import Wrapper from "./components/Wrapper/Wrapper";
import'bootstrap/dist/css/bootstrap.css';
// import'bootstrap/dist/css/bootstrap-theme.css';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Home} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/projects" component={Projects} />
          <Route exact path="/about" component={About} />
        </Wrapper>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
