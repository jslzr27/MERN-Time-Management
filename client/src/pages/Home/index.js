import React, { Component, Fragment } from 'react'
import Button from '@material-ui/core/Button';
import "./style.css";
import { Typography } from '@material-ui/core';

export default class Home extends Component {
  render() {
    // const style = {
    //   backgroundImage: `url(${"https://images.pexels.com/photos/908298/pexels-photo-908298.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"})`
    // }
    return (
      <div>
      <div className="section">
        <section className="parallax" id="p1">
            <div id="main-text">
            <p>Manage your time with us</p>
            <p>Find Time to Learn, Play or Enjoy</p>
            <Button variant="contained" color="primary" href="/signup" id="button"><p>Register for Free</p></Button>
            <p>Already have an account. <span className="login"><a href="/signup">Log in</a></span></p>
            </div>
        </section>
      </div>
      <div className="section" id="s1">
        <p><i class="far fa-calendar-alt"></i> Schedule your time</p>
        <p><i class="fas fa-edit"></i> Add a new task you want to improve</p>
        <p><i class="fas fa-stopwatch"></i> Track your activities</p>
        <Button variant="contained" color="primary" href="/signup" id="button">Sign Up Now</Button>
      </div>
      <div className="section">
        <section className="parallax" id="p2">
          <div id="main-text">
          <p>Manage your time with us</p>
        <p>Find Time to Learn, Play or Enjoy</p>
        <Button variant="contained" color="primary" href="signup" id="button">Register for Free</Button>
        <p>Already have an account. <span className="login"><a href="/signup">Log in</a></span></p>
          </div>
      </section>
      </div>
      <div className="section" id="s2">
        <i class="fas fa-clock"></i>
        <p>Start managing your time with us</p>
        <Button variant="contained" color="primary" href="/signup" id="button">Sign Up Now</Button>
      </div>
    </div>
    ) 
  }
}
