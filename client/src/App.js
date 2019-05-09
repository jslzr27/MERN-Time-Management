import React, { Component } from 'react';
import Navbar from "./components/Navbar/index.js";
import Footer from "./components/Footer/index.js";
import SignUp from "./pages/User/signup";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home/index";
import Dashboard from "./pages/dashboard/index";
import './App.css';
import NoMatch from "./pages/NoMatch/index";
import { Grid } from "@material-ui/core";



class App extends Component {
  render() {
    return (
      <Router>
      <Grid container className="App">
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/dashboard" component={Dashboard} />
          <Route component={NoMatch} />
        </Switch>
        <Footer />
      </Grid>
      </Router>
    );
  }
}

export default App;
