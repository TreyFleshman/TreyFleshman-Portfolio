import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Preloader from "../src/components/Pre";

import Navbar from './components/NavBar';
import Home from './components/Pages/Home/Home';
import Footer from "./components/Footer";
import About from "./components/Pages/About/About";
import Experience from "./components/Pages/Experience/Expereince";
import Projects from "./components/Pages/Projects/Projects";

function App() {
  const [load, upadateLoad] = useState(true);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);
    
    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" exact component={About} />
          <Route path="/experience" exact component={Experience} />
          <Route path="/projects" exact component={Projects} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;